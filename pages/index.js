import HomeBase from '@/components/Home'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>Dyor</title>
        <meta name="description" content="Dyor App Dashboard Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBase />
    </div>
  )
}

export default index