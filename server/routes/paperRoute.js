const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('../models/paper');
const Paper = mongoose.model('Paper');

const paperRouter = express.Router();

paperRouter.use(bodyParser.json());




paperRouter.route('/:paperid')
.get((req,res,next) => {
    Paper.find({"paperid":req.params.paperid})
    .then((paper) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(paper);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    // 修改paper的Meta信息 ==> 而post('/')是创建新的paper
    Paper.update(
        {"paperid":req.params.paperid},
        {
            $set:
            {
                courseNO:req.body.courseNO,
                courseName:req.body.courseName,
                courseDate:req.body.courseDate,
                examiners:req.body.examiners,
                fileName:req.body.fileName
            }
        }
    )
    .then((paper) => {
        console.log('Paper Created ', paper);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(paper);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /papers');
})
.delete((req, res, next) => {
    Paper.remove({"paperid":req.params.paperid})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});






module.exports = paperRouter;