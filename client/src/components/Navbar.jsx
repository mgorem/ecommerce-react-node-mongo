import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Container = styled.div`
    height: 60px;
    background-color: #66a1fe;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    /* border-radius: 20px; */
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 2;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    margin-right: 25px;
    padding: 5px 10px;
    border: none;
    border-radius: 12px;
    background-color: #2661cf;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input /> 
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