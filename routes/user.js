const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/signup", ctrl.users.signup);
router.get("/profile/:index", ctrl.users.renderProfile);

router.get("/profile/:index/movies", ctrl.users.getAllMovies);

router.post("/login", ctrl.users.login);
router.put("/profile/:index", ctrl.users.editProfile);

module.exports = router;
