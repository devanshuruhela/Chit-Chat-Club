import { useCallback, useEffect, useRef } from "react";
import { useStateWithCallback } from "./useStateWithCallback";
import {socketInit} from '../socket/socket'
import { ACTIONS } from "../actions";
import freeice from "freeice";
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

 

  const addNewClient = useCallback((newClient , cb)=>
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
      addNewClient(user , ()=> {
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

  useEffect(()=>
  {
    const handleNewPeer = async ({peerId , createOffer , user: remoteUser}) =>
    {
      // if already connected then give warning 
      if(peerId in connections.current)
      {
        return console.warn(`you are connected with ${peerId} (${user.name})`)
      }

      connections.current[peerId] = new RTCPeerConnection({
        iceServers: freeice
      });

      //new ice connection
      connections.current[peerId].onicecandidate = (event) =>
      {
        socket.current.emit(ACTIONS.RELAY_ICE ,{
          peerId,
          icecandidate : event.candidate
        })
      }

      // handle ontrack on this connection
      connections.current[peerId].ontrack  = ({streams:[remoteSteam]})=>
      {
        addNewClient(remoteUser )
      }

    }
    socket.current.on(ACTIONS.ADD_PEER , handleNewPeer )
  },[])


   const provideRef=(instance, userId) =>
    {
      audioElements.current[userId] = instance
    }
  return {clients ,provideRef}
}