const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/user.controller.js");

router.post("/", usercontroller.createUser);

router.put("/", usercontroller.updateUser);

router.patch("/:id", usercontroller.patchUser);

router.delete("/:id", usercontroller.deleteUser);

router.get("/", usercontroller.getAllUsers);

module.exports = router;

