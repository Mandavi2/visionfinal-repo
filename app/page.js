import React from 'react'
import Hero from './components/Hero/Hero'
import Offers from './components/Offers/Offers'
import Tabs from './components/Tabs/Tabs'
import World from './components/world/World'
import MasonryGrid from './components/masonry/Masonry'
import Slider from './components/slider/Slider'


const page = () => {
  return (
    <div>
      <Hero/>
      <Offers/>
      <Tabs/>
      <Slider/>
      <World/>
      <MasonryGrid/>
    </div>
  )
}

export default page
