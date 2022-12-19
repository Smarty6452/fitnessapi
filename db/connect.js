const mongoose = require("mongoose");
mongoose.set('strictQuery', false);


// connection creation
const connectDB = (uri) => {
  console.log("hii");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
};

module.exports = connectDB;
