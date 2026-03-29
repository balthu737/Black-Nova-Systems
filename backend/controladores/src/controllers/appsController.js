const db= require('../db/database');

exports.view = (req, res)=>{
    const query = db.query(
        "SELECT * FROM apps",
        (err, results) => {
            if(err){
                return res.status(500).send("Conection error");
            }
        }
    );
    res.send(query);
}