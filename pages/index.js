import Head from 'next/head'
import { About, Challenges, Mentors, Tldr } from '../sections' // add Team here while adding it later. also add the team files to Sections folder.
import { HeaderImage, Layout } from '../components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>#iamfreeCodeCamp</title>
        <meta
          property="og:title"
          content="#iamfreeCodeCamp Challenge"
          key="title"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <HeaderImage />
      <Tldr />
      <About />
      <Challenges />
      <Mentors />
      {/* add team info here */}
    </Layout>
  )
}
