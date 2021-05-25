const {checkSchema} = require('express-validator')

module.exports = {
    signup: checkSchema({
        name: {
            trim: true,          
            isLength: {
                options: { min: 2}
            },
            errorMessage: 'Nome precisa ter mais do que dois carecteres'
        },
        email:{
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "Email inválido"
        },
        password:{
            isLength: {
                options: { min:4}
            },
            errorMessage: 'A senha precisa ter pelo menos 4 caracteres'
        },
        state:{
            notEmpty: true,
            errorMessage: "Estado não preenchido"
        }
    })
}