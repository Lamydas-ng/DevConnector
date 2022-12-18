//router: to handle routing for the specific part. //auth
//we need to laod the express module
const express = require('express');
const router = express.Router();
const profile = require("../../models/profile");
const { check, validationResult } = require("express-validator");
const normalize = require('normalize-url');
const auth = require('../../middleware/auth');

router.get('/', function (req, res) {
res.json({message:"Hello from profile"})
});
// @route : POST /api/profile
// @Desc : create or update the profile
// @access : private(needs token)/// validating of token
router.post(
    "",
    auth,
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
       //
    console.log("id value is" + JSON.stringify(req.user.id));
console.log(JSON.stringify(req.user));
        const profileFields = {
            //userID
            user: req.user.id,
            website: website && website !== ""
                ? normalize(website, { forcehttps: true }) : "",
           skills: Array.isArray(skills)
		? skills
		: skills.split(",").map((skill) => "" + skill.
		trim()),
		...rest,
        }
        const socialFields = {
             youtube,
            twitter,
            instagram,
            linkedin,
            facebook
        }
        profileFields.social = socialFields;
         // start adding the details to mongodb via mongoose.
    try {
      console.log("before the profile creation");
      let profileResult = await profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      console.log("profile Result: " + profileResult);
      return res.status(201).json(profileResult);
    } catch (err) {
      console.log("error details: " + err.message);
    }
        return res.status(201).json(profileResult);
  }
);
module.exports = router;