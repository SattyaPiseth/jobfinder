import React, { Suspense, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../redux/jobs/jobsSlice";
import useThrottleScroll from "../common/useThrottleScroll";

const SliderComponent = React.lazy(() => import("../Components/home/SliderComponent"));
const HeroSectionComponent = React.lazy(() => import("../Components/home/HeroSectionComponent"));
const SearchComponent = React.lazy(() => import("../Components/home/SearchComponent"));
const PositionCardComponent = React.lazy(() => import("../Components/home/PositionCardComponent"));
const AdvertisingComponent = React.lazy(() => import("../Components/home/AdvertisingComponent"));
const FeatureDetailComponent = React.lazy(() => import("../Components/home/FeatureDetailComponent"));

const HomePage = ({ categories, jobs }) => {
  const status = useSelector(selectStatus);

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem("scrollPosition", window.scrollY.toString());
  }, []);

  useThrottleScroll(saveScrollPosition, 200);

  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }, []);

  return (
    <div className="mx-auto p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSectionComponent isLoading={status === 'loading'} />
        <SliderComponent />
        <SearchComponent categories={categories} isLoading={status === 'loading'} />
        <PositionCardComponent jobs={jobs} isLoading={status === 'loading'} />
        <AdvertisingComponent />
        <FeatureDetailComponent />
      </Suspense>
    </div>
  );
};

export default React.memo(HomePage);
