const jwt = require('jsonwebtoken')

const createUserToken = (data) => {
     return jwt.sign({
               id: data.id,
               username: data.username,
               email: data.email,
               profileImg: data.profileImg,
               userImage: data.userImage,
               todos: data.todos,
               BMI: data.BMI
          },
          process.env.user_login_token, {
               expiresIn: process.env.tokenLife,
          }
     )
}

const createUserRefreshToken = (data) => {
     return jwt.sign({
               id: data.id,
               username: data.username,
               email: data.email
          },
          process.env.user_login_refresh_token)
}


const verifyUserToken = async (userToken) => {
     try {
          jwt.verify(userToken, process.env.user_login_token, (err, data) => {
               if (err) {
                    return res.status(500).json(err)
               }
               console.log(data)
               return data;
          })

     } catch (err) {
          console.log(err);
     }
}

module.exports = {
     createUserToken,
     createUserRefreshToken,
     verifyUserToken
};