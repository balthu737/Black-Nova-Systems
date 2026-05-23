const db= require('../utils/database');
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
exports.validateUser = (req, res)=>{
    const validate= user.login(req);
    if(validate){
        res.send('success');
    }else{
        res.send('user not registred');
    }
}
exports.filter = (req, res)=>{
    const{id,name}=req.body;
    db.query(
        "CALL getApps(?,?)",[id, name],
        (err, results) => {
            if(err){
                return res.status(500).send("Conection error");
            }
            if (results.length >0){
                res.send('Obtained apps',results);
            }else {
                res.send('Similarties not found');
            }
        }
    )
}
exports.performMaintenance = (req, res)=>{
    const {id}=req.body;
    db.query(
        "CALL maintenanceApps(?,1)",[id],
        (err, results) => {
            if(err){
                return res.status(500).send("Conection error");
            }
            if (results.length >0){
                res.send('perform maintenance',results);
            }else {
                res.send('maintenance not avaible');
            }
        }
    )
}
exports.finalizeMaintenence = (req, res)=>{
    const {id}=req.body;
    db.query(
        "CALL maintenanceApps(?,0)",[id],
        (err, results) => {
            if(err){
                return res.status(500).send("Conection error");
            }
            if (results.length >0){
                res.send('maintenance finalized',results);
            }else {
                res.send('maintenance not avaible to finalize');
            }
        }
    )
}
exports.askPermission = (req,res)=>{
    const {id, app}= req.body;
    db.query(
        "CALL askPermissionForApp(?,?)" [id, app],
        (err, results)=>{
            if(err){
                return res.status(500).send("Conection error");
            }
            if(results.length>0){
                res.send('user permitted');
            }else{
                res.send('user hasnt the app');
            }
        }
    )
}
exports.buy = (req, res)=>{
    const {user, app}= req.body;
    
}