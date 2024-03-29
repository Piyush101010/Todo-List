const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.post('/add-task', homeController.addTask);

router.post('/delete-task', homeController.deleteTask);

// for any further router, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;