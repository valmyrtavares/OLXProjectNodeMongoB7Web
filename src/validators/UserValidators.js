const {checkSchema} = require('express-validator')

module.exports = {
    editAction: checkSchema({
        token:{
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true,          
            isLength: {
                options: { min: 2}
            },
            errorMessage: 'Nome precisa ter mais do que dois carecteres'
        },
        email:{
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "Email inválido"
        },
        password:{
            optional: true,
            isLength: {
                options: { min:4}
            },
            errorMessage: 'A senha precisa ter pelo menos 4 caracteres'
        },
        state:{
            optional: true,
            notEmpty: true,
            errorMessage: "Estado não preenchido"
        }
    }), 
    
}

