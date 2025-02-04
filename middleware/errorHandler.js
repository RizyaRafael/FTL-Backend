function ErrorHandler (error, req, res, next) {
    switch (error.name) {
        case "ALL_DATA_NEEDED":
        res.status(401).json({message: "all data is needed"})
        break;
        default:
        res.status(500).json({message: "internal server error"})
        break;
        
    }
}

module.exports = ErrorHandler