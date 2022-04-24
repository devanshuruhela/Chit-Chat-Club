class ActivateController
{
  async activate(req, res)
  {
    res.json({message:"ok"})
  }
}

module.exports = new ActivateController;