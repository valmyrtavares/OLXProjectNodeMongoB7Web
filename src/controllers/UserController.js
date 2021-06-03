const State = require('../models/state')
const User = require('../models/users')
const Category = require('../models/category')
const Ad = require('../models/Ad')

module.exports = {
    getStates: async (req, res)=>{
        let states = await State.find();
        res.json({states})
    },
    info: async (req, res)=>{
        let token = req.query.token;
    
        const user = await User.findOne({token});
        const state = await State.findById(user.state)
        const ads = await Ad.find({idUser: user._id.toString()})
        
        let adList = [];
        for(let i in ads){
            const cat = await Category.findById(ads[i].category)
            // adList.push({
            //     id: ads[i]._id,
            //     status: ads[i].status,
            //     images: ads[i].images,
            //     dateCreated: ads[i].dateCreated,
            //     title: ads[i].title,
            //     price: ads[i].price,
            //     priceNegotiable: ads[i].priceNegotiable,
            //     description: ads[i].description,
            //     view: ads[i].views,
            //     category: cat.slug
            // })
            addListener.push({...ads[i], category: cat.slug})
        }

        res.json({
            name: user.name,
            email: user.email,
            state: state.name,
            ads: adList
        })
    },
    editAction: async (req, res)=>{

        res.json({})

    }
}