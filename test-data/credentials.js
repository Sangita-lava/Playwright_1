const { url } = require("inspector");
const { register } = require("module");
const credentials = require('../test-data/credentials');
const registerCreds = credentials.registerCreds;

// test-data/credentials.js
module.exports = {
    creds: {
        email:'sangeeta.lava.qa@gmail.com',
        password: 'Sangeeta@123',
        url1: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    }, 
    registerCreds:{
        url2:'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
        firstname:'sangeeta',
        lastname:'lava',
        email:'sangeeta.lava@yahoo.com',
        telephone:'9979286218',
        password:'Sangeeta@123',
        passwordconfirm:'Sangeeta@123'

    },
    newUser: {
        url3: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
        firstname: 'Sangita',
        lastname: 'Lava',
        email: 'sangita.lava.qa@gmail.com', // new email
        telephone: '9979286218',
        password: 'Sangeeta@123',
        passwordconfirm: 'Sangeeta@123'
    }
    

};
