// Rather than importing these from @jest/globals, we have imported them from vitest, everything is exactly the same 
import {describe, expect, it, vi} from 'vitest';
import request from "supertest";
// We can import app in index.test.ts, so the the library supertest can get access to the app variable 
import { app } from "../index"

// we are mocking out the database implementation
// If we dont mock the database call, then we are writing an integration test
// Integration test says ki I will test everything including putting things in the database
// We want prismaClient to be an object, which has a sum key, which is an object, which has a create key which is vi.fn()
vi.mock('../db', () => ({
    prismaClient: { sum: { create: vi.fn() }}
}));

// the above syntax can be written as
vi.mock('../db', () => {
    return {
        prismaClient:{
            sum: {
                create: vi.fn()
            }
        }
    }
} )

// Rather than doing the above 2 complicated things we can do, it will deepMock the real prismaclient 
vi.mock('../db');

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
