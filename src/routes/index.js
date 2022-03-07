const router = require('express').Router()
const UserController = require('../controllers/UserController')
const AddressController = require('../controllers/AddressController')

router.get('/', (req, res) => {
    res.json({ hello: 'World' })
})

router.get('/users', UserController.index)
router.post('/users', UserController.store)

router.get('/users/:user_id/addresses', AddressController.index)
router.post('/users/:user_id/addresses', AddressController.store)

module.exports = router