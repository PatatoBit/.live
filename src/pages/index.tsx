import type { NextPage } from 'next'
import Head from 'next/head'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Title from '../components/Title'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact';

import bg from '../assets/bg.png'
import chair from '../assets/chair.png'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>patato.live</title>
        <meta name="description" content="Pat's Hideout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Parallax pages={4}>
        <ParallaxLayer speed={1}><Title /></ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}><About /></ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}><Skills/></ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}><Contact/></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={.9}
          factor={2}
          style={{
            zIndex: -2,
            backgroundImage: `url(/images/bg.png)`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            zIndex: -1,
            backgroundImage: `url(/images/chair.png)`,
            backgroundSize: 'cover',
          }}
        />

      </Parallax>  
    </div>
  )
}

export default Home
