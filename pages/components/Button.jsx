import styled from 'styled-components'


const Button = styled.button`
    color: ${props => props.theme.button.color};
    background-color: ${props => props.theme.button.bg};
    padding: 4px;
    border-radius: 3px;
`

export default Button