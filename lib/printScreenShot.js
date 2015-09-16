/*
  PrintScreeShot 0.1 <https://github.com/jeffersonphp/printScreenShotJs>
  Copyright (c) 2015 Jefferson Oliveira
*/
function printScreen(obj){
        html2canvas(obj, { onrendered: function(canvas) {
					var html = '<html><body style="margin:0px; padding:0px"><img src="'+canvas.toDataURL()+'" width="100%" /></body></html>';
					var win  = window.open();
					win.document.write(html);
					win.print();
					win.close(); 
            }
        });

	}