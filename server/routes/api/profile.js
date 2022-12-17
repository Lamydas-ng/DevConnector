//router: to handle routing for the specific part. //auth
//we need to laod the express module
const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const normalize = require('normalize-url');
router.get('/', function (req, res) {
res.json({message:"Hello from profile"})
});
// @route : POST /api/profile
// @Desc : create or update the profile
// @access : private(needs token)/// validating of token
router.post(
  "",
  check("status", "status is required").notEmpty(),
  check("skills", "skills is required").notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        //destructure the requets
        const {
            website,
            skills,
            youtube,
            twitter,
            instagram,
            linkedin,
            facebook,
              // spread the rest of the fields we don't need to check
             ...rest
        } = req.body;

        //building the object
        const profileFields = {
            //userID
            website: website && website !== ""
            ? normalize(website,{forcehttps:true}):""
        }
        return res.status(201).json(req.body);
  }
);
module.exports = router;