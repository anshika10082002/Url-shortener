//------------------------validation functions----------------------------------------------------------


const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

//--------------------------------------------------------------------------------

module.exports={isValidRequestBody,isValid}











//const axios = require('axios')
// let option = {
    //     method: 'get',
    //     url: longUrl
    // }
    // let urlValidate = await axios(option)
    //     .then(() => longUrl)    
    //     .catch(() => null)     

    // if (!urlValidate) { 
    //     return res.status(400).send({ status: false, message: `This Link ${longUrl} is not Valid URL.` }) 
    // }
