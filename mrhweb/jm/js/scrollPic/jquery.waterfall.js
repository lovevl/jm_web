!function (t) {
    function i(i, o) {
        this.$element = t(i), this.options = t.extend(!0, {}, n, o), this.ajaxLoading = !1, this.colHeightArray = [], this._init()
    }

    var o = t(window), s = "waterfall", n = {
        itemClass: "waterfall-item",
        spacingWidth: 10,
        spacingHeight: 10,
        minColCount: 2,
        resizeable: !1,
        itemAlign: "center",
        isFadeIn: !0,
        ajaxCallback: null
    };
    i.prototype = {
        constructor: i, _init: function () {
            var t = this;
            o.on("load", function () {
                t._positionAll()
            }), this.options.resizeable && o.on("resize", function () {
                t._positionAll()
            }), this._doScroll()
        }, _getColumnCount: function () {
            var i = this.$element.width(), o = t(this.options.itemClass), s = o.eq(0).outerWidth(), n = Math.floor(i / (s + this.options.spacingWidth)), e = 0, a = 0;
            n = n > this.options.minColCount ? n : this.options.minColCount, e = n * s, i > e && (a = Math.floor((i - e - n * this.options.spacingWidth) / 2)), this.itemWidth = s, this.cols = n, this.leftOffset = "center" == this.options.itemAlign ? a : 0
        }, _positionAll: function () {
            var i, o, s = this, n = t(this.options.itemClass);
            var flag = false;
            this._getColumnCount(); this.colHeightArray = [];n.each(function (e) {
                if(t(this).hasClass('fff')){
                    t(this).find('img').load(function () {
                        flag =true;
                    });
                }else{
                    flag = true;
                }
            });
            if(flag){
                n.each(function (e) {
                // var tT = t(this);

                // else{
                //
                //     t(this).css("position", "absolute"), e < s.cols ? (t(this).css("top", 0), t(this).css("left", s.leftOffset + e * s.itemWidth + e * s.options.spacingWidth), s.colHeightArray.push(t(this).outerHeight())) : (i = Math.min.apply(null, s.colHeightArray), o = t.inArray(i, s.colHeightArray), t(this).css("top", i + s.options.spacingHeight), t(this).css("left", n.eq(o).offset().left), s.colHeightArray[o] += t(this).outerHeight() + s.options.spacingHeight), s.options.isFadeIn && t(this).animate({opacity: 1}, 300)
                // }
                t(this).css("position", "absolute"), e < s.cols ? (t(this).css("top", 0), t(this).css("left", s.leftOffset + e * s.itemWidth + e * s.options.spacingWidth), s.colHeightArray.push(t(this).outerHeight())) : (i = Math.min.apply(null, s.colHeightArray), o = t.inArray(i, s.colHeightArray), t(this).css("top", i + s.options.spacingHeight), t(this).css("left", n.eq(o).offset().left), s.colHeightArray[o] += t(this).outerHeight() + s.options.spacingHeight), s.options.isFadeIn && t(this).animate({opacity: 1}, 300)
            })}; this.$element.css("height", Math.max.apply(null, s.colHeightArray))
        }, _doScroll: function () {
            var i, s = this;
            o.on("scroll", function () {
                i && clearTimeout(i), i = setTimeout(function () {
                    var i = t(s.options.itemClass).last(), n = o.scrollTop() + o.height();
                    !s.ajaxLoading && n > i.offset().top + i.outerHeight() / 2 && (s.ajaxLoading = !0, s.options.ajaxCallback && s.options.ajaxCallback(function () {
                        s._positionAll()
                    }, function () {
                        s.ajaxLoading = !1
                    }))
                }, 100)
            })
        }
    }, t.fn[s] = function (o) {
        return this.each(function () {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new i(this, o))
        }), this
    }
}(jQuery);