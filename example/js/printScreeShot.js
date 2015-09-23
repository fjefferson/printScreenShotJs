/*
  PrintScreeShot 0.1
  Copyright (c) 2015 Jefferson Oliveira

*/
function printScreen(obj){
        html2canvas(obj, {
            onrendered: function(canvas) {
					var dataUrl = canvas.toDataURL();
					var html 	= '<html><body style="margin:0px; padding:0px"><img src="'+dataUrl+'" width="100%" /></body></html>';
					var win  	= window.open();
					win.document.write(html);
					win.print();
					win.close(); 
            }
        });

	}