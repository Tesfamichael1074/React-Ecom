import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from './components/landing_page/LandingPage'
import NavBar from './components/NavBar'

const Home: NextPage = () => {


  

  return (
    <div className="dark:bg-slate-800 h-screen ">
      <Head>
        <title>Addis-Ecom</title>
        <meta name="description" content="Open source e-commerce UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen flex flex-col' >
        <NavBar />
        <LandingPage />
      </main>

    </div>
  )
}

export default Home
