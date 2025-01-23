import express from "express";

// We are exporting our app instance, bcz we want our tests to import it
// So whenever you are writing your express code, you want to write tests in it, your index.ts will not have app.listen() at the end  
export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});