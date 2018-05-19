//Sliding Effect Control

head.js(window._BasePath + "/mrhweb/css/assets/js/skin-select/jquery.cookie.js");
head.js(window._BasePath + "/mrhweb/css/assets/js/skin-select/skin-select.js");

//Showing Date
head.js(window._BasePath + "/mrhweb/css/assets/js/clock/date.js");

//Bootstrap
//head.js(window._BasePath + "/mrhweb/css/assets/js/bootstrap.js");

//NEWS STICKER
//head.js(window._BasePath + "/mrhweb/css/assets/js/newsticker/jquery.newsTicker.js", function() {
//
//    var nt_title = $('#nt-title').newsTicker({
//        row_height: 18,
//        max_rows: 1,
//        duration: 5000,
//        pauseOnHover: 0
//    });
//
//
//});

//------------------------------------------------------------- 


////Acordion and Sliding menu
//左边栏的子栏
head.js(window._BasePath + "/mrhweb/css/assets/js/custom/scriptbreaker-multiple-accordion-1.js", function() {
	$(function(){
	    $(".topnav").accordionze({
	        accordionze: true,
	        speed: 500,
	        closedSign: '<img src="' + window._BasePath + '/mrhweb/css/assets/img/plus.png">',
	        openedSign: '<img src="' + window._BasePath + '/mrhweb/css/assets/img/minus.png">'
	    });
	});
});

////Right Sliding menu
//屏幕缩放时，保证左边栏的显示
head.js(window._BasePath + "/mrhweb/css/assets/js/slidebars/slidebars.min.js", function() {
    $(document).ready(function() {
        var mySlidebars = new $.slidebars();

        $('.toggle-left').on('click', function() {
            mySlidebars.toggle('right');
        });
    });
});

//-------------------------------------------------------------

//SEARCH MENU
head.js(window._BasePath + "/mrhweb/css/assets/js/search/jquery.quicksearch.js", function() {
    $('input.id_search').quicksearch('#menu-showhide li, .menu-left-nest li');

});
//-------------------------------------------------------------



//EASY PIE CHART
//head.js(window._BasePath + "/mrhweb/css/assets/js/gage/jquery.easypiechart.min.js", function() {
//
//    $(function() {
//
//
//        $('.chart').easyPieChart({
//            easing: 'easeOutBounce',
//            trackColor: '#ffffff',
//            scaleColor: '#ffffff',
//            barColor: '#FF0064',
//            onStep: function(from, to, percent) {
//                $(this.el).find('.percent').text(Math.round(percent));
//            }
//        });
//        var chart = window.chart = $('.chart').data('easyPieChart');
//        $('.js_update').on('click', function() {
//            chart.update(Math.random() * 100);
//        });
//
//        $('.speed-car').easyPieChart({
//            easing: 'easeOutBounce',
//            trackColor: 'rgba(0,0,0,0.3)',
//            scaleColor: 'transparent',
//            barColor: '#0085DF',
//
//            lineWidth: 8,
//            onStep: function(from, to, percent) {
//                $(this.el).find('.percent2').text(Math.round(percent));
//            }
//        });
//        var chart = window.chart = $('.chart2').data('easyPieChart');
//        $('.js_update').on('click', function() {
//            chart.update(Math.random() * 100);
//        });
//        $('.overall').easyPieChart({
//            easing: 'easeOutBounce',
//            trackColor: 'rgba(0,0,0,0.3)',
//            scaleColor: '#323A45',
//            lineWidth: 35,
//            lineCap: 'butt',
//            barColor: '#FFB900',
//            onStep: function(from, to, percent) {
//                $(this.el).find('.percent3').text(Math.round(percent));
//            }
//        });
//    });
//
//});
//-------------------------------------------------------------

