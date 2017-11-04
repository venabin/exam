require('babel-polyfill');
var express=require('express');
var router=express.Router();
var subDB=require('../db/subDB');
var Subject=require('../model/subject');
var Choice=require('../model/choice');

router.get('/getAllSubjectType',(req,resp)=>{
	subDB.getAllSubjectType().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.get('/getAllSubjectLevel',(req,resp)=>{
	subDB.getAllSubjectLevel().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.get('/getAllDepartments',(req,resp)=>{
	subDB.getAllDepartments().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.get('/getAllTopics',(req,resp)=>{
	subDB.getAllTopics().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.get('/getDepartmentTopics',(req,resp)=>{
	subDB.getDepartmentTopics(req.query.department_id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.post('/saveSubject',(req,resp)=>{
	var subject= new Subject();
	Object.assign(subject,req.body);
	subDB.saveSubject(subject).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
})

router.post('/saveChoice',(req,resp)=>{
	var choice= new Choice();
	console.log("router",req.body);
	Object.assign(choice,req.body);
	subDB.saveChoice(choice).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
})

router.post('/getSubject',(req,resp)=>{
	console.log(req.body);
	subDB.getSubject(req.body.department_id,req.body.subjectLevel_id,req.body.subjectType_id,req.body.topic_id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
})
 router.post('/getChoice',(req,resp)=>{
	console.log(req.body);
	subDB.getChoice(req.body.subject_id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
})

router.post('/updatecheckState',(req,resp)=>{
	console.log(req.body);
	subDB.updatecheckState(req.body.checkState,req.body.id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
})


router.post('/deleteSubjectByid',(req,resp)=>{
	console.log(req.body);
	subDB.deleteSubjectByid(req.body.id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
})

module.exports=router;