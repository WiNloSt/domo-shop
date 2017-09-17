import styled from 'emotion/react'

const Layout = props => (
  <div>
    {props.children}
    <Img src="/static/logo.png" />
  </div>
)

export default Layout

const Img = styled.img`
  position: absolute;
  width: 114px;
  bottom: 1rem;
  right: 1rem;
  filter: opacity(0.6) saturate(0.8);
`
