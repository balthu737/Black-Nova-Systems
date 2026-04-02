const db= require('../db/database');

/*verificacion*/
exports.login = (req, res)=>{
    const {user, pswrd}= req.body;
    db.query(
        "CALL verify(?,?)", [user, pswrd],
        (err, results) => {
            if(err){
                return res.status(500).send("Conection error");
            }
            if (results.length >0){
                res.send('succesfuly login');
            }else {
                res.send('incorrect login');
            }
        }
    )
}
/*crea usuarios*/
exports.create= (req, res)=>{
    const {user,pswrd,role} = req.body;
    db.query(
        "CALL persistUser(?,?,?,?)"[NULL, user, pswrd, role],
        (err, results)=>{
            if(err){
                return res.status(500).send("Conection error");
            }
            if(results.length>0){
                res.send('user created succesfuly');
            }else{
                res.send('create user error');
            }
        }
    )
}
/*edita usuairos*/
exports.edit= (req, res)=>{
    const {id,user,pswrd,role} = req.body;
    db.query(
        "CALL persistUser(?,?,?,?)"[id, user, pswrd, role],
        (err, results)=>{
            if(err){
                return res.status(500).send("Conection error");
            }
            if(results.length>0){
                res.send('user edited succesfuly');
            }else{
                res.send('edit user error');
            }
        }
    )
}
