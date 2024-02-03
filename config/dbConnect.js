const mongoose = require("mongoose");

// connect

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://SUDHANSHU:Sudh2002@cluster0.6wqffyv.mongodb.net/Income-expense"
    );
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
