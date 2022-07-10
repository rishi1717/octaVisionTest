import User from "../models/userModel.js"

const addUsers = async (req, res) => {
	try {
		await User.create(req.body)
		res.status(200).send({ message: "user added" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send(err.message)
	}
}

export default addUsers
