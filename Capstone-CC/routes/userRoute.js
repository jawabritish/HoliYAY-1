"use strict";

const router = require("express").Router();
const UsersController = require("../controllers/userController");

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
// router.post("/loginGoogle", UsersController.loginGoogle);

module.exports = router;
