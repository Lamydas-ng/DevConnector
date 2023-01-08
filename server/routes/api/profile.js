//router: to handle routing for the specific part. //auth
//we need to laod the express module
const express = require('express');
const router = express.Router();
const profile = require("../../models/profile");
const User = require("../../models/users");
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


// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profileObj = await profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!profileObj) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profileObj);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    // Remove profile
    // Remove user
    await Promise.all([
     // Post.deleteMany({ user: req.user.id }),
      profile.findOneAndRemove({ user: req.user.id }),
      User.findOneAndRemove({ _id: req.user.id })
    ]);

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
router.put(
  "/experience",
  auth,
  check("title", "Title is required").notEmpty(),
  check("company", "Company is required").notEmpty(),
  check("from", "From date is required and needs to be from the past")
    .notEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const profileObj = await profile.findOne({ user: req.user.id });

      profileObj.experience.unshift(req.body);

      await profileObj.save();

      res.json(profileObj);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private

router.delete('/experience/:exp_id', auth, async (req, res) => {
  try {
    const foundProfile = await profile.findOne({ user: req.user.id });

    foundProfile.experience = foundProfile.experience.filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );

    await foundProfile.save();
    return res.status(200).json(foundProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});


// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
router.put(
  "/education",
  auth,
  check("school", "Name of school is required").notEmpty(),
  check("degree", "Degree of study is required").notEmpty(),
  check("fieldofstudy", "Field of study is required").notEmpty(),
  check("from", "From date is required and needs to be from the past")
    .notEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const profileEdu = await profile.findOne({ user: req.user.id });

      profileEdu.education.unshift(req.body);

      await profileEdu.save();

      res.json(profileEdu);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/profile/educatio/:edu_id
// @desc     Delete education from profile
// @access   Private

router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const foundProfileEdu = await profile.findOne({ user: req.user.id });
    foundProfileEdu.education = foundProfileEdu.education.filter(
      (edu) => edu._id.toString() !== req.params.edu_id
    );
    await foundProfileEdu.save();
    return res.status(200).json(foundProfileEdu);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;