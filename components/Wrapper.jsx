import styled from 'styled-components'


const Wrapper = styled.div`
    background-image: url(${props => props.theme.backgroundImage});
    min-height: 100vh;
    width: 100vw;
`

export default Wrapper