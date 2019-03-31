import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #index {
    align-items: center;
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    height: 100%;
    margin: 0;
    overflow: scroll;
    padding: 0;
    justify-content: center;
    width: 100%;

    @media (max-width: 992px) {
      user-select: none;
    }
  }

  #index {
    background: linear-gradient(135deg, rgb(245, 247, 250) 0%, rgb(195, 207, 226) 100%);
    display: grid;
    grid-template-columns: 1fr 15fr 1fr;

    @media (min-width: 768px ) {
      grid-template-columns: 1fr 15fr 1fr;
      grid-template-rows: 1fr 15fr 1fr;
      grid-template-areas: 
        "header header header"
        "gutterl main gutterr"
        "footer footer footer";
    }
  }
`

const Container = styled(animated.div)`
  position: relative;
  padding: 1em;
  display: grid;
  grid-area: main; 
  background: white;
  will-change: width, height;

  @media (min-width: 768px) {
    border-radius: 5px;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  }
`
  
export { Global, Container }