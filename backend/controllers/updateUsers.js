import User from "../models/userModel.js"

const updateUsers = async (req, res) => {
	try {
        const id = req.params.id
		let user = await User.findByIdAndUpdate(id,{$set:req.body})
		if(!user){
			return res.status(404).send({message: "User not found"})
		}
		res.status(200).send({ message: "user Updated" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send(err.message)
	}
}

export default updateUsers
