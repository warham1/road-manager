const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/drive", (req, res) => {
	res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/manage", (req, res) => {
	res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = router;
