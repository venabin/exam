require('babel-polyfill');
var subDB=require('./subDB');
var Subject=require('../model/subject');
var Choice=require('../model/choice');

// subDB.getAllSubjectType().then((data)=>{
// 	console.log(data);
// }).catch((err)=>{
// 	resp.send("error:",err);
// });

// var subject=new Subject('77777777','','未审核','sfdgad','2017-10-13 09:23:53',2,3,2,2);
// subDB.saveSubject(subject).then(function(data){
// 	  console.log(data);
// 	}).catch(function(error){
// 	  console.log("报错了 ！"+error);
// });

var choice=new Choice(['6','sss','ddd','fff'],[1,0,0,0],21);
subDB.saveChoice(choice).then(function(data){
	  console.log(data);
	}).catch(function(error){
	  console.log("报错了 ！"+error);
});

// subDB.getSubject(2,1,1,6).then((data)=>{
// 	console.log(data);
// }).catch((err)=>{
// 	console.log("error:",err);
// });

// subDB.getChoice(2).then((data)=>{
// 	console.log(data);
// }).catch((err)=>{
// 	console.log("error:",err);
// });

// $(function(){
// 	$(".chose").on("click","a",function(){
// 		$(this).addClass("active3").siblings().removeClass("active3");
// 	})
// })