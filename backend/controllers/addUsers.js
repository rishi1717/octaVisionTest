import User from "../models/userModel.js"
import joi from "joi"

const addUsers = async (req, res) => {
	try {
		const { error } = validate(req.body)
		if (error) {
			console.log(error.message)
			return res.status(400).send(error.details[0].message)
		}

		await User.create(req.body)
		res.status(200).send({ message: "user added" })
	} catch (err) {
		console.log(err.message)
		res.status(500).send(err.message)
	}
}

const validate = (data) => {
	const schema = joi.object({
		name: joi.string().min(2).required(),
		email: joi.string().email().required(),
		mobile: joi.string().min(9).required(),
	})
	return schema.validate(data)
}


export default addUsers
