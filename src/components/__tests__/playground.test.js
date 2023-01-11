
import { describe, it, expect } from "vitest";

import { evenOrOdd, multiply } from '@/playground';

describe("basic math", () => {
  it("sum up two numbers", () => {
    expect(1 + 2).toBe(3);
  });

  describe("evenOrOdd", () => {

    describe("when number is even", () => {
      it("Indicate the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      }); 
    });
  });

  // describe("when number is odd", () => {
  //   it("indicate the number is odd", () => {
  //     expect(evenOrOdd(3)).toBe("Odd")
  //   })
  // });

  // describe("multiply", () => {
  //   it("multiply numbers", () => {
  //     expect(multiply(2,3)).toBe(6)
  //   })
  // })

});