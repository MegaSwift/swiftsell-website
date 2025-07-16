import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import '@testing-library/jest-dom';

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
    const pricingLinks = screen.getAllByRole('link', { name: /pricing/i });
    // Select the last one, which should be in the mobile menu
    const mobilePricingLink = pricingLinks[pricingLinks.length - 1];
    expect(mobilePricingLink).toBeTruthy();
    fireEvent.click(mobilePricingLink);

    // The Pricing page should be rendered
    expect(screen.getByText(/pricing page/i)).toBeInTheDocument();
  });
}); 