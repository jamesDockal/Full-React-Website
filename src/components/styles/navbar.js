import styles, { css, keyframes} from 'styled-components'

export const Nav = styles.div`
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  color: white;
` 

export const LogoContainer = styles.div`
  display: flex;
  gap: 1rem
`
const ani = keyframes `
to {
    left: 0%
  }
  from {
    left: 100%
  }
`

export const Pages = styles.div`
  display: flex;
  position: relative;
  color: black;
  gap: 3rem;
  z-index: 10;
  width: 30vw;
  align-items: center;
  justify-content: space-around;
  top: ${props => props.isOpen && props.isSmall ? '50vh' : '0'};
  left: ${props => props.isSmall ? '100%' : '0'};
  height: ${props => props.isOpen && props.isSmall ? '90vh' : ''};
  animation: ${props => props.isOpen  ? css`0.5s ${ani} forwards` : ''};
  flex-direction: ${props => props.isOpen && props.isSmall ? 'column' : 'row'};
  background-color: ${props => props.isOpen  ? 'orange' : 'transparent'};
`

export const Text = styles.span`
  font-size: 2rem;
`

export const LinkStyle = {
  textDecoration: "none",
  color: "white",
  // background: "green"
}

export const LinkText = styles.span`
  font-size: 1.5rem;
  
  &:hover {
    color: white;
    border-bottom: 2px solid black;
    transition: border 0.2s; 
  }
`
export const Icon = styles.div`
  color: antiquewhite;
  font-size: 2rem;
`

export const Hamburger = styles(Icon)`
  color: #666;
  cursor: pointer;
  position: absolute;

  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
  
  display: ${ props => props.show ? 'block' : 'none' }
  
  
`
// style={{color: 'antiquewhite'}}

// display: ${ props => {
//   console.log(props)
//   if(props.show ) {
//     return 'block'
//   }else{
//     return 'none'
//   }
// }}