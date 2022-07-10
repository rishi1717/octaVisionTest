import mongoose from "mongoose"

export default mongoose
	.connect("mongodb://0.0.0.0:27017/test_project")
	.then(() => {
		console.log("mongodb connected")
	})
	.catch((err) => {
		console.log(err.message)
	})