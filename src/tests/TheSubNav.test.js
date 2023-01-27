import { screen, render, getByText } from "@testing-library/vue";
import TheSubNav from "@/components/TheSubNav.vue";

describe("TheSubNav", () => {
    describe("when is on the jobs page", () => {
        it("displays jobs count", () => {
            render(TheSubNav, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true
                    }
                },
                data() {
                    return {
                      onJobResultPage: true,
                    };
                }
            })
            const jobCount = screen.getByText("1638");
            expect(jobCount).toBeInTheDocument();
        })
    })
    describe("when is not on the jobs page", () => {
        it("does NOT display job count", () => {
            render(TheSubNav, {
              global: {
                stubs: {
                  FontAwesomeIcon: true,
                },
              },
              data() {
                return {
                  onJobResultsPage: false,
                };
              },
            });
        })
        const jobCount = screen.queryByText("1638");
        expect(jobCount).not.toBeInTheDocument()
    })
})