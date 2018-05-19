
$(function(){
	window._initDict(["gradeType"]);
	window._initDict(["subjectType"]);
	
	schl ={
		$form : $("#teacherFormId"),
		$provinceId : $("#province_id"),
		$cityId : $("#city_id"),
		$areaId : $("#area_id"),
		$schlId : $("#school_id"),
		$gradeId : $("#grade_id"),
		$typeId : $("#type_id"),
		$schlAdminId : $("#schlAdmin_id"),
		initSchl : function(){
					window._postDataJson({
					url : window._BasePath + "/schools/getSchls.json",
					data : {province : schl.$provinceId.val(),city : schl.$cityId.val(),area:schl.$areaId.val()},
					showMessage :false,
					success:function(data){
						if(data.result === true){
							schl.listSchl(data.data.list);
						}
					}
				});
		},
		listSchl : function(l){
					var $schlMsg = schl.$schlId.parent().next();
					schl.$schlId.empty()
					if(l != undefined){
						var $opt = $("<option value='0'>请选择</option>");
						schl.$schlId.append($opt);
						for(var i = 0; i < l.length; i ++){
							var $optC = $('<option value="'+l[i].id+'">'+l[i].name+'</option>');
							schl.$schlId.append($optC);
						}
					}else{
						$schlMsg.removeClass("hidden");
					}
		}
	};
	
		schl.$form.find("input[name=name]").attr("vld", "{required:true,username:true}");
		schl.$form.find("input[name=phone]").attr("vld", "{required:true,phone:true,remote:'"+window._BasePath+"/phone_unique.jspx',messages:{remote:'手机号已存在'}}");
		schl.$form.find("input[name=phoneCode]").attr("vld", "{validateCode:true}");
		schl.$form.find("input[name=pwd]").attr("vld", "{required:true,password:true,rangelength:[6,12]}");
		schl.$form.find(".confirmPwd").attr("vld", "{required:true}").attr("equalto", "#pwd_id");
		schl.$form.validate();

	
	inites();
	schl.$provinceId.on("change",function(){
		inites(this.value,schl.$cityId);
	});
	schl.$cityId.on("change",function(){
		inites(this.value,schl.$areaId);
	});
	schl.$areaId.on("change",function(){
		schl.initSchl();
	});
	schl.$schlId.on("change",function(){
		initGrade(this.value);
	});
/* 	schl.$schlAdminId.on("change",function(){
		initStation(this.value);
	}); */
	initSubject();
	
});

var initSubject = function(){
	for(var i in window._dictEntitys["subjectType"]){
		schl.$typeId.append($('<option value="'+i+'">'+window._dictEntitys["subjectType"][i]+'</option>'));
	};
}

/* var initStation = function(val){
	if(val==0){
		schl.$gradeId.parents(".form-inline").removeClass("hidden");
	}else{
		schl.$gradeId.parents(".form-inline").addClass("hidden");
	}
} */

function inites(parentId,$id){
	if(parentId==undefined){
		parentId = 1;
		$id = schl.$provinceId;
	}
	window._postDataJson({
		url : window._BasePath + "/area/getByParentId.json",
		data : {parentId : parentId},
		showMessage :false,
		success:function(data){
			if(data.result === true){
				listCity(data.data.list,$id);
			}
		}
	});
}



function listCity(l,$id){
	var $opt = $("<option value='0'>请选择</option>");
	$id.empty().append($opt);
	if(l != undefined){
		$id.parent().removeClass("hidden");
		schl.$schlId.empty();
		for(var i = 0; i < l.length; i ++){
			var $optC = $('<option value="'+l[i].id+'">'+l[i].name+'</option>');
			$id.append($optC);
		}
	}else{
		$id.parent().addClass("hidden");
		schl.initSchl();
	}
}

var initGrade = function(id){
	window._postDataJson({
		url : window._BasePath + "/schools/schlDe.json",
		data : {id : id},
		showMessage :false,
		success:function(data){
			if(data.result === true){
				listGrade(data.data.schl);
			}
		}
	});
}

