import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '../components/Sections/Hero'
import Wrapper from '../components/Wrapper'
import News from '../components/Sections/News'
import Drives from '../components/Sections/Drives'
import Schools from '../components/Sections/Schools'
import TmuNumber from '../components/Sections/TmuNumber'
import ServicesSection from '../components/Sections/ServicesSection'
import Footer from '../components/Layout/Footer'
import Giving from '../components/Sections/Giving'
import AlumniStory from '../components/Sections/AlumniStory'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Entrepreneurial
          University</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/tum-logo.svg" />
      </Head>
      <Hero />
      <News />
      <Drives />
      <TmuNumber />
      <Schools />
      <AlumniStory />
      <ServicesSection />
      <Giving />
      <Footer />
    </>
  )
}
