import Link from 'next/link'
import styled from 'react-emotion'

const Layout = props => (
  <div>
    <Nav>
      <Link href="/">
        <LinkItem>Home</LinkItem>
      </Link>
    </Nav>
    <Container>{props.children}</Container>

    <Img src="/static/logo.png" />
  </div>
)

export default Layout

const NAV_HEIGHT = 3

export const CenterContainer = styled.div`
  height: calc(100vh - ${NAV_HEIGHT}rem);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
`

const Nav = styled.nav`
  height: ${NAV_HEIGHT}rem;
  background: #52a9bc;
  padding-left: 1rem;
  padding-right: 1rem;
`

const LinkItem = styled.span`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 100%;

  &:hover {
    color: hsla(191, 44%, 90%, 1);
  }
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  ${props => props.debug && 'border: 1px solid red'};
`

const Img = styled.img`
  position: absolute;
  width: 114px;
  bottom: 1rem;
  right: 1rem;
  filter: opacity(0.6) saturate(0.8);
`
