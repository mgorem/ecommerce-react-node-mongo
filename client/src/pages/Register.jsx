import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #66a1fe;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 800;
    color: gray;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: #66a1fe;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #2661cf;
    }
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By Creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY.</b>
                </Agreement>
                <Button>CREATE</Button>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register