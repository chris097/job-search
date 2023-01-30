import { nextTick } from "vue";
import { render, screen } from "@testing-library/vue";

import TheHeadLine from "@/components/Jobsearch/TheHeadline.vue";

describe("TheHeadline", () => {
    
    it("displays introductory action verb", () => {
        vi.useFakeTimers();
        render(TheHeadLine);

        const actionPharse = screen.getByRole("heading", {
            name: /build for everyone/i
        });
        expect(actionPharse).toBeInTheDocument();
        vi.useRealTimers()
    });
    
    it("change action verb at a consistent interval", () => {
        vi.useFakeTimers();
        const mock = vi.fn();
        vi.stubGlobal("setInterval", mock);

        render(TheHeadLine);
        
        expect(mock).toHaveBeenCalled();
        vi.useRealTimers();
    });

    it("swaps action verb after interval", async () => {
        vi.useFakeTimers();
        render(TheHeadLine);
        vi.advanceTimersToNextTimer();

        await nextTick();
        const actionPhrase = screen.getByRole("heading", {
            name: /create for everyone/i
        });

        expect(actionPhrase).toBeInTheDocument();
        vi.useRealTimers();
    });
it("removes interval when component disappears", () => {
  const clearInterval = vi.fn();
  vi.stubGlobal("clearInterval", clearInterval);

  const { unmount } = render(TheHeadLine);
  unmount();
  expect(clearInterval).toHaveBeenCalled();
  vi.unstubAllGlobals();
});

})