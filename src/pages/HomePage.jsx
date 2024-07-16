import React, { useEffect } from "react";
import SliderComponent from "../Components/home/SliderComponent";
import HeroSectionComponent from "../Components/home/HeroSectionComponent";
import SearchComponent from "../Components/home/SearchComponent";
import PositionCardComponent from "../Components/home/PositionCardComponent";
import AdvertisingComponent from "../Components/home/AdvertisingComponent";
import FeatureDetailComponent from "../Components/home/FeatureDetailComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllJobs,
  fetchJobs,
  selectAllJobs,
  selectCurrentPage,
  selectPageSize,
} from "../redux/jobs/jobsSlice";

const HomePage = ({ categories }) => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectAllJobs);

  useEffect(() => {
    dispatch(fetchAllJobs())
  },[dispatch])


  return (
    <div className="container mx-auto p-4">
      <HeroSectionComponent />
      <SliderComponent />
      <SearchComponent categories={categories} />
      <PositionCardComponent jobs={jobs} />
      <AdvertisingComponent />
      <FeatureDetailComponent />
    </div>
  );
};

export default HomePage;
