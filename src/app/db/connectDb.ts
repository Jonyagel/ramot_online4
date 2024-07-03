import mongoose from "mongoose";

export async function connectDb() {
  await mongoose.connect("mongodb+srv://jony4:jony1131@atlascluster.w3zog30.mongodb.net/ramot_online");
  console.log("mongo connect next local -----")
}