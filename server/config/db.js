const mongoose = require("mongoose")
// mongodb connected => 
exports.mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connecting🤝")
    } catch (error) {
        console.log("mongodb disconnected -> ")
    }
}