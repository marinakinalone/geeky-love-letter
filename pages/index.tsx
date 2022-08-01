import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, TextContent, BinaryContent, ShareOptions, CopiedAlert} from '../components/index'
import { useState } from 'react'
import convertToBinary from '../helpers/convertToBinary'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const placeholderMessage = "Write a secret love letter to your nerd crush and send them the binary version."
  const [binaryMessage, setBinaryMessage] = useState<string>(convertToBinary(placeholderMessage))
  const [displayAlert, setDisplayAlert] = useState<boolean>(false)

  const convertMessage = (message: string) => setBinaryMessage(convertToBinary(message));

  return (
    <>
      <Head>
        <title>Geeky Love Letter</title>
        <meta name="description" content="A cute text to binary convertor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {displayAlert? (<CopiedAlert />):(<></>)}
        <Header />
        <TextContent placeholder={placeholderMessage} convertMessage={convertMessage} />
        <BinaryContent output={binaryMessage} />
        <ShareOptions message={binaryMessage} setDisplayAlert={setDisplayAlert} />
        <Footer />

      </main>
    </>
  )
}

export default Home
