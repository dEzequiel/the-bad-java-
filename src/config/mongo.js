const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("Correct connection!");
      } else {
        console.log(err);
        console.log("Incorrect connection!");
      }
    }
  );
};

module.exports = dbConnect;
