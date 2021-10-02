import styled from 'styled-components'


const ButtonLink = styled.button`
    background-color: transparent;
    margin: 4px;
    box-shadow: none;
    border: none;
    color: ${props => props.theme.text.color.primary};
    font-family: ${props => props.theme.text.default.fontFamily};
    &:hover {
        text-decoration: underline;
    }

    &:active {
        color: ${props => props.theme.text.color.primary};
    }
`

export default ButtonLink