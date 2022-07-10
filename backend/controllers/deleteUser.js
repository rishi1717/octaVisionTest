import User from "../models/userModel.js"

const deleteUsers = async (req, res) => {
	try {
        const id = req.params.id
		await User.findByIdAndRemove(id)
		res.status(200).send({ message: "user deleted" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send(err.message)
	}
}

export default deleteUsers
