require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const express = require("express");
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../db/index");
const router = express.Router();
const jwt = require('jsonwebtoken');


router.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
   
    const isUserExist = User.findOne({username: username, password: password});

    if(isUserExist){
        const token = jwt.sign({username: username}, JWT_SECRET);
        res.json({
            message: 'User signed in successfully',
            token: token
        })
    }else{
        res.status(401).json({
            message: 'Admin not found'
        })
    }
})
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username: username,
    password: password,
  })
    .then(() => {
      res.json({
        message: "User created successfully",
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err.message,
      });
    });
});

router.get("/courses", async (req, res) => {
  courses = await Course.find({});
  res.json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    console.log(courseId);
    // Update user's purchasedCourses array
    User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: courseId, // Push the courseId to the purchasedCourses array
        },
      }
    )
      .then(() => {
        res.json({
          message: "Course purchased successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error purchasing course",
          error: err,
        });
      });
  });
  

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.headers.username;
  const purchasedCourses = await User.findOne({
    username: username,
  }).populate("purchasedCourses");
  res.json({
    purchasedCourses: purchasedCourses,
  });
  console.log(purchasedCourses);
});

module.exports = router;
