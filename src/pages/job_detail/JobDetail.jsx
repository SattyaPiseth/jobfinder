import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import JobDetailComponent from '../../Components/card/JobDetailcomponent';

export default function JobDetail() {
const param = useParams();

const cart = useSelector((state)=>state?.card?.card);
const dispatch = useDispatch();

     
useEffect(()=>{

},[])
  return (
    <div>
      <JobDetailComponent/>
    </div>
  )
}
