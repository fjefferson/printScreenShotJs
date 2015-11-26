printWindowsCSS
-------
* Print you screen incluide(css,image) with Bootstrap. Save PDF or other extension.
* Html2Canvas

Installation / Run
-------
* http://jsfiddle.net/jeffersonphp/k4Lt1oud/


Call
-------

<script type="text/javascript">
	$(function(){
		$("#printScreenBtn").printScreen();
	});
</script>


<button class="btn btn-success" id="printScreenBtn" type="button">


This example print all your screen, really all!

Simple like that!

Configuration
------- 

$(".printScreenBtn").printScreen({hiddenItens:".notPrint", targetObj: $("#printScreen")});

hiddenItens: Objects of your screen to be hidden when it generated the impression separed by "," ex: hiddenItens:".notPrint, #foo1, .foo2"

targetObj: Element that will be picked up by print




