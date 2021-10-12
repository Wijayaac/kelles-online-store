import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default Home
