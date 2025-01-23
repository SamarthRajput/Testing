import {describe, expect, it} from '@jest/globals';
import request from "supertest";
// We can import app in index.test.ts, so the the library supertest can get access to the app variable 
import { app } from "../index"

// a POST request to /sum
describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        // We are instead using request which comes from supertest library, to simulate sending that request without actually starting the http server 
        const res = await request(app).post("/sum").send({
          a: 1,
          b: 2
        });

        console.log(res);

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
});
