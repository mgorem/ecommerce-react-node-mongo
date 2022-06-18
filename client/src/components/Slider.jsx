import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    height: 80%;
    /* width: 700px;
    height: 700px; */
    border: none;
    border-radius: 80px;
    object-fit: cover;
    /* 1640, 1015, 380 */
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 78px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    /* Positioning */
    display: flex;
    align-items: center;
    justify-content: center;
    /* The parent(Container) should be relative */
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

    return(
        <Container>
            {/* Left Arrow with z-index of 2*/}
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowBackIosOutlinedIcon />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.image} alt="Hero" />
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>DISCOVER MORE</Button>
                </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            {/* Right Arrow with z-index of 2 */}
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider