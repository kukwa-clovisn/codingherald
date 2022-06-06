const userModel = require('../models/signupModel');

module.exports = {
     upload: (req, res) => {
          val = req.body.image;

          console.log(req.body)

          userModel.findByIdAndUpdate(req.params.id, {
               image: val
          }, (err, data) => {
               if (err) return res.status(404).json(err);

               return res.status(200).json(data)

          })
     }
}