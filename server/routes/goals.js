const express = require('express')
const {getGoal,createGoal} = require('../controllers/goalController')
// const requireAuth = require('../middleware/requireAuth')
const router = express.Router()
// router.use(requireAuth)

// require auth for all data routes
// router.use(requireAuth)

// POST a new data
router.post('/add', createGoal)
router.get('/:id', getGoal)

module.exports = router