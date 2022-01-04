const { News } = require("../../models");

exports.update = (req,res) => {
  const id = req.params.id;

  if(!req.body){
    res.status(500).send({
      message: `Data to update cannot be Empty`
    })
  }
  News.findByIdAndUpdate(id,req.body,{
    useFindAndModify:false
  })
  .then(data=>{
    if(!data){
      res.status(404).send({
        message : `Cannot Update Data with ${id}`
      })
    }
    else res.send({
      message: `Updated Successfully`
    })
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || 'Some Error Occured'
    })
  })
}