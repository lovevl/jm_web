/**
 * Created by xmmrh on 2018/1/28.
 */
$(function () {

	window._queryOptions.query();
    imgIncrement.scrollImgFn();
});

window._queryOptions = {
	options : {
		roomType : null,
		styleType : null,
		methodType : null,
		recommend : null,  //推荐
		praise : null,  //点赞数
		page : {
			pageNo : 1,
			length : 8
		}
	},
	$classifyId : $('#classify_id'),
	$condition : $('.condition'),
	$end : $('.end'),
	$none : $('.none'),
	search : function(){
		window._queryOptions.options.page.pageNo =1;
		$('#img_box_l').empty();
		$('#img_box_r').empty();
		querys();
	},
	query : function(){
		querys();
	}
};

querys = function(){
	window._postDataJson({
		url : window._BasePath + "/design/list.json",
		data : window._queryOptions.options,
		success : function(data){
			window._queryOptions.options.page = data.data.page;
			setImgs(data.data.list);
		}
	});
	preventEvent(event);
}

setImgs = function(d){
	if(d){
		window._queryOptions.$end.addClass('hidden');
		imgIncrement.$loading.removeClass("hidden");
		imgIncrement.init(d);
	}else{
		if($('.img-box').children().length <= 0){
			window._queryOptions.$none.removeClass('hidden');
		}else{
			window._queryOptions.$end.removeClass('hidden');
		}
		imgIncrement.$loading.addClass("hidden");
		console.log($('.img-box').length);
	}
}

boxVisual = {
        $pics : $('.img-box').children(),
        clientH : 0,
        visualFn : function (obj) {
            $.each(obj, function (i, n) {
                var $n = $(n).find('.describe');
                var visualTop = n.getBoundingClientRect().top;
                if ((visualTop > 0 && visualTop <= boxVisual.clientH) || (visualTop < 0 && n.offsetHeight + visualTop > boxVisual.clientH)) {
                    $n.css('bottom', 0);
                } else {
                    $n.css('bottom', '-26px');
                }
            });
        },
        initVisualFn : function (obj) {
            var clientW = client().width;
            boxVisual.clientH = parseInt(client().height/2);
            if(clientW <=768) {
                $(window).scroll(function () {
                    boxVisual.visualFn(obj);
                });
            }
        },
        init : function () {
            boxVisual.initVisualFn(boxVisual.$pics);
        }
    };

imgIncrement = {
    $loading : $('#loading'),
    imgL : document.getElementById('img_box_l'),
    imgR : document.getElementById('img_box_r'),
    boxLHeight : 0,
    boxRHeight : 0,
    initImgFn : function (arr) {
        // var arr = ['../img/design/8.jpg', '../img/design/9.jpg', '../img/design/10.jpg', '../img/design/11.jpg',
        //     '../img/design/12.jpg', '../img/design/13.jpg', '../img/design/14.jpg', '../img/design/15.jpg',
        //     '../img/design/16.jpg', '../img/design/17.jpg', '../img/design/18.jpg', '../img/design/19.jpg',
        //     '../img/design/20.jpg'];
            for (var i = 0; i < arr.length; i++) {
            	
                var imgStr = '<div class="box"> <div onclick="lookingImg(this);"><img src="' + arr[i].imgUrl + '-jm" alt="'+arr[i].title+'"></div>'+
                    '<div class="describe">'+
                    '<p><span class="pull-left">'+arr[i].title+'&nbsp;&nbsp;编号：'+arr[i].num+'</span> <span class="pull-right">作者: <a href="">'+arr[i].author+'</a></span></p>'+
                    '</div></div>';
                var l = imgIncrement.imgL.lastElementChild;
                var r = imgIncrement.imgR.lastElementChild;
                if(isMobile()){
                	$(imgIncrement.imgL).append($(imgStr));
                }else{
                    var lTop = l==null?0:imgIncrement.boxLHeight;
                    var rTop = r==null?1:imgIncrement.boxRHeight;
                    if (lTop < rTop) {
                        $(imgIncrement.imgL).append($(imgStr));
                        imgIncrement.boxLHeight = imgIncrement.boxLHeight + arr[i].height * (imgIncrement.imgL.offsetWidth/arr[i].width);
                    } else {
                        $(imgIncrement.imgR).append($(imgStr));
                        imgIncrement.boxRHeight = imgIncrement.boxRHeight + arr[i].height * (imgIncrement.imgL.offsetWidth/arr[i].width);
                    }
                }
                imgIncrement.$loading.addClass("hidden");
            }
    },
    init : function (arr) {
         imgIncrement.initImgFn(arr);
    },
    scrollImgFn : function(){
    	 $(window).scroll(function () {
             if(scroll().top > document.body.scrollHeight -client().height -80) {
            	 window._queryOptions.options.page.pageNo++;
            	 window._queryOptions.query();
             }
             boxVisual.initVisualFn($(imgIncrement.imgL).children());
         });
    }

};
typeSearch  = function(obj,type,a){
	var $obj = $(obj);
	var text = $obj.text();
	$obj.parents('.group').addClass('hidden');
	switch(a){
		case 1 : window._queryOptions.options.roomType = type;
			window._queryOptions.$classifyId.find('a').eq(0).html(text+'<span class="icon-img icon-x"></span>').removeClass('hidden');
			break;
		case 2 : window._queryOptions.options.styleType = type;
		window._queryOptions.$classifyId.find('a').eq(1).html(text+'<span class="icon-img icon-x"></span>').removeClass('hidden');
			break;
		case 3 : window._queryOptions.options.methodType = type;
		window._queryOptions.$classifyId.find('a').eq(2).html(text+'<span class="icon-img icon-x"></span>').removeClass('hidden');
			break;
	}
	window._queryOptions.search();
	
};

cancelClassify = function(obj,a){
	$(obj).addClass('hidden');
	window._queryOptions.$end.addClass('hidden');
	switch(a){
	case 1 : window._queryOptions.options.roomType = null;
	window._queryOptions.$condition.find('.group').eq(0).removeClass('hidden');
		break;
	case 2 : window._queryOptions.options.styleType = null;
	window._queryOptions.$condition.find('.group').eq(1).removeClass('hidden');
		break;
	case 3 : window._queryOptions.options.methodType = null;
	window._queryOptions.$condition.find('.group').eq(2).removeClass('hidden');
		break;
	}
	window._queryOptions.search();
}

