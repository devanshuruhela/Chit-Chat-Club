import { useCallback, useEffect, useRef } from "react";
import { useStateWithCallback } from "./useStateWithCallback";

export const useWebRCT= (roomId ,user) =>
{
  const [clients, setClients] = useStateWithCallback([]);
  const audioElements = useRef({});
  const connections =useRef({});
  const localMediaStream = useRef(null)

  const provideRef=(instance, userId) =>
    {
      audioElements.current[userId] = instance
    }

  const addNewClients = useCallback((newClient , cb)=>
  {
    const lookingFor = clients.find((client) => client.id === newClient.id);
    if(lookingFor === undefined)
    {
      setClients((existingClients)=> [...existingClients , newClient] , cb)
    }
  }, [clients , setClients])

  useEffect(()=>
  {
    const startCapture = async () =>
    {
      localMediaStream.current =  await navigator.mediaDevices.getUserMedia(
        {
          audio:true,
        }
      )
    }

    startCapture().then(()=>
    {
      addNewClients(user , ()=> {
        const localaudioelt = audioElements.current[user.id];
        if(localaudioelt)
        {
          localaudioelt.volume = 0;
          localaudioelt.srcObject = localMediaStream.current
        }
      })
    });
  },[])
  
  return {clients ,provideRef}
}