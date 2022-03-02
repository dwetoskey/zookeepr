const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('./zookeeperRoutes.js');

router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;
