$(function() {
        window._queryOptions = {
	    		options : { 
	    			id : null,
		    		username : null,
		    		delOrNot : "no",
		    		token : "admin",
		    		page : {
		    			pageNo : 1,
		    			length : 10
		    		}
	    		},
	    		hash:(function(hash){try{return hash.substring(1)}catch(e){return null}})(location.hash),
	    		f : $('#footable-res2').clone(true),
	    		title : null,
	    		$foottable : $("#Filtering"),
	    		query : function() {
    				queryDownls();
    			}
	    	};
	    window._queryOptions.query();
    });
    
	keywordSearch = function (obj){
			var text = $.trim($(obj).val());
			window._queryOptions.title = null;
			window._queryOptions.options.page.pageNo = 1;
			if("" != text){
				window._queryOptions.options.username = text;
				window._queryOptions.query();
			}else{
				$(obj).val("");
				window._queryOptions.options.username = null;
				window._queryOptions.query();
			}
	}

	queryDownls = function(){
			window._postDataJson({
	    		url : window._BasePath + "/governor/userAdmin/list.json",
	    		data : window._queryOptions.options,
	    		success : function(data){
	    			(function(w){w.options.page = data.data.page;
	    			w.options.delOrNot = "no";
	    			var purchList = data.data.list;
	    			tr_tdList(purchList);
	    			var $pag = $(".pagination");
	    			$pag.empty().append(createPageCount(w.options.page));
	    			window._anchor(w.hash);})(window._queryOptions);
	    		}
    		});	
	}    
	
	tr_tdList = function(d){
			if(d != undefined){
			(function(w){
				var $oldF = $('#footable-res2');
				$oldF.remove();
				var $newF = w.f.clone(true);
				w.$foottable.append($newF);
				var $tbody = $newF.find("tbody");
				for(var i = 0 ,length = d.length; i < length; i ++){
					var $tr = $("<tr></tr>");
					var $td0 = $("<td>"+d[i].username+"</td>");
					var $td1 = $("<td>"+d[i].realname+"</a></td>");
					var $td2 = $("<td>"+d[i].registerTime+"</td>");
					/* var $td5 = $("<td>true</td>"); */
					var $td6 = $("<td></td>");
					var $span1 = $('<span class="status-metro status-active"><a href="#" onclick="doEdit(\''+d[i].id+'\')">编辑</a></span>');
					var $span2 = $("<span class='status-metro status-suspended'>删除</span>")
									.attr({"onclick":"doDelete(this,'"+d[i].id+"','"+d[i].username+"')"});
					$td6.append($span1).append($span2);
					$tr.append($td0).append($td1).append($td2).append($td6);
					$tbody.append($tr);
				}
				$newF.footable();
				})(window._queryOptions);
			}
	}
	
	
	 function doAdd(){
	    	url=window._BasePath + "/governor/userAdmin/add.do";
			window._editDialog=showModalCenter(650,450,url);
	    	event.preventDefault();
	    }
	    
	    function doEdit(id){
	    	url=window._BasePath + "/governor/userAdmin/edit.do?id="+id;
			window._editDialog=showModalCenter(650,450,url);
	    	event.preventDefault();
	    }
	    
	    function doDelete(obj,id,username){
	    	if(nowUser!=""&&nowUser==username){
	    		alert("不可删除登陆账号！");
	    		return;
	    	}
	    	if(!confirm("确认删除登陆账号："+username+"?")){
	    		return;
	    	}
	    	window._postData({
	    		url : window._BasePath + "/governor/userAdmin/delete.json?id="+id,
	    		type : "post",
	    		dataType : "json",
	    		success : function(data){
	    			if(data.result === true){
	    				$(obj).parents("tr").remove();
	    			}
	    		}
	    	});
	    }