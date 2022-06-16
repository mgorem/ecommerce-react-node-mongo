import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e7effd;
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
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`
const Icon = styled.div`
    
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