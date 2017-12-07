/*
  PrintScreeShot 0.1 <>
  Copyright (c) 2012 Jefferson Oliveira

  Released under MIT License
*/
(function($){
	
$.fn.printScreen =  function(config){
		var defaultConfig = $.extend({
				hiddenItens : "",
				targetObj	: document.body,
			},config);
	
		this.click(function(){

		var hiddenObjToItem	= defaultConfig.hiddenItens.split(',');

	$(hiddenObjToItem).each(function(index, element) {
            $(element).hide();
        });
	
       html2canvas(defaultConfig.targetObj, {
            onrendered: function(canvas) {
					var dataUrl = canvas.toDataURL();
					var html 	= '<html><body style="margin:0px; padding:0px"><img onload="javascript: window.print(); window.close();" src="'+dataUrl+'" width="100%" /></body></html>';
					var win  	= window.open();
					win.document.write(html);
		    
					$(hiddenObjToItem).each(function(index, element) {
						$(element).show();
					});
					
		    }
        });
	
	
		});
	

	}
	
	})(jQuery);
