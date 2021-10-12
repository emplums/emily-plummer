import styled from 'styled-components'


const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.text.color.link};
    font-family: ${props => props.theme.text.default.fontFamily};
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`

export default Link