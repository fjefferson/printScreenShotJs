/*
  PrintScreeShot 0.2 <>
  Copyright (c) 2012 Jefferson Oliveira
  Released under MIT License
*/
(function($){
    $.fn.printScreen =  function(config){
		var defaultConfig = $.extend({
				hiddenItens: "",
				targetObj: document.body,
				landScape: false
			},config);

		this.click(function(){

		var hiddenObjToItem	= defaultConfig.hiddenItens.split(',');

		$(hiddenObjToItem).each(function(index, element) {
			$(element).hide();
        });
		
	   html2canvas(defaultConfig.targetObj, {
             onrendered: function(canvas) {
					var dataUrl = canvas.toDataURL();
					var isLandSCape = defaultConfig.landScape ? "@media print{@page {size: landscape}}" : '';
					var html 	= '<html><head><style type="text/css" media="print"> body{margin:0px; padding:0px;}'+ isLandSCape  +'</style></head><body><img onload="javascript: window.print(); window.close();" src="'+dataUrl+'" width="100%" /></body></html>';
					var win  	= window.open("");
					win.document.write(html);

					$(hiddenObjToItem).each(function(index, element) {
						$(element).show();
					});	
		    	}
        	});
	    });
	}
})(jQuery);
