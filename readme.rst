printScreenShotJs
--------------------

* Print your screen incluide(css, image) with Bootstrap. Save in PDF or other extensions.
* Html2Canvas

Dependencies
-----------
* jQuery
* lib/html2canvas.js

Run
---

http://jsfiddle.net/jeffersonphp/wy4ny5q3


Call
-------------------

    $(function(){
		$("#printScreenBtn").printScreen();
	});

Call button in HTML

    <button class="btn btn-success" id="printScreenBtn" type="button">


This example print all your screen, really all!

Simple like that!

Configuration
----------------
    $(".printScreenBtn").printScreen({hiddenItens:".notPrint", targetObj}); 

* **hiddenItens**: Objects in your screen that must to be hidden when print should be separated by comma (,) ex: hiddenItens:".notPrint, #foo1, .foo2"

* **targetObj**: Element that will be picked up by print
