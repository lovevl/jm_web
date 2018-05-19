/**
 * Created by xmmrh on 2018/2/2.
 */
$(function () {
    n.initOptionsFn();
    n.querys();
});

n = {
    options : {
    	tag : null,
        type: null,
        title: null,
        page: {
            pageNo: 1,
            length: 10
        }
    },
    page: {
        pageNo: 1,
        length: 10
    },
    querys : function () {
        u.ajaxFn();
    },
    $menuDiv : $('#menu_bar_id'),
    $addr : $('.addr'),
    initOptionsFn : function () {
    	if(tag && tag != ""){
    		n.options.tag = tag;
    		n.$addr.find("a:last-child").text("\""+tag+"\"的相关新闻");
    		var $tagsN = $(".tags-news");
    		if($tagsN.length > 0){
    			$tagsN.text("\""+tag+"\"的相关新闻");
    		}
    	}else{
	        var thisUrl = window.location.href;
	        var $lis = n.$menuDiv.find('li');
	        $lis.removeClass("active");
	        var $a = n.$addr.find("a:last-child");
	        if(thisUrl.indexOf("jmn")>-1){
	            n.options.type = 1;
	            $a.text("境美新闻");
	            $lis.eq(0).addClass("active");
	        }else if(thisUrl.indexOf("hy")>-1){
	            n.options.type = 2;
	            $a.text("行业新闻");
	            $lis.eq(1).addClass("active");
	        }else if(thisUrl.indexOf("gzn")>-1){
	            n.options.type = 3;
	            $a.text("硅藻泥小知识");
	            $lis.eq(2).addClass("active");
	        }else if(thisUrl.indexOf("zz")>-1){
	            n.options.type = 4;
	            $a.text("装修知识");
	            $lis.eq(3).addClass("active");
	        }
    	}
    	menu.init();
    }
};


u = {
    $ul : $('#news_list_id'),
    $pag : $('.pagination'),
    ajaxFn : function () {
        $.ajax({
            url : window._BasePath + "/news/list.json",
            data : JSON.stringify(n.options),
            type : "POST",
            contentType : "application/json;charset=utf-8",
            success : function (data) {
                if(data.result == true){
                    n.options.page = data.data.page;
                    if(data.data.list)
                        u.$pag.empty().append(createPageCount(n.options.page));
                    u.listFn(data.data.list);
                }
            },
            error : function () {

            }
        });
    },
    listFn : function (d) {
        u.$ul.empty();
        if(d){
            for(var i=0; i < d.length; i++){
                var $li = $('<li></li>');
                var strHtml = '<div class="row"><div class="col-xs-4 col-md-3 img"><div class="img-box"><img src="' + d[i].imgUrl +
                    '" alt=""></div></div><div class="col-xs-8 col-md-9 body "><p class="title"><a href="' + window._BasePath +"/news/detail.jhtml?num="+d[i].num+
                    '">' + d[i].title +
                    '</a></p><p class="content">' + d[i].segment +
                    '</p><span>' + d[i].pubTime +
                    '</span></div></div><div class="e-border-line"></div><div class="f-border-line"></div>';
                $li.html(strHtml);
                u.$ul.append($li);
            }
        }
    },
};