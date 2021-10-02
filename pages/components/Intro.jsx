import styled from 'styled-components'



const Intro = styled.div`
    padding: 40px;
    background-color: white;
    text-align: center;
    height: 30%;
    font-family: ${props => props.theme.text.header.fontFamily};
    color: ${props => props.theme.text.color.primary};

    h1 {
        font-size: 50px;
    }
`

export default Intro