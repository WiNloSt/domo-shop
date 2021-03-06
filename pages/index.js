import styled, { injectGlobal } from 'react-emotion'
import Link from 'next/link'
import Layout, { CenterContainer } from 'organisms/Layout'

const Index = props => (
  <Layout>
    <CenterContainer>
      <ButtonContainer>
        <Link href="/bill">
          <Button big>Bill</Button>
        </Link>
      </ButtonContainer>
    </CenterContainer>
  </Layout>
)

export default Index

injectGlobal`
  html, body {
    font-family: Helvetica Nueu, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(0%, 0%, 0%, 0.7);
  }
`

const ButtonContainer = styled.div`
  flex-basis: 100%;
  text-align: center;

  &:not(:first-child) {
    margin-top: 1em;
  }

  @media (min-width: 480px) {
    flex-basis: initial;
    max-width: 180px;
    width: 100%;

    &:not(:first-child) {
      margin-top: inherit;
      margin-left: 2em;
    }
  }
`

const Button = styled.button`
  background: #b1dddd;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 2em;
  padding: 0.5em 1em;
  outline: none;
  color: rgba(0%, 0%, 0%, 0.7);
  font-size: ${props => (props.big ? '2em' : '1em')};
  max-width: 180px;
  width: 100%;
  transform: translateY(0px);

  &:focus {
    outline: none;
  }

  &:hover {
    background: #b1d6de;
    transform: translateY(-1px);

    &:active {
      transform: translateY(0px);
    }
  }

  &:active {
    background: #b1cfde;
  }
`
