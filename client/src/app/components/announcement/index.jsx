import styled from "styled-components";
import tw from "twin.macro";
const Container = styled.div`
  ${tw`
    h-8
    pl-10
    pr-10
    bg-black
    text-white
    flex
    items-center
    justify-center
    text-sm
    font-light
  `}
`;
const Announcement = () => {
  return <Container>Super Deal! Free Delivery on Orders Over 500Tk</Container>;
};

export default Announcement;
