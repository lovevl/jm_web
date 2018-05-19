
window._modalCenter = {
	basic : function(width, height, url, opts) {
		var dialogDiv = document.createElement("div");
		dialogDiv.style.textAlign = "center";
		dialogDiv.style.overflow = "hidden";
		var iframe = document.createElement("iframe");
		var body = window.document.body;
		dialogDiv.appendChild(iframe);// 把它们套起来 body←div←iframe
		body.appendChild(dialogDiv);
		iframe.src = url;
		iframe.width = width;
		iframe.height = height;
		iframe.frameBorder = "0";
		var options = {
			closeOnEscape : true,
			resizable : false,
			modal : true,
			width : iframe.offsetWidth + 37,
			height : iframe.offsetHeight + 75,
			close : function() {
				$(this).dialog("destroy");
				try {
					this.parentNode.removeChild(this);
				} catch (e) {
				}
				$("body").css({
					'height' : 'auto',
					"overflow-y" : "auto"
				});
			}
		}
		if (opts.open) {
			var tempopen = opts.open;
			opts.open = function() {
				$(this).each(tempopen);
				$(this).each(window._modalCenter.defaultOpen);
			};
		} else {
			opts.open = window._modalCenter.defaultOpen;
		}
		$(dialogDiv).dialog($.extend(options, opts));
		return dialogDiv;
	},
	defaultOpen : function() {
		this.previousElementSibling.style.display = "none";
		$("body").css({
			'height' : '100%',
			"overflow-y" : "hidden"
		});
	}
}
window.showModalCenterPage = function(width, height, url) {
	return window._modalCenter.basic(width, height, url, {
		open : function() {
			this.parentNode.nextElementSibling.onclick = function() {
				var children = this.previousElementSibling.children;
				$(children[children.length - 1]).dialog("close");
			}
		}
	});
}
window.showModalCenter = function(width, height, url) {
	return window._modalCenter.basic(width, height, url, {
		buttons : [{
			text : "关闭",
			icons : {
				primary : "ui-icon-heart"
			},
			click : function() {
				$(this).dialog("close");
			}
		}]
	});
}

window.closeDialog = function(div) {
	$(div).dialog("close");
}
