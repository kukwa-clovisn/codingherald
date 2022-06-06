const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const uriModel = require('../models/url');
const router = express.Router();


module.exports = {
     /**
      * create a route that will receive the urls
      */
     post: async (req, res) => {
          // destructuring the req body
          const {
               longUrl
          } = req.body;
          console.log(req.body)
          const baseUrl = "http://localhost:9001";

          //check if the baseUrl exist or not=
          if (!validUrl.isUri(baseUrl)) {
               return res.status(401).json('invalid base url...');
          }
          // generating a random short url
          const urlCode = shortid.generate();

          /**
           * checking the long url and checking if it  already exist in the database
           */

          if (validUrl.isUri(longUrl)) {
               try {
                    let newUrl = await uriModel.findOne({
                         longUrl
                    })
                    // if a url already exist like that
                    if (newUrl) {
                         res.json(newUrl)
                         console.log(newUrl)
                    } else {
                         // if it doesn't then create new one
                         const shortUrl = baseUrl + "/" + urlCode;

                         newUrl = new uriModel({
                              longUrl,
                              shortUrl,
                              urlCode,
                              date: new Date()
                         })
                         // saving the instance of the model
                         await newUrl.save();
                    }
               } catch (err) {
                    console.error(error)
                    res.status(500).json('server code error')
               }
          } else {
               res.status(401).json('invalid url')
          }
     },

     /**
      * creating a route for the shortened url
      */

     get: async (req, res) => {

          try {
               let shortenUrl = await uriModel.findOne({
                    urlCode: req.params.url
               })

               if (shortenUrl) {
                    res.json(shortenUrl.longUrl)
               } else {
                    res.status(404).json('url not found')
               }
          } catch (error) {
               console.error(err)
               res.status(500).json('server code error');
          }
     }
}