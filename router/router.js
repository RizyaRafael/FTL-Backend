const express = require("express")
const Controller = require("../controllers/controller")
const ErrorHandler = require("../middleware/errorHandler")
const router = express.Router()

router.get("/RoomMeetingBooked", Controller.GetRoomMeetingBooked)
router.get("/RoomDetail", Controller.GetRoomDetail)
router.post("/BookRoom", Controller.PostBookedRoom)
router.use(ErrorHandler)

module.exports = router