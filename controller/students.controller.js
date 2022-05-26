const Student = require("../models/student.model")

module.exports.studentsController = {


getStudents: (req, res) => {
Student.find().then((data) => {
    res.json(data)
})
},

postStudents: (req, res) => {
Student.create({
name: req.body.name,
phone: req.body.phone,
age: req.body.age
}).then((data) => {
res.json(data)
})
},

deleteStudents: (req, res) => {
Student.findByIdAndRemove(req.params.id).then(()=> {
res.json("Студент удалён")
})
},

pathStudents: (req, res)=> {
Student.findByIdAndUpdate(req.params.id, {
name: req.body.name,
phone: req.body.phone,
age: req.body.age
}).then(() => {
    res.json("Студент изменён")
})
},


}