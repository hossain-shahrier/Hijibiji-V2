import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import tw from "twin.macro";

const Container = styled.div`
  height: 60vh;
  ${tw`
    
    bg-black
    text-white
    flex
    items-center
    justify-center
    flex-col
  `}
`;
const Title = styled.h1`
  ${tw`
    text-6xl
    mb-5
  `}
`;
const Description = styled.p`
  ${tw`
    text-2xl
    font-light
    mb-5
    text-center
    xl:text-left
  `}
`;
const InputContainer = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  ${tw`
    xl:w-2/5
    h-12
    flex
    justify-between
    w-4/5
  `}
`;
const Input = styled.input`
  flex: 8;
  ${tw`
    border-none
    outline-none
    flex
    pl-5
  `}
`;
const Button = styled.button`
  ${tw`
    bg-black
   flex-1
   border-none
   text-white
   cursor-pointer
  `}
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email address" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
