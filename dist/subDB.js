"use strict";

var pool = require('./pool');

module.exports = {
	getAllSubjectType: function getAllSubjectType() {
		var sql = "select * from tbl_exam_subjecttype";
		return pool.execute(sql);
	},
	getAllSubjectLevel: function getAllSubjectLevel() {
		var sql = "select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
	},
	getAllDepartments: function getAllDepartments() {
		var sql = "select * from tbl_exam_epartment";
		return pool.execute(sql);
	},
	getAllTopics: function getAllTopics() {
		var sql = "select * from tbl_exam_topic";
		return pool.execute(sql);
	},
	getDepartmentTopics: function getDepartmentTopics(department_id) {
		var sql = "select t.id,t.title,d.name from tbl_exam_epartment as d,tbl_exam_topic as t where t.department_id=" + department_id + " and d.id=t.department_id";
		return pool.execute(sql);
	},
	saveSubject: function saveSubject(subject) {
		//id,'analysis','answer','checkState','stem','uploadTime',d.id,sl.id,st.id,t.id,u.id
		var sql = "insert into tbl_exam_subject values(" + subject.id + ",'" + subject.analysis + "','" + subject.answer + "','" + subject.checkState + "','" + subject.stem + "','" + subject.uploadTime + "'," + subject.department_id + "," + subject.subjectLevel_id + "," + subject.subjectType_id + "," + subject.topic_id + "," + subject.user_id + ",";
		")";
		return pool.execute(sql);
	}
};