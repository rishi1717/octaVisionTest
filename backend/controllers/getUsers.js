import User from "../models/userModel.js"

const getUsers = async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).send(users)
	} catch (err) {
		console.log(err.message)
		res.status(500).send(err.message)
	}
}

export default getUsers