var listGrade = function(g){
	schl.$gradeId.empty();
	for(var i = 0 ; i< g.typeList.length; i++){
		switch(g.typeList[i]){
			case "xx" :  
				for(var j = 1; j<=6; j++){
					var $opt = $('<option value="'+j+'">'+window._dictEntitys["gradeType"][j]+'</option>');
					schl.$gradeId.append($opt);
				};
				break;
			case "cz" :  
				for(var j = 7; j<=9; j++){
					var $opt = $('<option value="'+j+'">'+window._dictEntitys["gradeType"][j]+'</option>');
					schl.$gradeId.append($opt);
				};
				break;
			case "gz" :  
				for(var j = 10; j<=12; j++){
					var $opt = $('<option value="'+j+'">'+window._dictEntitys["gradeType"][j]+'</option>');
					schl.$gradeId.append($opt);
				};
				break;
		}
	}
	
}

doSaveSuccess = function(data){
	
	if (data.result == true) {
		window._MRHLoader.slowDestroy(500,"注册成功，正在尝试登录");
		var form = schl.$form[0];
		form.action = window._BasePath + "/teacher/login.jspx";
		ajaxSubmitForm(form, window.loginSuccess);
	}else{
		if(data.message != undefined){
			window._MRHLoader.slowDestroy(5000,data.message,"wrong");
			$("#registeredId").removeClass("hidden").find("a").attr("href",window._BasePath + "/teacher/changeT.jspx?id="+data.data.tId);
		}
	}
}

submitForm = function(form){
		if($(form).find("input[type=checkbox]")[0].checked){
			form.action=window._BasePath +"/teacher/save.jspx" ;
			ajaxSubmitForm(form, doSaveSuccess);
		}else{
			alert('请点击同意我们的站内条款与服务');
		}
		return false;
	}

sendCode = function(obj){
	var $username = $("form input[name='phone']");
	if(window.sendEmailCode($username.val(),$(obj))){
		window.time(120,$(obj),"sendCode(this);");
	}
}



$(function(){
	schlm = {
		$form : $("#schlFormId"),
		$provinceId : $("#province_idm"),
		$cityId : $("#city_idm"),
		$areaId : $("#area_idm")
	};
	schlm.$form.find("input[name=name]").attr("vld", "{required:true,remote:'${base}/schlname_unique.jspx',messages:{remote:'学校已存在'}}");
	schlm.$form.validate();
	initesm();
	schlm.$provinceId.on("change",function(){
		initesm(this.value,schlm.$cityId);
	});
	schlm.$cityId.on("change",function(){
		initesm(this.value,schlm.$areaId);
	});

});

function initesm(parentId,$id){
	if(parentId==undefined){
		parentId = 1;
		$id = schlm.$provinceId;
	}
	window._postDataJson({
		url : window._BasePath + "/area/getByParentId.json",
		data : {parentId : parentId},
		showMessage :false,
		success:function(data){
			if(data.result === true){
				listCitym(data.data.list,$id);
			}
		}
	});
}

function listCitym(l,$id){
	var $opt = $("<option value='0'>请选择</option>");
	$id.empty().append($opt);
	$("#areaWrong").hide();
	if(l != undefined){
		$id.parent().removeClass("hidden");
		for(var i = 0; i < l.length; i ++){
			var $optC = $('<option value="'+l[i].id+'">'+l[i].name+'</option>');
			$id.append($optC);
		}
	}else{
		$id.parent().addClass("hidden");
	}
}

var addSuccess = function(data){
	if(data.result==true){
		schlm.$form.find("button[type=button]").click();
		schlm.$form.find("button[type=reset]").click();
		window._MRHLoader.slowDestroy(5000,"保存成功，请刷新页面！");
	}
};

function saveSchl(form){
	var flag0 = false;
	if(schlm.$provinceId.val()!=0 && schlm.$cityId.val()!=0 ){
		if(schlm.$areaId.parent().hasClass("hidden") || (!schlm.$areaId.parent().hasClass("hidden")&&schlm.$areaId.val() != 0)){
			flag0 = true;
		}
	}
	if(flag0){
		var flag = false;
		$(form).find("input[type=checkbox]").each(function(i){
			if(this.checked){
			flag = true;$("#checkboxWrong").hide();
			}
		});
		if(!flag){
			$("#checkboxWrong").show();
		}else{
			form.action = window._BasePath + "/schools/save.json";
			ajaxSubmitForm(form,addSuccess);
		}
	}else{
		$("#areaWrong").show();
	}
	event.preventDefault();
	return false;
	
}