const express = require("express");
const router = express.Router();
const roomModule = require("../modules/roomModule");

router.get("/getAllRooms", function (req, res) {
    res.json({
        output: rooms
    });
});

router.get("/getAllBookings", function (req, res) {
    res.json({
        output: bookings
    });
});

router.post("/create", roomModule.createRoom);

router.post("/book", roomModule.bookRoom);

module.exports = router;