import React from 'react'
import styled from 'styled-components'


const StyledHeader = () => {
    return (
        <StyledWrapper>
            word
            <h1>Hello from header</h1>
            <h2 className='random'>some text from header</h2>
        </StyledWrapper>

    )
}

const StyledWrapper = styled.section`
    background: red;
    transition: all 2s ease-in-out;
    h1 {
        color: gray
    }
    .random {
        color: blue
    }
    h1:hover{
        color:blue
    }

`

export default StyledHeader
