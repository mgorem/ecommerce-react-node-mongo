import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 600;
    font-size: 20px;
`
const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    ${mobile({width: "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption= styled.option`
    
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #66a1fe;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid #66a1fe;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #2661cf;
        color: #fff;
    }

`

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />  
        <Wrapper>
            <ImageContainer>
                <Image src="images/product-sale2.jpg" />
            </ImageContainer>
            <InfoContainer>
                <Title>Jordan 1 High OG</Title>
                <Desc>
                    Jordan 1 Low Jordans for life jordans featuring nike jordans
                    without limits jordans for sports jordans for basketball jordans
                    featuring MJ jordans for All.
                </Desc>
                <Price>KSH 4,500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="red"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>1</FilterSizeOption>
                            <FilterSizeOption>2</FilterSizeOption>
                            <FilterSizeOption>3</FilterSizeOption>
                            <FilterSizeOption>4</FilterSizeOption>
                            <FilterSizeOption>5</FilterSizeOption>
                            <FilterSizeOption>6</FilterSizeOption>
                            <FilterSizeOption>7</FilterSizeOption>
                            <FilterSizeOption>8</FilterSizeOption>
                            <FilterSizeOption>9</FilterSizeOption>
                            <FilterSizeOption>10</FilterSizeOption>
                            <FilterSizeOption>11</FilterSizeOption>
                            <FilterSizeOption>12</FilterSizeOption>
                            <FilterSizeOption>13</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />      
    </Container>
  )
}

export default Product