import React from 'react';
import styles from 'styled-components'

const Container = styles.button`
  cursor: pointer;
  background: ${props => props.type };
  color: ${props => props.type === 'transparent' ? 'white' : 'black'};
  width: 18rem;
  height: 4rem;
  font-size: 1.5rem;
  font-weight: bolder;
  border: solid 1px ${props => props.type === 'transparent' ? 'white' : 'gray'};
  transition: 0.3s;
  padding: 1rem;
  
  &:hover {
    background: ${props => props.type === 'white' ? '' : 'white'};
    opacity: ${props => props.type === 'white' ? '0.8' : '1'};
    color: ${props => props.type === 'white' ? 'black' : 'black'};
  }
`

function Button({ type, children}) {
  console.log(type)


  return (
    <Container
      type={type}
    >



      {children}
    </Container>
  );
}

export default Button;