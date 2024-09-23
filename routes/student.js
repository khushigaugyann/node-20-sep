const express = require('express');
const studentController = require('../controllers/studentcontroller')
const router = express.Router();
router.use(express.urlencoded({ extended: false}));
router.get('/', (req, res)=>{
    res.render('home')
})
router.post('/add/student', (req, res)=>{
    studentController.addStudent(req, res)
})
router.get('/students',(req, res)=>{
    studentController.getStudents(req, res)
})
module.exports = router