import styled from 'styled-components'


const Button = styled.button`
    color: ${props => props.theme.button.color};
    background-color: ${props => props.theme.button.bg.default};
    font-family: ${props => props.theme.text.default.fontFamily};
    box-shadow: 0px 6px 10px ${props => props.theme.button.shadow.default};
    border: none;
    padding: 6px 12px;
    min-width: 40px;
    border-radius: 45px;
    cursor: pointer;
    outline: none;
    height: 45px;
    transition: all 0.3s ease 0s;

    &:hover {
        background-color: ${props => props.theme.button.bg.hover};
        box-shadow: 0px 15px 20px ${props => props.theme.button.shadow.hover};
        color: #fff;
        transform: translateY(-3px);
    }
`

export default Button