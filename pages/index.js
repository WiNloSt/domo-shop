import styled, { injectGlobal } from 'emotion/react'
import Link from 'next/link'

const Index = props => (
  <div>
    <Link href="/guest">
      <Button>ทั่วไป</Button>
    </Link>
    <Link href="/member">
      <Button>สมาชิก</Button>
    </Link>
  </div>
)

export default Index

injectGlobal`
  html, body {
    font-size: 16px;
  }
`

const Button = styled.button`
  background: #b1dddd;
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 2em;
  padding: 0.5em 1em;
  outline: none;

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
