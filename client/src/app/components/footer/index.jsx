import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import MapIcon from "@material-ui/icons/Map";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
  bg-gray-50
  flex
  flex-col
  xl:flex-row
  `}
`;
const Left = styled.div`
  ${tw`
  flex-1
  flex
  flex-col
  p-5
  `}
`;
const Logo = styled.h1`
  ${tw`
    text-2xl
    font-bold
`}
`;
const Description = styled.p`
  ${tw`
    mt-5
    mb-5
  `}
`;
const SocialContainer = styled.div`
  ${tw`
  flex
  `}
`;
const SocialIcon = styled.div`
  background-color: #${(props) => props.color};
  ${tw`
  w-10
  h-10
  flex
  items-center
  justify-center
  mr-5
  rounded-sm
  text-white
  cursor-pointer
  `}
`;

const Center = styled.div`
  ${tw`
    flex-1
    p-5
    hidden
    xl:flex
    xl:flex-col
  `}
`;
const Title = styled.span`
  ${tw`
     mb-8
     text-xl
  `}
`;
const List = styled.ul`
  ${tw`
     m-0
     p-0
     list-none
     flex
     flex-wrap
  `}
`;
const ListItem = styled.li`
  ${tw`
  w-1/2
  mb-3
  cursor-pointer
  `}
  &:hover {
    color: grey;
  }
`;
const Right = styled.div`
  ${tw`
    flex-1
    p-3
    bg-gray-400
    xl:bg-gray-50
  `}
`;
const ContactItem = styled.div`
  ${tw`
    flex
    items-center
    mb-5
  `}
`;
const Payment = styled.img`
  ${tw`
    w-1/2
    cursor-pointer
  `}
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Hijibiji.</Logo>
        <Description>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon style={{ marginRight: "10px" }} /> 6 Hill view,Nasirabad
          ,4201
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +880 17182958 33
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} /> contact@shopex.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
