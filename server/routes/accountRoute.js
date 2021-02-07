const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('../models/account');
const Account = mongoose.model('Account');

const accountRouter = express.Router();

accountRouter.use(bodyParser.json());




accountRouter.route('/')
.get((req,res,next) => {
    Account.find({})
    .then((account) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Account.create(req.body)
    .then((account) => {
        console.log('Account Created ', account);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /accounts');
})
.delete((req, res, next) => {
    Account.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});





//accountRouter.route('/:qid/:uid') //当想要加入更多params的时候就用这个
accountRouter.route('/:account')
.get((req,res,next) => {
    Account.find({"account":req.params.account})
    .then((account) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Account.update(
        { qid:parseInt(req.params.qid)},
        { $set:
            {
                title:req.body.title,
                total:req.body.total,
                subaccount:req.body.subaccount
            }
          
        }
    )
    .then((account) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));

})
.put((req, res, next) => {
    Account.findByIdAndUpdate(req.params.qid, {
        $set: req.body
    }, { new: true })
    .then((account) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Account.remove({"qid":parseInt(req.params.qid)})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


// 删除paper的时候需要post来更新account.paper数据
accountRouter.route('/paperRemove/:account')
.delete((req, res, next) => {
    
    Account.update(
        { account:req.params.account},
        { $set:
            {
                paper:req.body
            }
          
        }
    )
    .then((account) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));

})


module.exports = accountRouter;