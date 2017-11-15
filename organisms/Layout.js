import Link from 'next/link'
import styled from 'emotion/react'

const Layout = props => (
  <div>
    <Nav>
      <Link href="/">
        <LinkItem>Home</LinkItem>
      </Link>
    </Nav>
    <CenterContainer>{props.children}</CenterContainer>

    <Img src="/static/logo.png" />
  </div>
)

export default Layout

const CenterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
`

const Nav = styled.nav`background: #52a9bc;`

const LinkItem = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  cursor: pointer;

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
