const { add, multiply } = require("../../src/math/math")

describe("math 함수", () => {
    it("add는 두 수를 더한다 1", () => {
        expect(add(2, 3)).toBe(5)
    })
    it("add는 두 수를 더한다 2", () => {
        expect(add(-1, 1)).toBe(0)
    })
    it("add는 두 수를 더한다 3", () => {
        expect(add(0, 0)).toBe(0)
    })
    
    it("multiply는 두 수를 곱한다 1", () => {
        expect(multiply(2, 3)).toBe(6)
    })
    it("multiply는 두 수를 곱한다 2", () => {
        expect(multiply(-2, 3)).toBe(-6)
    })
})