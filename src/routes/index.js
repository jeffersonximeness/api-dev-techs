const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ hello: 'World' })
})

module.exports = router