import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
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
    
`
const Filter = styled.div`
    
`
const FilterTitle = styled.span`
    
`
const FilterColor = styled.div`
    
`
const FilterSize = styled.select`
    
`
const FilterSizeOption= styled.option`
    
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
                <Title>Jordan 1 Low</Title>
                <Desc>
                    Jordan 1 Low Jordans for life jordans featuring nike jordans
                    without limits jordans for sports jordans for basketball jordans
                    featuring MJ jordans for All.
                </Desc>
                <Price>KSH 4,500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="flame red" />
                        <FilterColor color="grey og"/>
                        <FilterColor color="black og"/>
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
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />      
    </Container>
  )
}

export default Product