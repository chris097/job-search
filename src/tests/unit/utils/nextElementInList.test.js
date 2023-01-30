import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
    it("locates element in the list and return element in the list", () => {
        const list = ["A", "B", "C", "D", "E"];
        const value = "C";
        const result = nextElementInList(list, value)
        expect(result).toBe("D")
    })

    describe("when element is at the end of list", () => {
        it("locates next element that the start of the list", () => {
            const list = ["A", "B", "C", "D", "E"];
            const value = "E";
            const result = nextElementInList(list, value);
            expect(result).toBe("A");
        })
    })
})