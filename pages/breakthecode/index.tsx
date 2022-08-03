import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Footer, InputContent, OutputContent, CopiedAlert} from '../../components/index'
import { CopyMessage } from '../../components/breakthecode/index'
import { useState } from 'react'
import { convertToText } from '../../helpers/convertToText'
import { splitBinary } from '../../helpers/splitBinary'

import styles from '../../styles/Home.module.scss'

const BreakTheCode: NextPage = () => {
    const copywriting = {
        placeholder: 'Paste your binary message here',
        inputContainerTitle: 'binary editor',
        inputContainerLabel: 'binary message to be converted to text',
        outputContainerTitle: 'text generator',
        outputContainerLabel: 'text generated from the binary editor'
      }
      
  const [textMessage, setTextMessage] = useState<string>("")
  const [displayAlert, setDisplayAlert] = useState<boolean>(false)

  const translateMessage = (message: string) => {
      const messageToTranslate = splitBinary(message);
      if (messageToTranslate !== undefined) {
            setTextMessage(convertToText(messageToTranslate));
        }
    }
    
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
        <InputContent placeholder={copywriting.placeholder} convertMessage={translateMessage} title={copywriting.inputContainerTitle} label={copywriting.inputContainerLabel} />
        <OutputContent output={textMessage} title={copywriting.outputContainerTitle} label={copywriting.outputContainerLabel} type={"text"} />
        <CopyMessage message={textMessage} setDisplayAlert={setDisplayAlert} />
        <Footer routeMessage={'want to write a secret message?'} route={'/'} />

      </main>
    </>
  )
}

export default BreakTheCode