const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ 'start':'Welcome'});
})

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send({
            'msg': 'Register successfully'
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/api/upcloud/users', async(req, res) => {
    try {
        const user = await User.find().select('name').select('age').select('email')
        console.log(user)
        res.status(200).send(user)

    } catch (e) {
        res.status(404).send()
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
