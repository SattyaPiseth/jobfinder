import React from 'react'
import SliderComponent from '../Components/home/SliderComponent'
import HeroSectionComponent from '../Components/home/HeroSectionComponent'
import SearchComponent from '../Components/home/SearchComponent'

const HomePage = () => {
  return (
    <div>
        <HeroSectionComponent/>
        <SliderComponent/>
        <SearchComponent/>
    </div>
  )
}

export default HomePage
