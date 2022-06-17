import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    padding-top: 25px;
    color: #66a1fe;
    font-size: 40px;
    font-weight: 600;
`

const SectionHeading = (props) => {
  return (
    <Container>
        <Title>{props.title}</Title>
    </Container>
  )
}

export default SectionHeading