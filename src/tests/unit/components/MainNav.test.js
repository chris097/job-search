import { screen, render } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue"

describe("MainNav", () => {
    it("display company name", () => {
        render(MainNav);
        screen.debug()
    })
})