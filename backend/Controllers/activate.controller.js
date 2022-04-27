const Jimp = require('jimp')
const path = require('path')
const UserDto = require('../dtos/user.dtos');
const userService  = require('../Services/user.service');
class ActivateController
{
  async activate(req, res)
  {
    const {name, avatar} = req.body;
    if(!name  || !avatar)
    {
      res.status(400).json({message:'All field are required!'})
    }

    const buffer = Buffer.from(
      avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
      "base64"
    );
    const imagePath= `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`
    try {
      const jimRes = await Jimp.read(buffer);
      jimRes.resize(150 , Jimp.AUTO).write(path.resolve(__dirname , `../storage/${imagePath}`))
    } catch (err) {
      res.status(500).json({message:'Image not processed'})
    }

    const userId = req.user._id
    //updateuser
    try {
      const user = await userService.finduser({ _id: userId });
      if (!user) {
        res.status(404).json({ message: "user not found" });
      }
      user.activated = true;
      user.name = name;
      user.avatar = `/storage/${imagePath}`;
      user.save();
      res.json({user: new UserDto(user) , auth:true})
    } catch (err) {
       res.status(500).json({ message: "something went wrong" });
    }

    
  }
}

module.exports = new ActivateController();