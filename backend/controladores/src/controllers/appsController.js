const db= require('../db/database');
const user= require('./userController');
/*Devuelve todas las apps*/
exports.view = (req, res)=>{
    const query = db.query(
        "SELECT * FROM apps",
        (err, results) => {
            if(err){
                res.status(500).send("Conection error");
            }else{
                const json=JSON.stringify(results);
                res.send(json);
            }
        }
    );
    res.send(query);
}
/*redireccionar*/
exports.redirect = (req, res)=>{
    try {
        const url=new URL(req);
        if(url){
            window.location.href(url);
            res.send('redirected succesfuly');
        }else{
            res.send('url not exists');
        }
    }catch(err){
        res.send('URL not exist');
    }
}
exports.validateUser = (req, res)=>{
    const validate= user.login(req);
    if(validate){
        res.send('ss');
    }else{
        res.send('user not registred');
    }
}