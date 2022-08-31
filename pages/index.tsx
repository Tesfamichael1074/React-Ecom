import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from './components/NavBar'

const Home: NextPage = () => {


  

  return (
    <div className="dark:bg-slate-800 h-screen ">
      <Head>
        <title>Addis-Ecom</title>
        <meta name="description" content="Open source e-commerce UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen' >
        <NavBar />
        <div className="h-full bg-green-200 w-screen ">
          ww
        </div>
        <div className="h-full bg-green-900 w-screen ">
          ww
        </div>
      </main>

    </div>
  )
}

export default Home
