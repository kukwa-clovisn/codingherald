const userModel = require("../models/users");

// const bcrypt = require("bcrypt");

const hashFunc = require('../middlewares/hash');
const userToken = require('../utils/jwt')
const capitalizeUserName = require('../middlewares/capitalize');

const {
     validationResult
} = require('express-validator')

const mailjet = require('node-mailjet')
     .connect(process.env.mail_api_key, process.env.mail_secret_key)


module.exports = {
     post: (req, res) => {
          let checkError = validationResult(req);
          if (!checkError.isEmpty()) {
               let msg = "";
               for (let i = 0; i < checkError.errors.length; i++) {
                    msg += checkError.errors[i].msg;
               }
               console.log(checkError.errors);
               res.status(401).json({
                    msg,
               });
          }

          let newEmail = req.body.email;

          let newUser = capitalizeUserName(req.body.username);

          /**
           * checking if user alredy exist with same name
           */
          userModel.findOne({
                    username: newUser,
               },
               async (err, data) => {
                    try {
                         if (err) return res.status(403).json(err);

                         if (data) {

                              return res.status(403).json({
                                   msg: ` user ${req.body.username} already has an account.`
                              });
                         }
                         /**
                          * checking if a user already exist with the same email
                          */
                         await userModel.findOne({
                              email: newEmail
                         }, async (err, data) => {
                              try {

                                   if (err) return res.status(403).json(err);

                                   if (data) return res.status(401).json({
                                        msg: `user email ${req.body.email} already has an account.`
                                   })

                                   // capitalizing the username
                                   let registeredName = capitalizeUserName(req.body.username);

                                   /**
                                    * hashing password
                                    */

                                   let userKey = await hashFunc(req.body.password);
                                   let refreshToken = userToken.createUserRefreshToken(req.body);

                                   // defining user to be stored in database
                                   let user = {
                                        username: registeredName,
                                        email: req.body.email,
                                        password: userKey,
                                        token: refreshToken,
                                        todos: []
                                   }
                                   console.log(user)
                                   //     storing user in database
                                   // await userModel.create(user);

                                   const request = mailjet
                                        .post("send", {
                                             'version': 'v3.1'
                                        })
                                        .request({
                                             "Messages": [{
                                                  "From": {
                                                       "Email": "kukwaclovisngong3@gmail.com",
                                                       "Name": "Advanced Tech Academy"
                                                  },
                                                  "To": [{
                                                       "Email": user.email,
                                                       "Name": user.username
                                                  }],
                                                  "Subject": "Advanced Tech Academy",
                                                  "TextPart": `${req.body.message}`,
                                                  "HTMLPart": `<h1> Welcome ${user.username}</h1> <p>You successfully signed up to <h4>ADVANCED TECH ACADEMY</h4></p> <p>We offer courses on different fields on our website <a href="https://advancedtechacademy.herokuapp.com">advancedtechacademy.com</a>. learning never ends!</p> <p>happy learning ${user.username}</p> <br /> <h3><a href="https://advancedtechacademy.herokuapp.com">visit website</a></h3>`,
                                                  "CustomID": "AppGettingStartedTest"
                                             }]
                                        })
                                   request
                                        .then((result) => {
                                             console.log(result.body)
                                             return res.status(200).json({
                                                  username: user.username,
                                                  msg: "user successfully signed up. signup successful",
                                             });
                                        })
                                        .catch((err) => {
                                             console.log(err.statusCode)
                                        })

                                   /**
                                    * return a response with the user data
                                    */
                                   res.json({
                                        msg: "user successfully registered. signup successful",
                                        data: response,
                                   });

                                   return console.log("user:", user);
                              } catch (err) {

                                   console.log(err)
                                   return res.status(403).json(err);
                              }
                         })
                    } catch (err) {
                         console.log(err)
                    }



               }
          ).select('-password')
     }

}