import React from 'react'
import SliderComponent from '../Components/home/SliderComponent'
import HeroSectionComponent from '../Components/home/HeroSectionComponent'
import SearchComponent from '../Components/home/SearchComponent'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import PositionCardComponent from '../Components/home/PositionCardComponent'
import AdvertisingComponent from '../Components/home/AdvertisingComponent'
import FeatureDetailComponent from '../Components/home/FeatureDetailComponent'

const HomePage = () => {
  return (
    <div>
        <NavbarComponent/>
        <HeroSectionComponent/>
        <SliderComponent/>
        <SearchComponent/>
        <PositionCardComponent/>
        <AdvertisingComponent/>
        <FeatureDetailComponent/>
        <FooterComponent/>
    </div>
  )
}

export default HomePage
