import styled from 'emotion/react'
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

const Button = styled.button`
  background: #b1dddd;
  font-size: 20px;
`
