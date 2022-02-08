const houses = require(`./db.json`)
let housingID = 4




module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse:  (req, res) =>{
        let {id} = req.params
        let index = houses.findIndex(elem => elem.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) =>{
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: housingID,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        housingID++
    },
    updateHouse:  (req, res) =>{
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(elem => elem.id === +id)

        if(houses[index].price === 2,000,000 && type === `plus`){
            res.status(400).send(`Cannot go above $2m USD`)
        }else if(houses[index].price <= 10000 && type === `minus`){
            res.status(400).send(`Cannot go below $50,000 USD`)
        }else if(type === `plus`){
            houses[index].price+=10000
            res.status(200).send(houses)
        }else if(type === `minus`){
            houses[index].price-=10000
            res.status(200).send(houses)
        }else{
            res.status(400).send(`You messed up somewhere`)
        }
    }

}