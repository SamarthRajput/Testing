import express from "express";
import z from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async(req, res) => {
    const parsedResponse = sumInput.safeParse(req.body);

    // this is known as early return, it is a common pattern in javascript  
    if(!parsedResponse.success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    // We will mockout this request 
    // We want this request doesnt actually run, whenever this code is being tested, we want to run a unit test 
    // Unit test are supposed to just all the lines of code that are not dependent on external services
    // this part is dependent on external service which we just assume works and hence we just mock out this function call 
    await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })


    res.json({
        answer
    })
});

app.get("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});