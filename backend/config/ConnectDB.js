const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, () => {
  try {
    console.log("DB Connection Successfull!");
  } catch (error) {
    console.error(`${error.message}`);
  }
});
