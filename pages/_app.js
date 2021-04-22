import '../styles/bootstrapgrid.css'
import 'tailwindcss/tailwind.css'

import { Router } from 'next/dist/client/router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '../components/layout';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart',() => {
  NProgress.start()
})

Router.events.on('routeChangeComplete',() => {
  NProgress.done()
})

Router.events.on('routeChangeError',() => {
  NProgress.done()
})

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
