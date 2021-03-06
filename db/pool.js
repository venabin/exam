let mysql=require('mysql');
let pool=global.pool;
if(!pool){
	pool=mysql.createPool({
			database:'exam',
			user:'root',
			password:'root'
		});
	global.pool=pool;
}

function getConnection(){
	return new Promise(function(resolve,reject){
		pool.getConnection(function(err,conn){
			if(!err){
				resolve(conn);
			}else{
				reject(err);
			}
		})
	});
};

function execute(sql){
	return new Promise(function(resolve,reject){
		let connection;
		getConnection().then(function(conn){
			connection=conn;
			conn.query(sql,function(err,result){
				if(!err){
					resolve(result);
				}else{
					reject(err);
				}
			});
		}).catch(function(err){
			reject(err);
		}).finally(function(){
			if(connection){
				connection.release();
				console.log("释放完成");
			}
		});
	});
}

module.exports={
	getConnection:getConnection,
	execute:execute
}