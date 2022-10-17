const mongoose = require("mongoose");

const uri = `mongodb+srv://asetha:${process.env.MONGO_DB_PASSWORD}@bookcommercecluster.xnitvce.mongodb.net/?retryWrites=true&w=majority`;

async function dbConnect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log.error(error);
  }
}

module.exports = dbConnect;
