!function(o){function t(){var t=o(".modal_contents"),n=o(window);n.on("load",function(){t.height()>n.height()?t.attr("style","left: 24px; position: relative; top: 0; transform: none;"):t.removeAttr("style")})}o(function(){t(),o(".js-modalClose").modal_close()}),o.fn.modal_close=function(t){var n=this,e=o(".modal",parent.document),i={speed:250};o.extend(i,t),n.on("click",function(){e.stop().fadeOut(i.speed,function(){e.remove()})})}}(jQuery);