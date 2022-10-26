const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const courses = require('./data/fakeData.json');
app.get('/', (req, res) => {
    res.send('Api running')
});

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedCourse = courses.find(n => n.id == id);
    res.send(selectedCourse);

})

app.listen(port, () => {
    console.log('SkillX server running on port', port);
})