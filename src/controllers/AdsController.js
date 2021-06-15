const Category = require('../models/category')
const User = require('../models/users')
const Ad = require('../models/Ad')

module.exports = {
    getCategories: async (req, res)=>{
        const cats = await Category.find()

        let categories = []

        for(let i in cats){
            categories.push({
                ...cats[i]._doc,
                imag:`${process.env.BASE}/assets/images/${cats[i].slug}.png`
            })
        }


        res.json({categories})

    },
    addAction: async (req, res)=>{
        let {title, price, priceneg, desc, cat, token} = req.body;
        const user = await User.findOneAndDelete({token}).exec();

        if(!title || !cat){
            res.json({error: 'Titulo e /ou categoria não foram preenchidos'});
            return
        }
        if(price){
            price = price.replace('.', '').replace('R$', '').replace(',','.');
            price = parseFloat(price);
        }else{
            price = 0;
        }

        const newAd = new Ad();
        newAd.status = true;
        newAd.idUser = user._id;
        newAd.state = user.state;
        newAd.dateCreated = new Date();
        newAd.title = title;
        newAd.category = cat;
        newAd.price = price;
        newAd.priceNegotiable = (priceneg=='true')? true : false;
        newAd.description = desc;
        newAd.views = 0;

        

    },
    getList: async (req, res)=>{

    },
    getItem: async (req, res)=>{

    },
    editAction: async (req, res)=>{

    },
}