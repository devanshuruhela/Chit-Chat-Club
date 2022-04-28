import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";

export function useLoadingRefresh()
{
  
  const [loading, setloading] = useState(true);
  const disptach = useDispatch();
  useEffect(()=>
  {
    (async ()=>
    {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}api/refresh`,
          { withCredentials: true }
        );
        disptach(setAuth(data));
        setloading(false)
      } catch (err) {
        console.log(err)
        setloading(false)
      }
    })()
  },[]);

  return {loading};
}