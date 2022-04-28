import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";

export function useLoadingRefresh()
{
  const disptach = useDispatch();
  const [loading, setloading] = useState(true);
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
      } catch (error) {
        console.log(error)
        setloading(false)
      }
    })()
  },[]);

  return {loading};
}