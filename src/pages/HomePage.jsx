import React, { useEffect } from "react";
import SliderComponent from "../Components/home/SliderComponent";
import HeroSectionComponent from "../Components/home/HeroSectionComponent";
import SearchComponent from "../Components/home/SearchComponent";
import PositionCardComponent from "../Components/home/PositionCardComponent";
import AdvertisingComponent from "../Components/home/AdvertisingComponent";
import FeatureDetailComponent from "../Components/home/FeatureDetailComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  selectCurrentPage,
  selectPageSize,
} from "../redux/jobs/jobsSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);

  useEffect(() => {
    dispatch(fetchJobs({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, pageSize]);
  return (
    <div>
      <HeroSectionComponent />
      <SliderComponent />
      <SearchComponent />
      <PositionCardComponent />
      <AdvertisingComponent />
      <FeatureDetailComponent />
    </div>
  );
};

export default HomePage;
