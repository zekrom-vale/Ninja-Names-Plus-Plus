function css(){
	var x=document.getElementById('rez');
	if(document.getElementById('css').checked){
		//Clear CSS
		with(x.style){
			fontFamily= margin= textAlign='';
		}
	}
	else{
		with(x.style){
			fontFamily=" 'Kaushan Script'";
			margin='auto 0';
			textAlign='center';
		}
	}
}
function Sz(){
	document.getElementById('rez').style.fontSize= document.getElementById('size').value;
	if(!document.getElementById('css').checked)	document.getElementById('rez').style.fontFamily="'Kaushan Script'";
}

function Open(el){
	with(document){
		getElementById(el).style.display= '';
		documentElement.style.overflow= 'hidden';
	}
}
function Close(el){
	with(document){
		getElementById(el).style.display= 'none';
		documentElement.style.overflow= '';
	}
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
	with(document){
		getElementById('ltA').value= "ka";
		getElementById('ltB').value= "ru";
		getElementById('ltC').value= "mi";
		getElementById('ltD').value= "te";
		getElementById('ltE').value= "ku";
		getElementById('ltF').value= "lu";
		getElementById('ltG').value= "ji";
		getElementById('ltH').value= "ri";
		getElementById('ltI').value= "ki";
		getElementById('ltJ').value= "zu";
		getElementById('ltK').value= "me";
		getElementById('ltL').value= "ta";
		getElementById('ltM').value= "rin";
		getElementById('ltN').value= "to";
		getElementById('ltO').value= "mo";
		getElementById('ltP').value= "no";
		getElementById('ltQ').value= "ke";
		getElementById('ltR').value= "shi";
		getElementById('ltS').value= "ari";
		getElementById('ltT').value= "chi";
		getElementById('ltU').value= "do";
		getElementById('ltV').value= "ru";
		getElementById('ltW').value= "mei";
		getElementById('ltX').value= "na";
		getElementById('ltY').value= "fu";
		getElementById('ltZ').value= "zi";
	}
	setLt();
}
function del(){
	if(document.getElementById('string').value!= ''){
		var r= confirm('Are you shure you want to delete your name?')
		if(r){
			with(document){
				getElementById('string').value= '';
				getElementById('rez').innerHTML= '<small style="font:10vh Orbitron">Name not Defined</small>';
			}
		}
	}
	else{
		document.getElementById('dl').innerHTML= 'No Value';
		setTimeout(()=>document.getElementById('dl').innerHTML= 'Delete Name', 2000);
	}
}