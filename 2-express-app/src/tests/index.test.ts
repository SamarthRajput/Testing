import {describe, expect, it} from '@jest/globals';
import request from "supertest";
// We can import app in index.test.ts, so the the library supertest can get access to the app variable 
// The motivation with supertest module is to provide a high level abstraction for testing HTTP 
import { app } from "../index"

// a POST request to /sum
describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        // We are instead using request which comes from supertest library, to simulate sending that request without actually starting the http server 
        const res = await request(app).post("/sum").send({
          a: 1,
          b: 2
        });

        // console.log(res);
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
      });

      it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: -1,
          b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
      });

      it("should return the sum of two zero number", async () => {
        const res = await request(app).post("/sum").send({
          a: 0,
          b: 0
        }); 
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
      });


      it("Should fail when a number is too big", async () => {
        const res = await request(app).post('/sum').send({
          a: 1000000000,
          b: 2
        });
        expect(res.body.message).toBe("Sorry we dont support big numbers");
        expect(res.statusCode).toBe(422);
      })
});


describe("POST /multiply", () =>{
  it("should return the multiple of two numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: 2,
      b: 2
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(4);
  });

  it("should return right value if one number is negative", async () => {
    const res = await request(app).post("/multiply").send({
      a: -2,
      b: 1000
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-2000);
  })
})
