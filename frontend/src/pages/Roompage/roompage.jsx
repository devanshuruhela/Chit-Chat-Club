import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useWebRCT } from '../../Hooks/useWebRTC'
import './roompage.styles.css'
const RoomPage = () => {
  const {id : roomId} =useParams();
  const user = useSelector(state=> state.auth.user)
  const {clients , provideRef} = useWebRCT(roomId , user)

  return (
    <div>
      <h1>All connected Clients</h1>
      {
        clients.map((client)=>
        {
          return (<div key={client.id}>
            <audio ref={(instance) => provideRef(instance , client.id)} controls autoPlay></audio>
            <h4>{client.name}</h4>
          </div>)
        })
      }
    </div>
  )
}

export default RoomPage