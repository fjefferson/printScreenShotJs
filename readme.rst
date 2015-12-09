printScreenShotJs
--------------------

* Print your screen incluide(css,image) with Bootstrap. Save in PDF or another extension.
* Html2Canvas

Dependenceis
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

* **hiddenItens**: Objects of your screen to be hidden when it generate the impression separated by comma (,) ex: hiddenItens:".notPrint, #foo1, .foo2"

* **targetObj**: Element that will be picked up by print




