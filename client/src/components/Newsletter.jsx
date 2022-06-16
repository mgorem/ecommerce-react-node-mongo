import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 60vh;
    background-color: #66a1fe;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 20px;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    border-radius: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #123efb;
    color: #fff;
    border-radius: 20px;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Subscribe to get timely updates from favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Enter your email here: example@email.com'/>
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter