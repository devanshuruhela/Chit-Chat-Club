const roomService = require("../Services/room.service");

class roomsController{
  async create(req,res)
  {
    const{topic, roomType}  =req.body;

    if(!topic || !roomType)
    {

      return res.status(400).json({message:'All fields are required'})
    }

    const room = await roomService.create({
      topic,
      roomType,
      ownerId:req.user._id
    })
  }
}

module.exports=  new roomsController();