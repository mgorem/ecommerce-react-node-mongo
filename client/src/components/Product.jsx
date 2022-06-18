import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.005);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e7effd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`
// const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     background-color: #fff;
//     position: absolute;
// `
const Image = styled.img`
    height: 250px;
    width: 250px;
    object-fit: cover;
    border: 5px solid #808080;
    border-radius: 50%;
    z-index: 2;
`
const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        background-color: aliceblue;
        transform: scale(1.3);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        {/* <Circle /> */}
        <Image src={item.image} />
        <Info>
            <Icon>
            <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
            <SearchOutlinedIcon />
            </Icon>
            <Icon>
            <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product