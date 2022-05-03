import { useStateWithCallback } from "./useStateWithCallback";

const users = [
  {
    id: 1,
    name: "Name1",
  },
  {
    id: 2,
    name: "Name 2",
  },
];
export const useWebRCT= (roomId ,user) =>
{
  const [clients, setClients] = useStateWithCallback(users);

  // setClients((prev)=> {} , (state)=>
  // {

  // })

  return {clients}
}