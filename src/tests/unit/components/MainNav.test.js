import { screen, render } from "@testing-library/vue";
import userEvent  from "@testing-library/user-event";

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
    });

    describe('when user logs in', () => {
        it("displays user profoile picture", async() => {
            render(MainNav)

            let profileImage = screen.queryByRole("img", {
                name: /User profile image/i
            })
            expect(profileImage).not.toBeInTheDocument()

            const loginButton = screen.getByRole("button", {
                name: /sign in/i
            })
            await userEvent.click(loginButton)

            profileImage = screen.getByRole("img", {
              name: /User profile image/i,
            });
            expect(profileImage).toBeInTheDocument();
        })
    })
})