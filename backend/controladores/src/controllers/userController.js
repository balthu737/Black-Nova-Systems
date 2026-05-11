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
                res.send('succesfuly login',results);
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
/*edita usuarios*/
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
/*elimina usuarios*/
exports.delete= (req, res)=>{
    const {id} = req.body;
    db.query(
        "CALL deleteUser(?,?)"[id,0],
        (err, results)=>{
            if(err){
                return res.status(500).send("Conection error");
            }
            if(results.length>0){
                res.send('user deleted succesfuly');
            }else{
                res.send('error');
            }
        }
    )
}
/*banea usuarios*/
exports.ban= (req, res)=>{
    const{id}= req.body;
    db.query(
        "CALL deleteUser(?,?)"[id,1],
        (err, results)=>{
            if(err){
                return res.status(500).send("Conection error");
            }
            if(results.length>0){
                res.send('user baned succesfuly');
            }else{
                res.send('error to ban user');
            }
        }
    )
}
exports.getById = (req, res)=>{
    const {id} = req.body;
    db.query(
        "CALL get_users(?,?)"[id,''],
        (err, results)=>{
            if(err){
                return res.status(500).send("Conection error");
            }
            if(results.length>0){
                res.send(results);
            }else{
                res.send('error to find user');
            }
        }
    )
}
exports.getByName = (req, res)=>{
    const {name} = req.body;
    db.query(
        "CALL get_users(?,?)"[0,name],
        (err, results)=>{
            if(err){
                return res.status(500).send("Conection error");
            }
            if(results.length>0){
                res.send(results);
            }else{
                res.send('error to find users');
            }
        }
    )
}
exports.getAll = (req, res)=>{
    db.query(
        "CALL get_users(0,'')",
        (err, results)=>{
            if(err){
                return res.status(500).send("Conection error");
            }
            if(results.length>0){
                res.send(results);
            }else{
                res.send('error to find user');
            }
        }
    )
}