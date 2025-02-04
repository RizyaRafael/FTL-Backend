const {MeetingRoom, BookedRoom} = require("../models/index")

class Controller {
    static async GetRoomMeetingBooked (req, res, next) {
        try {
            const data = await BookedRoom.findAll({
                include: MeetingRoom,
            })
            res.status(200).json(data)
        } catch (error) {
            console.log(error)

            next(error)
        }
    }

    static async GetRoomDetail (req, res, next) {
        try {
            const data = await MeetingRoom.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async PostBookedRoom (req, res, next) {
        try {
            const {unit, MeetingRoom_ID, meetingDate, time, totalParticipant, foodType} = req.body
            if (!unit || !MeetingRoom_ID || !meetingDate || !time || !totalParticipant || !foodType) {
                throw {name: "ALL_DATA_NEEDED"}
            }
            const data = await BookedRoom.create({unit, MeetingRoom_ID, meetingDate, time, totalParticipant, foodType})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller