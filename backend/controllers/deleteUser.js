import User from "../models/userModel.js"

const deleteUsers = async (req, res) => {
	try {
		const id = req.params.id
		const user = await User.findByIdAndRemove(id)
		if (!user) {
			return res.status(404).send({ message: "User not found" })
		}
		res.status(200).send({ message: "user deleted" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send(err.message)
	}
}

export default deleteUsers
