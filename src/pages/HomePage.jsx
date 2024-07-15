import React, { useEffect } from 'react'
import SliderComponent from '../Components/home/SliderComponent'
import HeroSectionComponent from '../Components/home/HeroSectionComponent'
import SearchComponent from '../Components/home/SearchComponent'
import PositionCardComponent from '../Components/home/PositionCardComponent'
import AdvertisingComponent from '../Components/home/AdvertisingComponent'
import FeatureDetailComponent from '../Components/home/FeatureDetailComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../redux/jobs/jobsSlice'

const HomePage = () => {

const dispatch = useDispatch();
const jobs = useSelector((state) => state.jobs.jobs);

useEffect(() => {
    dispatch(fetchJobs());
}, [dispatch]);
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
