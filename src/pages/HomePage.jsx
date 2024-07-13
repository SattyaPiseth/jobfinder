import React from 'react'
import SliderComponent from '../Components/home/SliderComponent'
import HeroSectionComponent from '../Components/home/HeroSectionComponent'
import SearchComponent from '../Components/home/SearchComponent'
import PositionCardComponent from '../Components/home/PositionCardComponent'
import AdvertisingComponent from '../Components/home/AdvertisingComponent'
import FeatureDetailComponent from '../Components/home/FeatureDetailComponent'

const HomePage = () => {
  return (
    <div>
        <HeroSectionComponent/>
        <SliderComponent/>
        <SearchComponent/>
        <PositionCardComponent/>
        <AdvertisingComponent/>
        <FeatureDetailComponent/>
    </div>
  )
}

export default HomePage
