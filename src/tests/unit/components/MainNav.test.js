import { screen, render } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue"

describe("MainNav", () => {
    it("display company name", () => {
        render(MainNav);
        const companyName = screen.getByText("Job Career");
        expect(companyName).toBeInTheDocument();
    });

    it("display menu items for navigation", () => {
        render(MainNav)
        const navigationMenuitems = screen.getAllByRole("listitem")
        const navigationMenuText = navigationMenuitems.map((item) => (
            item.textContent
        ))
        expect(navigationMenuText).toEqual([
            "Teams",
            "Locations",
            "Life at Job Career",
            "How we hire",
            "Students",
            "Jobs"
        ])
    })
})