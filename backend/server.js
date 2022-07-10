import express from "express"
import connect from "./models/index.js"
import addUsers from "./controllers/addUsers.js"
import getUsers from "./controllers/getUsers.js"
import updateUsers from "./controllers/updateUsers.js"
import deleteUsers from "./controllers/deleteUser.js"
import cors from 'cors'

connect

const app = express()

const port = 3001

app.use(express.json())
app.use(cors())

app.post("/user", addUsers)
app.get("/user", getUsers)
app.patch("/user/:id", updateUsers)
app.delete("/user/:id", deleteUsers)

app.listen(port, () => {
	console.log("app running")
})
