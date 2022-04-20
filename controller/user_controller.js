const path = require('path');

let responseObj = {
    "status": "",
    "msg": "",
    "body": {

    }
}


class Usercontroller {

    checkApi = (req, res) => {
        try {
            responseobj = {
                "status": "Success",
                "msg": "Working",
                "body": {}
            }
            res.status(200).send(responseObj);
        }catch(e){
            console.log('Error', e)
        }
    }
}