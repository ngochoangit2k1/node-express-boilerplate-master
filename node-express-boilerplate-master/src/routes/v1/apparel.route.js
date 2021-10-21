const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const apparelValidation = require('../../validations/apparel.validation');
const apparelController = require('../../controllers/apparel.controller');

const router = express.Router();

router
.route('/')
.post(validate(apparelValidation.createUser), apparelController.createUser)
.get(validate(apparelValidation.getUsers), apparelController.getUsers);

router
.route('/:userId')
.get(validate(apparelValidation.getUser), apparelController.getUser)
.patch(validate(apparelValidation.updateUser), apparelController.updateUser)
.delete(validate(apparelValidation.deleteUser), apparelController.deleteUser);

module.exports = router;