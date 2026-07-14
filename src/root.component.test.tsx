import { render } from "@testing-library/react";

import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root />);

    expect(getByText(/Início/i)).toBeInTheDocument();
  });

  it("renders all sidebar menu items", () => {
    const { getByText } = render(<Root />);

    expect(getByText(/Início/i)).toBeInTheDocument();
    expect(getByText(/Transferências/i)).toBeInTheDocument();
    expect(getByText(/Investimentos/i)).toBeInTheDocument();
    expect(getByText(/Outros serviços/i)).toBeInTheDocument();
  });
});
