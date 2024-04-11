const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://harshtiwariup2004:harsh2004@cluster0.y3do7jo.mongodb.net/attendance', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDb;