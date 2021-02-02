module.exports = (mysql, app) => {

  app.get('/get/puntos', (req, resp) => {
    let { q, apy_key } = req.query;

    mysql.query(q, (error, data, rows) => { //get all the points 
      if(!error){
	resp.json(data);
      } else {
	console.log(error)
	resp.send('Error to get data');
      }
    });
  })
  
  app.get('/', (req, resp)=> {
    resp.send('server');
  })




}
