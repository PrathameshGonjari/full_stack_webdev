exports.delete = (req,res) => {
  const db = require('../../models')
  const News = db.News;
  //delete data from mongo db
  const id = req.params.id;
  News.findByIdAndRemove(id)
  .then(data=>{
    if(!data){
      res.status(404).send({
        message:`Cannot delete Data with id ${id}`
      })
    }
    else res.send({
      message:`Deleted data successfull id ${id}`  
    })
  })
  .catch(err =>{
    res.status(500).send({
      message:
      err.message || 'Some Error Occured'
    })
  })

}