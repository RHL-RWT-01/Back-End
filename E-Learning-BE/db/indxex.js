const mongoose = require('mongoose')
mongoose.connect('mongoDB-url')

const AdminSchema = new mongoose.Schema({
    username:String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username:String,
    password: String,
    purchasedCourses: [{
        type:mongoose.Types.ObjectId,
        ref:'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
})

module.exports = {
    Admin: mongoose.model('Admin', AdminSchema),
    User: mongoose.model('User', UserSchema),
    Course: mongoose.model('Course', CourseSchema)
}
