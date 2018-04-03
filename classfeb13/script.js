var tabWelcome = document.getElementById('tabWelcome');
var tabTrad = document.getElementById('tabTraditional');
var tabGlazed = document.getElementById('tabGlazed');

tabTrad.onclick=function() {
	//hide welcome
	//visit all elements taht are in our content area of the page and
	//tell them all to become invisible
	var allContentUnits = document.querySelectorAll('#content div');
	for(var i =0;var<allContentUnits.length;i++){
		allContentUnits[i].classList.add('hidden');
	}
	document.getElementsByClassName()
	var contentWelcome = document.getElementById('contentWelcome');
	contentWelcome.classList.add('hidden');
	var contentTraditional= document.getElementById('contentTraditional');
	contentTraditional.classList.remove('hidden');
	tabTrad.classList.add('active');
	tabWelcome.classList.remove('active');

	//show trad
	
	//make ello/
	
	//make not yellow
}
