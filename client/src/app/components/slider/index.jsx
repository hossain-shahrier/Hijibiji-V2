import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { useState } from "react";
import { sliderItems } from "../../../data";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
  w-full
  h-screen
  relative
  overflow-hidden
  hidden
  xl:flex
  `}
`;
const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
  ${tw`
    w-12
    h-12
    bg-gray-300
    rounded
    flex
    items-center
    justify-center
    absolute
    top-0
    bottom-0
    m-auto
    cursor-pointer
    opacity-50
  `};
`;
const Wrapper = styled.div`
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${tw`
    h-full
    flex
  `}
`;
const Slide = styled.div`
  background-color: #${(props) => props.bg};
  ${tw`
    w-screen
    h-screen
    flex
    items-center
  `}
`;
const ImageContainer = styled.div`
  ${tw`
    h-full
    flex-1
  `}
`;
const Image = styled.img`
  ${tw`
     h-4/5
  `}
`;
const InfoContainer = styled.div`
  ${tw`
    flex-1
    p-12
  `}
`;
const Title = styled.h1`
  ${tw`
     text-7xl
  `}
`;
const Description = styled.p`
  ${tw`
    mt-12
    mb-12
    font-bold
    tracking-wide
  `}
`;
const Button = styled.button`
  ${tw`
    p-3
    text-xl
    border-2
    border-gray-500
    bg-transparent
    cursor-pointer
  `}
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
