import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #66a1fe;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fff;
    ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 800;
    color: gray;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: #66a1fe;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover{
        background-color: #2661cf;
    }
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder="username or email" />
                <Input placeholder="Password" />
                <Button>LOGIN</Button>
                <Link>Do not remember your password?</Link>
                <Link>Create a new account.</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login