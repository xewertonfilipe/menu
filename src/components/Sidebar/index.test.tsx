import { render, screen } from "@testing-library/react";

import { Sidebar } from ".";

describe("Sidebar component", () => {
  it("renders all expected menu items in order", () => {
    render(<Sidebar />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(4);
    expect(links[0]).toHaveTextContent("Início");
    expect(links[1]).toHaveTextContent("Transferências");
    expect(links[2]).toHaveTextContent("Investimentos");
    expect(links[3]).toHaveTextContent("Outros serviços");
  });

  it("marks Início as the active item", () => {
    const { container } = render(<Sidebar />);
    const activeItem = container.querySelector("li");

    expect(activeItem).toBeInTheDocument();
    expect(activeItem?.textContent).toMatch(/Início/i);
  });
});
