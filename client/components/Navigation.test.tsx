import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";

function PricingPage() {
  return <div>Pricing Page</div>;
}

describe("Navigation mobile menu", () => {
  it("opens menu and navigates to Pricing page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navigation />
        <Routes>
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Open the hamburger menu
    const hamburger = screen.getByLabelText(/open menu/i);
    fireEvent.click(hamburger);

    // The Pricing link should now be visible in the mobile menu
    const pricingLink = screen.getByText(/pricing/i);
    fireEvent.click(pricingLink);

    // The Pricing page should be rendered
    expect(screen.getByText(/pricing page/i)).toBeInTheDocument();
  });
}); 