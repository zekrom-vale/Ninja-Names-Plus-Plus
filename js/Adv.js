function css(){
	if(document.getElementById('css').checked){
		//Clear CSS
		document.getElementById('rez').style.fontFamily='';
		document.getElementById('rez').style.margin='';
		document.getElementById('rez').style.textAlign='';
	}
	else{
		document.getElementById('rez').style.fontFamily=" 'Kaushan Script'";
		document.getElementById('rez').style.margin='auto 0';
		document.getElementById('rez').style.textAlign='center';
	}
}
function Sz(){
	if(/(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)/.test(document.getElementById('size').value)){
		document.getElementById('rez').style.fontSize= document.getElementById('size').value;
		if(!document.getElementById('css').checked){
			document.getElementById('rez').style.fontFamily="'Kaushan Script'";
		}
	}
	else document.getElementById('rez').style.fontSize='';
}

function openOp(){
	document.getElementById('options').style.display= '';
	document.getElementsByTagName('html')[0].style.overflow='hidden';
}
function closeOp(){
	document.getElementById('options').style.display= 'none';
	document.getElementsByTagName('html')[0].style.overflow='';
}

function openAv(){
	document.getElementById('av').style.display= '';
	document.getElementsByTagName('html')[0].style.overflow='hidden';
}
function closeAv(){
	document.getElementById('av').style.display= 'none';
	document.getElementsByTagName('html')[0].style.overflow='';
}
function setLt(){
	lt.a= document.getElementById('ltA').value;
	lt.b= document.getElementById('ltB').value;
	lt.c= document.getElementById('ltC').value;
	lt.d= document.getElementById('ltD').value;
	lt.e= document.getElementById('ltE').value;
	lt.f= document.getElementById('ltF').value;
	lt.g= document.getElementById('ltG').value;
	lt.h= document.getElementById('ltH').value;
	lt.i= document.getElementById('ltI').value;
	lt.j= document.getElementById('ltJ').value;
	lt.k= document.getElementById('ltK').value;
	lt.l= document.getElementById('ltL').value;
	lt.m= document.getElementById('ltM').value;
	lt.n= document.getElementById('ltN').value;
	lt.o= document.getElementById('ltO').value;
	lt.p= document.getElementById('ltP').value;
	lt.q= document.getElementById('ltQ').value;
	lt.r= document.getElementById('ltR').value;
	lt.s= document.getElementById('ltS').value;
	lt.t= document.getElementById('ltT').value;
	lt.u= document.getElementById('ltU').value;
	lt.v= document.getElementById('ltV').value;
	lt.w= document.getElementById('ltW').value;
	lt.x= document.getElementById('ltX').value;
	lt.y= document.getElementById('ltY').value;
	lt.z= document.getElementById('ltZ').value;
}
function reSetLt(){
	document.getElementById('ltA').value= "ka";
	document.getElementById('ltB').value= "ru";
    document.getElementById('ltC').value= "mi";
    document.getElementById('ltD').value= "te";
    document.getElementById('ltE').value= "ku";
    document.getElementById('ltF').value= "lu";
    document.getElementById('ltG').value= "ji";
    document.getElementById('ltH').value= "ri";
    document.getElementById('ltI').value= "ki";
    document.getElementById('ltJ').value= "zu";
    document.getElementById('ltK').value= "me";
    document.getElementById('ltL').value= "ta";
    document.getElementById('ltM').value= "rin";
    document.getElementById('ltN').value= "to";
    document.getElementById('ltO').value= "mo";
    document.getElementById('ltP').value= "no";
    document.getElementById('ltQ').value= "ke";
    document.getElementById('ltR').value= "shi";
    document.getElementById('ltS').value= "ari";
    document.getElementById('ltT').value= "chi";
    document.getElementById('ltU').value= "do";
    document.getElementById('ltV').value= "ru";
    document.getElementById('ltW').value= "mei";
    document.getElementById('ltX').value= "na";
    document.getElementById('ltY').value= "fu";
    document.getElementById('ltZ').value= "zi";
	setLt();
}
function del(){
	if(document.getElementById('string').value!= ''){
		var r= confirm('Are you shure you want to delete your name?')
		if(r){
			document.getElementById('string').value= '';
			document.getElementById('rez').innerHTML= '<small style="font:10vh Orbitron">Name not Defined</small>';
		}
	}
	else{
		document.getElementById('dl').innerHTML= 'No Value';
		setTimeout(function(){document.getElementById('dl').innerHTML= 'Delete Name';}, 2000);
	}
}