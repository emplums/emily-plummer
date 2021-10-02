import styled from 'styled-components'

const Text = styled.p`
    color: ${props => props.theme.text.color.primary};
    font-family: ${props => props.theme.text.default.fontFamily};
`

export default Text