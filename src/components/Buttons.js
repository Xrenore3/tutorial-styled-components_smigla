import styled from 'styled-components'

export const Button = styled.button`
  background:${  (props) => props.color?props.color:'yellow'};
  text-transform: uppercase;
  padding: 2rem;
  font-size: 20px;
`