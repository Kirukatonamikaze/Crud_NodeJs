const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * from Clientes', (err, result) => {
            if (err) {
                res.json(err);
            }
            res.render('home', {
                data: result

            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query(`INSERT INTO clientes VALUES(null,'${data.nombre}','${data.direccion}','${data.phone}')`, (err, result) => {
            res.redirect('/');
        });
    })
};

controller.delete = (req, res) => {
    const id = req.params.id;
  req.getConnection((err,conn) => {
      conn.query('DELETE FROM clientes WHERE id = ?',[id],(err,rows)=>{
          res.redirect('/');     
      });  
  });
};

controller.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM clientes WHERE id = ?',[id],(err,result) =>{
            res.render('editCliente',{
                data: result[0]
            });
        });
    });
};
controller.update = (req,res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE clientes set ? WHERE id = ?',[data,id],(err,rows)=>{
            res.redirect('/');
        });
    });

}

module.exports = controller;