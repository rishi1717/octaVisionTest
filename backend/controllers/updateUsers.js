import User from "../models/userModel.js"

const updateUsers = async (req, res) => {
	try {
        const id = req.params.id
		await User.findOneAndUpdate({id},{$set:req.body})
		res.status(200).send({ message: "user Updated" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send(err.message)
	}
}

export default updateUsers
