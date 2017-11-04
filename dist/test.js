'use strict';

require('babel-polyfill');
var subDB = require('./subDB');
var Subject = require('../model/subject');

// subDB.getAllSubjectType().then((data)=>{
// 	console.log(data);
// }).catch((err)=>{
// 	resp.send("error:",err);
// });

var subject = new Subject(3, '5种基本数据类型', 'undefined,null,boolean,number,string', '未审核', 'js中有哪些基本数据类型', null, 1, 1, 1, 2, null);
subDB.saveSubject(subject).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.log("报错了 ！" + error);
});