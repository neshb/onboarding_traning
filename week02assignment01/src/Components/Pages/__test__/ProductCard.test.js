import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { Provider } from "react-redux";
import store from "../../../Redux/Store";

const data = [
  {
    id: "1",
    name: "name 1",
    cost: "2000",
    quantity: "20",
    sellerName: "seller 01",
    category: "Fashion",
  },
];

const MockProductCard = ({ productsData }) => {
  return (
    <Provider store={store}>
      <ProductCard productsData={productsData} />
    </Provider>
  );
};

test("Product card testing -> props", async () => {
  render(<MockProductCard productsData={data} />);
  const linkElement = screen.getByText(/name 1/i);
  expect(linkElement).toBeInTheDocument();
});

test("Product card testing -> not empty div", async () => {
  const { container } = render(<MockProductCard productsData={data} />);
  expect(container.firstChild).not.toBeNull();
});

test("Product card testing -> button ", async () => {
  const { container } = render(<MockProductCard productsData={data} />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
