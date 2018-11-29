import React, { Component } from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #7d498a, #e0525d);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: white;
    
  > h1 {
    font-size: 3rem;
  }
`

const Logo = styled.img`
  width: 8rem;
  position: absolute;
  right: 1rem;
  bottom: 2rem;
  z-index: 0;
`

const Info = styled.div`
  color: black;
  max-width: calc(100vw - 2rem);
  width: 50rem;
  padding: 1rem 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 36px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  
  > pre {
    font-size: 1.4rem;
    align-self: stretch;
    overflow-x: auto;
  }
`

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { ctx }
  }

  render() {
    return (
      <Outer>
        <Logo src={require('./logo.svg')} alt="Linc Logo" />
        <h1>Hello {this.props.ctx.world_name}</h1>
        <Info>
          <pre>
            { JSON.stringify(this.props.ctx, null, 2) }
          </pre>
        </Info>
      </Outer>
    )
  }
}

export default Home
