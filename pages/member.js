import Link from 'next/link'
import Layout from 'organisms/Layout'

const Member = () => (
  <Layout>
    <span>
      ชื่อ: จักกฤษ เบอร์โทร: 08x-xxx-xxxx<Link href="/bill">
        <button>คิดเงิน</button>
      </Link>
    </span>
  </Layout>
)

export default Member
