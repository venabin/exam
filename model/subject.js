class Subject{
	constructor(analysis,answer,checkState,stem,uploadTime,department_id,subjectLevel_id,subjectType_id,topic_id){
		
		this.analysis=analysis;
		this.answer=answer;
		this.checkState=checkState;
		this.stem=stem;
		this.uploadTime=uploadTime;
		this.department_id=department_id;
		this.subjectLevel_id=subjectLevel_id;
		this.subjectType_id=subjectType_id;
		this.topic_id=topic_id;
		// this.user_id=user_id;
	}
}
// Subject.=new Date().toLocaleString();
Subject.id=1;
Subject.id++;
module.exports=Subject;