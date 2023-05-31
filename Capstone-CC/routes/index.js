"use strict";

const router = require("express").Router();
const UsersRoute = require("./userRoute");

// ROUTES
router.use("/users", UsersRoute);

module.exports = router;
