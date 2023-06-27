const mongoose = require("mongoose");



const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //  useFindAndModify: false
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = connectDB;
