import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import {mobile} from "../responsive"

const Container = styled.div`
    height: 60px;
    background-color: #66a1fe;
    ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({flex: 1, justifyContent: "center"})}
`
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    /* border-radius: 20px; */
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginRight: "5px"})}
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`
const Center = styled.div`
    flex: 2;
    text-align: center;
    ${mobile({flex: 1, justifyContent: "center"})}
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "13px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 12px;
    background-color: #2661cf;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    ${mobile({fontSize: "10px", marginLeft: "-10px", marginRight: "11px"})}
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/> 
                    <SearchIcon style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>MG's Fineline</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <Badge badgeContent={4} color="primary">
                 <ShoppingCartOutlinedIcon />
                </Badge>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar