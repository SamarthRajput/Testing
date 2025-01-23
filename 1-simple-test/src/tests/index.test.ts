import {describe, expect, it} from "@jest/globals";
import { multiply, sum } from "..";

// Just 2 things describe and it to write tests in javascript
// We will be testing a certain functionality together  
// describe block takes 2 arguments, 1st a human readable think of what you are testing 
// 2nd argument the describe block takes is a function inside which you describe all of your individual test cases 
// Just like you wrote describe, you write it and then you give a description of the test and then inside this, you write your actual test 


// You describe, ki I am going to write all of my tests for a sum function, a sum module that i am trying to test 
// this describe means inside this, however many tests i write would be for the sum function 
describe('Testing all the calculator functionality', () => {

    describe('Testing sum function', () => {
        it('adds 1 + 2 to equal 3', () => {
            const finalAnswer = sum(1, 2);
            expect(finalAnswer).toBe(3);
            // expect(sum(1, 2)).toBe(3);
        });
        it('should return the sum of negative numbers correctly', () => {
            const finalAnswer = sum(-1, -2);
            expect(finalAnswer).toBe(-3);
        })
    });

    // and then we describe another top level describe for our multiply function
    describe('multiply', () => {
        it('multiply 2 * 2 to equal 4', () => {
            expect(multiply(2, 2)).toBe(4);
        });
    });
})
