const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const nodeCmd = require('node-cmd');


var router = express.Router();


router.route('/:format/:type')
.post((req,res,next)=>{

    fs.readFile('../static/document.tex','utf-8',function(err,data){
        if(err)next(err);
        data = data.replace(/<!--courseNO-->/g, req.body.courseNo);
        data = data.replace(/<!--courseName-->/g, req.body.courseName);
        data = data.replace(/<!--courseDate-->/g, req.body.courseDate);
        data = data.replace(/<!--examiners-->/g, req.body.examiners);
        data = data.replace(/<!--fileName-->/g, req.body.fileName);
        let question = replaceQuestion(data, req.body.questions)
        data = data.replace(/<!--Questions-->/g, question);

        let path = '../static/'+req.body.fileName+'.tex';
        fs.writeFile(path,data,function(err){
            
            let command = 'pdflatex --output-directory=../static '+path;
            nodeCmd.get(command,()=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json();
            });
            
        })
    
    })
 
})


var replaceQuestion = function(data, questions){
    let template = `
        \\textbf{Question <!--index-->}

        <!--title-->
        \\begin{enumerate}
            <!--subTemplate-->
        \\end{enumerate}
        ~\\\\
    `
    let subTemplate =`
        \\item[<!--index-->) ]<!--question-->
        \\begin{flushright}
            \\textbf{[<!--mark--> marks]}
        \\end{flushright}
    `
    let index = 1;
    let items =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    let res = '';
    for(let question of questions){
        let temp = template;
        let subRes = '';
        temp = temp.replace(/<!--title-->/g, question.title);
        temp = temp.replace(/<!--index-->/g, index);
        for(let i=0; i<question.subquestion.length; i++){
           let sub = subTemplate;
           sub = sub.replace(/<!--index-->/g,items[i]);
           sub = sub.replace(/<!--question-->/g,question.subquestion[i].question);
           sub = sub.replace(/<!--mark-->/g,question.subquestion[i].grade);
           subRes+=sub;
        }
        temp = temp.replace(/<!--subTemplate-->/g,subRes);
        res+=temp;
        index++;
    }

    return res;
}



module.exports = router;