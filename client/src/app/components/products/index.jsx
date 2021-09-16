import styled from "styled-components";
import tw from "twin.macro";
import { popularProducts } from "../../../data";
import Product from "../product";
const Container = styled.div`
  ${tw`
      p-5
      flex
      flex-wrap
      justify-between
      `}
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