//TOOL TIP隐藏左边栏的菜单
//
head.js(window._BasePath + "/mrhweb/css/assets/js/tip/jquery.tooltipster.js", function() {

    $('.tooltip-tip-x').tooltipster({
        position: 'right'

    });

    $('.tooltip-tip').tooltipster({
        position: 'right',
        animation: 'slide',
        theme: '.tooltipster-shadow',
        delay: 1,
        offsetX: '-12px',
        onlyOne: true

    });
    $('.tooltip-tip2').tooltipster({
        position: 'right',
        animation: 'slide',
        offsetX: '-12px',
        theme: '.tooltipster-shadow',
        onlyOne: true

    });
    $('.tooltip-top').tooltipster({
        position: 'top'
    });
    $('.tooltip-right').tooltipster({
        position: 'right'
    });
    $('.tooltip-left').tooltipster({
        position: 'left'
    });
    $('.tooltip-bottom').tooltipster({
        position: 'bottom'
    });
    $('.tooltip-reload').tooltipster({
        position: 'right',
        theme: '.tooltipster-white',
        animation: 'fade'
    });
    $('.tooltip-fullscreen').tooltipster({
        position: 'left',
        theme: '.tooltipster-white',
        animation: 'fade'
    });
    //For icon tooltip

});
//------------------------------------------------------------- 

//NICE SCROLL
head.js(window._BasePath + "/mrhweb/css/assets/js/nano/jquery.nanoscroller.js", function() {
    $(".nano").nanoScroller({
        //stop: true 
        scroll: 'top',
        scrollTop: 0,
        sliderMinHeight: 40,
        preventPageScrolling: true
        //alwaysVisible: false

    });
});

//------------------------------------------------------------- 






//------------------------------------------------------------- 
//PAGE LOADER
//head.js(window._BasePath + "/mrhweb/css/assets/js/pace/pace.js", function() {
//
//    paceOptions = {
//        ajax: false, // disabled
//        document: false, // disabled
//        eventLag: false, // disabled
//        elements: {
//            selectors: ['.my-page']
//        }
//    };
//
//});

//------------------------------------------------------------- 

//SPARKLINE CHART
//head.js(window._BasePath + "/mrhweb/css/assets/js/chart/jquery.sparkline.js", function() {
//
//    $(function() {
//        $('.inlinebar').sparkline('html', {
//            type: 'bar',
//            barWidth: '8px',
//            height: '30px',
//            barSpacing: '2px',
//            barColor: '#A8BDCF'
//        });
//        $('.linebar').sparkline('html', {
//            type: 'bar',
//            barWidth: '5px',
//            height: '30px',
//            barSpacing: '2px',
//            barColor: '#44BBC1'
//        });
//        $('.linebar2').sparkline('html', {
//            type: 'bar',
//            barWidth: '5px',
//            height: '30px',
//            barSpacing: '2px',
//            barColor: '#AB6DB0'
//        });
//        $('.linebar3').sparkline('html', {
//            type: 'bar',
//            barWidth: '5px',
//            height: '30px',
//            barSpacing: '2px',
//            barColor: '#19A1F9'
//        });
//    });
//
//    $(function() {
//        var sparklineLogin = function() {
//            $('#sparkline').sparkline(
//                [5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
//                    type: 'line',
//                    width: '100%',
//                    height: '25',
//                    lineColor: '#ffffff',
//                    fillColor: '#0DB8DF',
//                    lineWidth: 1,
//                    spotColor: '#ffffff',
//                    minSpotColor: '#ffffff',
//                    maxSpotColor: '#ffffff',
//                    highlightSpotColor: '#ffffff',
//                    highlightLineColor: '#ffffff'
//                }
//            );
//        }
//        var sparkResize;
//        $(window).resize(function(e) {
//            clearTimeout(sparkResize);
//            sparkResize = setTimeout(sparklineLogin, 500);
//        });
//        sparklineLogin();
//    });
//
//
//});

//------------------------------------------------------------- 

//DIGITAL CLOCK
head.js(window._BasePath + "/mrhweb/css/assets/js/clock/jquery.clock.js", function() {
    //clock
    $('#digital-clock').clock({
        offset: '+8',
        type: 'digital'
    });
});


//------------------------------------------------------------- 
//
//head.js(window._BasePath + "/mrhweb/css/assets/js/gage/raphael.2.1.0.min.js", window._BasePath + "/mrhweb/css/assets/js/gage/justgage.js", function() {
//
//    var g1;
//    window.onload = function() {
//        var g1 = new JustGage({
//            id: "g1",
//            value: getRandomInt(0, 1000),
//            min: 0,
//            max: 1000,
//            relativeGaugeSize: true,
//            gaugeColor: "rgba(0,0,0,0.4)",
//            levelColors: "#0DB8DF",
//            labelFontColor : "#ffffff",
//            titleFontColor: "#ffffff",
//            valueFontColor :"#ffffff",
//            label: "VISITORS",
//            gaugeWidthScale: 0.2,
//            donut: true
//        });
//    };
//
//});