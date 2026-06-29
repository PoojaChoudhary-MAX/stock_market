import React from 'react';

// render → component ko test environment me show karta hai
// screen → rendered elements ko find karne ke liye use hota hai
import { render, screen } from '@testing-library/react';

// jest-dom extra matchers deta hai jaise toBeInTheDocument()
import "@testing-library/jest-dom";

// Hero component import kiya jisko hum test kar rahe hain
import Hero from "../landing_page/home/Hero";


// describe → ek group banata hai related tests ka
describe('hero component', () => {

    // test → ek specific cheez check karne ke liye
    test("renders hero image", () => {

        // Hero component ko render kiya (fake DOM me)
        render(<Hero />);

        // screen se image find kar rahe hain alt text "Hero Image" ke basis pe
        const heroImage = screen.getByAltText("Hero Image");

        // check karte hain ki image document (screen) me present hai ya nahi
        expect(heroImage).toBeInTheDocument();

        // check karte hain ki image ka src "media/image" hai ya nahi
        expect(heroImage).toHaveAttribute(
            "src",
           expect.stringContaining ("media/homeHero.png")
        );
    });

    test("renders heading", () => {
        render(<Hero />);
        const heading = screen.getByText("Invest in everything");
        expect(heading).toBeInTheDocument();
    });

    test("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button", {name: /signup now/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });

});