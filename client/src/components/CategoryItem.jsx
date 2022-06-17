import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    min-width: 380px;
    height: 350px;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 5px;
    border: none;
    border-radius: 15px;
    background-color: #fff;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.image}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>VIEW MORE</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem