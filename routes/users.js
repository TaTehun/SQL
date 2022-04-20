const express = require('express');
const { GetMore } = require('mongodb/lib/core/connection/commands');
const router = express.Router();
const User = require('../models/user');

// router.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.send(users);
//     } catch (e) {
//         res.status(500).send()
//     }
// });

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
   const user = await User.findById(_id)
   if (!user) {
       return res.status(404).send()
   }
    res.send(user)
    } catch(e) {
    res.status(500).send();
    }
});

router.get('/users', async (req, res) => {
    const match = {}
    // if (req.query.completed) {
    //     match.completed = req.query.completed === 'true'
    // }
    try {
        const {page = 1, limit = 10} = req.query;
        const users =await User.find()
        .limit (limit * 1)
        .skip((page - 1) * limit)
        res.status(200).send({ page, total: users.length, data: users })
    } catch (e) {
        res.status(500).send()
    }
});

// router.get('/users', async (req, res) => {
//     try {
//         let { page, size } = req.query
//         if(!page) {
//             page = 1
//         }
//         if (!    size) {
//             size = 10
//         }

//         const limit = parseInt(size)
//         const skip = (page -1) * size
//         const users = await User.find().limit(limit).skip(skip).exec()
//         res.send({
//             page,
//             size,
//             data: users
//         }); 
//     } catch (e) {
//         res.status(500).send()
//     }
// });

module.exports = router;