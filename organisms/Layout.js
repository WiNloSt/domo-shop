import Link from 'next/link'
import styled from 'emotion/react'

const Layout = props => (
  <div>
    <Nav>
      <Link href="/">
        <LinkItem>Home</LinkItem>
      </Link>
    </Nav>
    {props.children}
    <Img src="/static/logo.png" />
  </div>
)

export default Layout

const Nav = styled.nav`
  background: #52a9bc;
  cursor: pointer;
`

const LinkItem = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;

  &:hover {
    color: hsla(191, 44%, 90%, 1);
  }
`

const Img = styled.img`
  position: absolute;
  width: 114px;
  bottom: 1rem;
  right: 1rem;
  filter: opacity(0.6) saturate(0.8);
`
