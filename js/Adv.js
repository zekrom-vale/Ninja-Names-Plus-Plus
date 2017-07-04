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
	lt={
		'a': LT('A'), 'b': LT('B'), 'c': LT('C'),
		'd': LT('D'), 'e': LT('E'), 'f': LT('F'),
		'g': LT('G'), 'h': LT('H'), 'i': LT('I'),
		'j': LT('J'), 'k': LT('K'), 'l': LT('L'),
		'm': LT('M'), 'n': LT('N'), 'o': LT('O'),
		'p': LT('P'), 'q': LT('Q'), 'r': LT('R'),
		's': LT('S'), 't': LT('T'), 'u': LT('U'),
		'v': LT('V'), 'w': LT('W'), 'x': LT('X'),
		'y': LT('Y'), 'z': LT('Z')
	}
}
function LT(s, def=true){
	var val= document.getElementById('lt'+ s);
	if(def== true) return val.value;
	else return val;
}
function reSetLt(){
	lt.a= LT('A', 0).value= "ka";
	lt.b= LT('B', 0).value= "ru";
	lt.c= LT('C', 0).value= "mi";
	lt.d= LT('D', 0).value= "te";
	lt.e= LT('E', 0).value= "ku";
	lt.f= LT('F', 0).value= "lu";
	lt.g= LT('G', 0).value= "ji";
	lt.h= LT('H', 0).value= "ri";
	lt.i= LT('I', 0).value= "ki";
	lt.j= LT('J', 0).value= "zu";
	lt.k= LT('K', 0).value= "me";
	lt.l= LT('L', 0).value= "ta";
	lt.m= LT('M', 0).value= "rin";
	lt.n= LT('N', 0).value= "to";
	lt.o= LT('O', 0).value= "mo";
	lt.p= LT('P', 0).value= "no";
	lt.q= LT('Q', 0).value= "ke";
	lt.r= LT('R', 0).value= "shi";
	lt.s= LT('S', 0).value= "ari";
	lt.t= LT('T', 0).value= "chi";
	lt.u= LT('U', 0).value= "do";
	lt.v= LT('V', 0).value= "ru";
	lt.w= LT('W', 0).value= "mei";
	lt.x= LT('X', 0).value= "na";
	lt.y= LT('Y', 0).value= "fu";
	lt.z= LT('Z', 0).value= "zi";
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