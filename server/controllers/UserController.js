const ModelUser = require('../models/user')

class User {
    static all(req, res){
        ModelUser.find((err , result)=>{
            if (err) {
                res.status(500).json({
                    err : err.msg
                })
            }
            res.status(200).json({
                data : result
            })
        })
    }
}

module.exports = User