import React, { Component } from 'react'
import styled from 'styled-components'
import './client.css';

const Outer = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #7d498a, #e0525d);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
`

const Logo = styled.img`
  width: 8rem;
`

const Info = styled.div`
  max-width: calc(100vw - 2rem);
  min-height: 30rem;
  width: 40rem;
  margin: 1rem;
  padding: 1rem 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 36px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > pre {
    font-size: 1.3rem;
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
        <Info>
          <h2>Hello {this.props.ctx.world_name}</h2>
          <pre>
            { JSON.stringify(this.props.ctx, null, 2) }
          </pre>
        </Info>
      </Outer>
    )
  }
}

export default Home
