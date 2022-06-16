import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #2661cf;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
        Grab a deal! Free shipping on orders above KSH 550
    </Container>
  )
}

export default Announcement