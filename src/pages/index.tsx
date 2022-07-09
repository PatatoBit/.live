import type { NextPage } from 'next'
import Head from 'next/head'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Title from '../components/Title'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Patato.live</title>
        <meta name="description" content="Pat's Hideout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Parallax pages={4}>
        <ParallaxLayer speed={1}><Title /></ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}><About /></ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}><Skills/></ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}><Contact/></ParallaxLayer>
      </Parallax>  
    </div>
  )
}

export default Home
