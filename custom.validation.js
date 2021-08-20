
/* 
    Propriedades aceitáveis:
        dataType: string,
        list: [],
        minLength: number,
        maxLength: number,
        range: {min: number, max: number},
        regex: Regex,
        required: boolean
*/

const customValidation = {
    email:{
        regex: /^\S+@(\S+\.\S+|localhost)$/i
    },
    url:{
        regex: /^([a-z]+\:\/\/|\/\/)(\S+\.\S+|localhost)[\/\?\S]*$/i
    },
    phone: {
        regex: /^\([1-9]{1}[0-9]{1}\)[1-9]{2}[0-9]{3}\-[0-9]{4}$/g //
/*
    Formato '+DDI(DDD)#####-####':
    /^(\+|)(([1-9]{1})([0-9]{2}|[0-9]{1})|)(\([1-9]{1}([0-9]{1}|[0-9]{2})\)|[1-9]{1}([0-9]{1}|[0-9]{2}))[1-9]{2}[0-9]{3}(\-|)[0-9]{4}$/g 
*/
    }
};

module.exports = customValidation;