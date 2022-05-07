import { useCallback, useEffect, useRef } from "react";
import { useStateWithCallback } from "./useStateWithCallback";
import {socketInit} from '../socket/socket'
import { ACTIONS } from "../actions";
// const users = [
//   {
//     id: 1,
//     name: "rakesh",
//   },
//   {
//     id: 2,
//     name: "rakesh",
//   },
// ];
export const useWebRCT= (roomId ,user) =>
{
  const [clients, setClients] = useStateWithCallback([]);
  const audioElements = useRef({});
  const connections =useRef({});
  const localMediaStream = useRef(null);
  const socket = useRef(null);
  const clientsRef = useRef(null);
  useEffect(()=>
  {
    socket.current = socketInit();
  },[])

 

  const addNewClients = useCallback((newClient , cb)=>
  {
    const lookingFor = clients.find((client) => client.id === newClient.id);
    if(lookingFor === undefined)
    {
      setClients((existingClients)=> [...existingClients , newClient] , cb)
    }
  }, [clients , setClients])
  
  useEffect(() => {
          clientsRef.current = clients;
      }, [clients]);
      
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
        const localelt = audioElements.current[user.id];
        if(localelt)
        {
          localelt.volume = 0;
          localelt.srcObject = localMediaStream.current
        }

        socket.current.emit(ACTIONS.JOIN ,{roomId, user})

      })
    });
  },[])
   const provideRef=(instance, userId) =>
    {
      audioElements.current[userId] = instance
    }
  return {clients ,provideRef}
}