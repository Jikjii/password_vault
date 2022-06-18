import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import Vault from '../components/Vault'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [step, setStep] = useState<'login' | 'register' | 'vault'>('register')
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      {step === 'register' && <RegisterForm />}
      {step === 'login' && <LoginForm />}
      {step === 'vault' && <Vault />}
    </main>



    </div>
  )
}

export default Home
