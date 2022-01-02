import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bulma/css/bulma.min.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GiGasPump } from 'react-icons/gi'
function MyApp({ Component, pageProps }: AppProps) {
  const router= useRouter();
  return (
    <>
      <Head>
        <title>Convert MPG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar is-link">
        <div className="container">
          <div className="navbar-brand">
            <a onClick={(e) => router.push('/')} className="navbar-item">
              <GiGasPump size={24} />
            </a>
          </div>
          <div id="navMenu" className="navbar-menu">

            <div className="navbar-end">
              <div className="navbar-item">
                <a onClick={(e) => router.push('/')} className="navbar-item has-text-white">
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <Component {...pageProps} />

        </div>
      </section>
    </>)
}

export default MyApp
