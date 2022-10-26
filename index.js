const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Api running')
});

app.listen(port, () => {
    console.log('SkillX server running on port', port);
})