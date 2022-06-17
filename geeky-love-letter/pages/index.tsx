import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, TextContent, BinaryContent, ShareOptions } from '../components/index'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Geeky Love Letter</title>
        <meta name="description" content="A cute text to binary convertor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <TextContent />
        <BinaryContent />
        <ShareOptions />
        <Footer />

      </main>
    </>
  )
}

export default Home
