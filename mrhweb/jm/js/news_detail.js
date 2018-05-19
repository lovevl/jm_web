/**
 * Created by xmmrh on 2018/2/2.
 */


detail = {
    options : {
        recommend : null,
        page : {
            pageNo : 1,
            length : 5
        }
    },
    $tag : $('#tag_id'),
    $recentNews : $('#recent_news_id'),
    $recommendNews : $('#recommend_news_id'),
    tagFn : function () {
        var tag = tags.split(" ");
        if(tag.length > 0)detail.$tag.removeClass('hidden');
        for(var key in tag){
            var a = '<a href="'+window._BasePath+'/news/search.jhtml?tag'+tag[key]+'">'+tag[key]+'</a>';
            detail.$tag.append($(a));
        }
    },
    recentFn : function () {
        detail.ajaxFn(detail.$recentNews);
    },
    recommendFn : function () {
        detail.options.recommend = 1;
        detail.ajaxFn(detail.$recommendNews);
    },
    listFn : function (p,d) {
        p.find("ul").remove();
        if(d){
            p.removeClass("hidden");
            var $ul = $('<ul></ul>');
            for(var i in d){
                var li = '<li><a href="'+window._BasePath+'/news/detail.jhtml?num='+d[i].num+'">'+d[i].title+'</a></li>';
                $ul.append($(li));
            }
            p.append($ul);
        }
    },
    ajaxFn : function (parent) {
        $.ajax({
            url : window._BasePath + "/news/list.json",
            data : JSON.stringify(detail.options),
            type : "POST",
            contentType : "application/json;charset=utf-8",
            success : function (data) {
                if(data.result == true){
                    detail.listFn(parent,data.data.list);
                }
            },
            error : function () {

            }
        });
    },
    init : function () {
        detail.tagFn();
        detail.recentFn();
        detail.recommendFn();
    }
};

