const express = require(`express`)
const cors = require(`cors`)
const app = express()
const ctrl = require(`./controller`)


app.use(express.json())
app.use(cors())

app.get(`/api/houses`, ctrl.getHouses)
app.delete(`/api/houses/:id`, ctrl.deleteHouse)
app.post(`/api/houses`, ctrl.createHouse)
app.put(`/api/houses/:id`, ctrl.updateHouse)

app.listen(4004, () => console.log(`Server is running on 4004`))