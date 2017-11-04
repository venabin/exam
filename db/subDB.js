let pool=require('./pool');

module.exports={
	getAllSubjectType(){
		let sql="select * from tbl_exam_subjecttype";
		return pool.execute(sql);
	},
	getAllSubjectLevel(){
		let sql="select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
	},
	getAllDepartments(){
		let sql="select * from tbl_exam_epartment";
		return pool.execute(sql);
	},
	getAllTopics(){
		let sql="select * from tbl_exam_topic";
		return pool.execute(sql);
	},
	getDepartmentTopics(department_id){
		let sql="select t.id,t.title,d.name from tbl_exam_epartment as d,tbl_exam_topic as t where t.department_id="+department_id+" and d.id=t.department_id";
		return pool.execute(sql);
	},
	saveSubject(subject){//id,'analysis','answer','checkState','stem','uploadTime',d.id,sl.id,st.id,t.id,u.id
		// console.log(subject.analysis,subject.answer,subject.stem,subject.department_id,subject.subjectLevel_id,subject.subjectType_id,subject.topic_id);
		let sql="insert into tbl_exam_subject(analysis,answer,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id) values('"
		+subject.analysis+"','"
		+subject.answer+"','"
		+subject.checkState+"','"
		+subject.stem+"'," 
		+subject.department_id+","
		+subject.subjectLevel_id+","
		+subject.subjectType_id+","
		+subject.topic_id+")";
		return pool.execute(sql);
	},
	saveChoice(choice){
		console.log("DB",choice);
		let sql="insert into tbl_exam_choice(content,correct,subject_id) values";
		choice["content[]"].forEach(function(item,index){
			if(index==choice["content[]"].length-1){
				sql+="('"
				+item+"',"
				+choice["correct[]"][index]+","
				+choice.subject_id+")";
			}else{
				sql+="('"
				+item+"',"
				+choice["correct[]"][index]+","
				+choice.subject_id+"),";
			}
		});
		return pool.execute(sql);
	},
	getSubject(department_id,subjectLevel_id,subjectType_id,topic_id){
		// let sql="select stem from tbl_exam_subject s,tbl_exam_subjectlevel sl,tbl_exam_subjecttype st,tbl_exam_topic t,tbl_exam_epartment d where s.subjectLevel_id="
		// 	+subjectLevel_id+" and s.subjectLevel_id=sl.id,s.subjectType_id="
		// 	+subjectType_id+" and s.subjectType_id=st.id,s.topic_id="
		// 	+topic_id+" and s.topic_id=t.id,s.department_id="
		// 	+department_id+" and s.department_id=d.id";
		console.log(department_id,subjectLevel_id,subjectType_id,topic_id);
		let sql="select * from tbl_exam_subject where department_id="+department_id+
			" and subjectLevel_id="+subjectLevel_id+
			" and subjectType_id="+subjectType_id+
			" and topic_id="+topic_id;
		return pool.execute(sql);
	},
	updatecheckState(checkState,id){
		let sql="update tbl_exam_subject set checkState='"+checkState+"' where id="+id;
		return pool.execute(sql);
	},
	getChoice(subject_id){
		let sql="select * from tbl_exam_choice where subject_id="+subject_id;
		return pool.execute(sql);
	},
	deleteSubjectByid(id){
		let sql="delete from tbl_exam_subject where id="+id;
		return pool.execute(sql);
	}
}



