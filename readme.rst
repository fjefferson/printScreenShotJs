<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hello!</title>
<link rel="stylesheet" href="https://stackedit.io/res-min/themes/base.css" />
<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
</head>
<body><div class="container"><h2 id="printwindowscss">printWindowsCSS</h2>

<blockquote>
  <ul>
  <li>Print you screen incluide(css,image) with Bootstrap. Save PDF or other extension.</li>
  <li>Html2Canvas</li>
  </ul>
</blockquote>

<h2 id="call">Call</h2>

<pre><code>$(function(){
    $("#printScreenBtn").printScreen();
});
</code></pre>

<p>Call button in HTML</p>

<pre><code>&lt;button class="btn btn-success" id="printScreenBtn" type="button"&gt;
</code></pre>

<p>This example print all your screen, really all!</p>

<p>Simple like that!</p>

<h2 id="configuration">Configuration</h2>

<pre><code>$(".printScreenBtn").printScreen({hiddenItens:".notPrint", targetObj}); 
</code></pre>

<blockquote>
  <ul>
  <li><p><strong>hiddenItens</strong>: Objects of your screen to be hidden when it generated the impression separed by “,” ex: hiddenItens:”.notPrint, #foo1, .foo2”</p></li>
  <li><p><strong>targetObj</strong>: Element that will be picked up by print</p></li>
  </ul>
</blockquote></div></body>
</html>