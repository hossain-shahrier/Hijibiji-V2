import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
import tw from "twin.macro";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  ${tw`
    pt-3
    pb-3
    pl-5
    pr-5
    flex
    justify-between
    items-center
  `}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${tw`
        flex
        flex-1
        items-center
      `}
`;
const SearchContainer = styled.div`
  ${tw`
    border-2
    border-gray-900
    flex
    items-center
    ml-6
    p-1
  `}
`;
const Input = styled.input`
  ${tw`
    border-none
    outline-none
    font-extralight
    xl:w-48
    w-16
  `}
`;
const Center = styled.div`
  ${tw`
    flex-1
    text-center
  `}
`;
const Logo = styled.h1`
  ${tw`
    xl:font-bold
    xl:text-xl
    font-medium
  `}
`;
const Right = styled.div`
  ${tw`
    flex
    flex-1
    items-center
    justify-items-end
    justify-center
  `}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${tw`
    lg:font-light
    cursor-pointer
    lg:ml-6
    font-extralight
    ml-2
  `}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Hijibiji.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
