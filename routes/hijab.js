const express = require("express");
const router = express.Router();
const { getAllHijabs, getHijabById } = require("../controllers/hijabController");

router.get("/", getAllHijabs);
router.get("/:id", getHijabById);


module.exports = router;
