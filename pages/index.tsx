import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, InputContent, OutputContent, ShareOptions, CopiedAlert} from '../components/index'
import { useState } from 'react'
import convertToBinary from '../helpers/convertToBinary'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const copywriting = {
    placeholder: "Write a secret love letter to your nerd crush and send them the binary version.",
    inputContainerTitle: 'text editor',
    inputContainerLabel: 'text to be converted in binary language',
    outputContainerTitle: 'binary generator',
    outputContainerLabel: 'binary message generated from the text editor'
  }

  const [binaryMessage, setBinaryMessage] = useState<string>(convertToBinary(copywriting.placeholder))
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
        <InputContent placeholder={copywriting.placeholder} convertMessage={convertMessage} title={copywriting.inputContainerTitle} label={copywriting.inputContainerLabel} />
        <OutputContent output={binaryMessage} title={copywriting.outputContainerTitle} label={copywriting.outputContainerLabel} type={"binary"} />
        <ShareOptions message={binaryMessage} setDisplayAlert={setDisplayAlert} />
        <Footer routeMessage={'got a binary message to convert?'} route={'/breakthecode'} />

      </main>
    </>
  )
}

export default Home
