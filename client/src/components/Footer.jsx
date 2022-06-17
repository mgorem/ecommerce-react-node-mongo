import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
    display: flex;
    background-color: #66a1fe;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
          <Logo>MG's Fineline</Logo>
          <Desc>
            MG's Fineline ensures a confident and fashionable style for everyone. 
            We also update our customers on the latest and most fashionable trends
            based on their customized products. The beauty about MG's fineline is 
            lots of discounts and customer surprises. Watch out for to stand a chance 
            of winning vouchers.
          </Desc>
          <SocialContainer>
            <SocialIcon color="e4405f">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55acee">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="25d366">
              <WhatsAppIcon />
            </SocialIcon>
            <SocialIcon color="385999">
              <FacebookIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Kids Fashion</ListItem>
            <ListItem>Sports Wear</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Track Order</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact Us</Title>
          <ContactItem>
            <RoomIcon style={{marginRight: "10px"}} />
            2656-20100, Nairobi, Kenya
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{marginRight: "10px"}} />
            +254 7XX XXX XXX
          </ContactItem>
          <ContactItem>
            <EmailOutlinedIcon style={{marginRight: "10px"}} />
            contact@mgsfineline.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer