"strict mode";
var st, i, upper, C, I, done, chk= [false, false],
delta= 'null';
var lt={
	"a":"ka",
	"b":"ru",
	"c":"mi",
	"d":"te",
	"e":"ku",
	"f":"lu",
	"g":"ji",
	"h":"ri",
	"i":"ki",
	"j":"zu",
	"k":"me",
	"l":"ta",
	"m":"rin",
	"n":"to",
	"o":"mo",
	"p":"no",
	"q":"ke",
	"r":"shi",
	"s":"ari",
	"t":"chi",
	"u":"do",
	"v":"ru",
	"w":"mei",
	"x":"na",
	"y":"fu",
	"z":"zi"
}
//window.addEventListener("beforeunload", function(event){event.returnValue= "";});
function act(id, event){
	st=document.getElementById('string').value;
	chk[0]= document.getElementById('io').checked;
	if(	(
			st== delta &&
			chk[0]== chk[1]
		)||
		(
			chk[0]!= chk[1] &&(
				st.match(/\W/g)== ' ' ||
				st.match(/\W/g)== null
			)
		)
	){
		chk[1]= chk[0];
		return;
	}
	chk[1]= chk[0];
	delta= st;
	C= [''];
	st= st.split('');
	I= i=0;
	core:
	while(st.length> i){
		var Y= 1;
		if(!chk[1]){
			if(st[i - 1]=='*' && st[i - 2]== '*' && st[i]!= '*'){
				while(Y< st.length - i){
					if(st[i + Y]=='*' && st[i + Y + 1]== '*'){
						st[i - 1]= '<b>';
						st[i + Y]= '</b>';
						st[i - 2]= st[i + Y + 1]= '';
						break;
					}
				Y++;
				}
			}
			mark('`', 'mark', Y);
			mark('~', 'em', Y);
			mark('_', 'u', Y);
			mark('^', 'sup', Y);
			mark('$', 'sub', Y);
		}
		if(st[i - 1]== '%' &&  st[i]== '"'){
			st[i - 1]= '';
			st[i]= "''";
			i++;
			continue core;
		}
		if(st[i - 1]== '"' && st[i]!= '"'){
			while(Y< st.length - i){
				if(st[i + Y]== '"'){
						st[i - 1]= st[i + Y]= '';
					i+= Y;
					continue core;
				}
				Y++;
			}
		}
		//Unicode
		if(st[i - 1]== '&'){
			while(Y< st.length - i){
				if(st[i + Y]== ';'){
					i+= Y;
					continue core;
				}
				Y++;
			}
		}
		if(st[i - 1]== '<' ){
			while(Y< st.length - i){
				if(st[i + Y]== '>'){
					var X= 1;
					done= false;
					while(X < Y){
						st[i]+=st[i + X]
						st[i + X]= '';
						X++;
					}
					st[i]=st[i].split('');
					if(st[i][0]== '/'){
						st[i][0]= '';
						st[i]= st[i].join('');
						Tag(/^(html)/i, '', Y);
						//Remove <>
						Tag(/^(head|body)/i, '/div');
						//Tag(/(script)/i, '/code');
						console.log(done);
						if(done=== false){
							st[i]='/' +st[i];
							done= true;
						}
					}
					else{st[i]= st[i].join('');}
					Tag(/^(html|!DOCTYPE|meta)/i, '', Y);
					Tag(/^(head|body)/i,'div');
					//Tag(/^(script)/i, 'code');
					i+= Y;
					continue core;
				}
				Y++;
			}
		}
		//if(!isNaN(st[i])){skip= true;}  //igrore numbers
		if (st[i]== st[i].toUpperCase() && /\w/.test(st[i])){
			upper= true;
			st[i]= st[i].toLowerCase();
		}
		switch(st[i]){
			case 'a':
				st[i]= lt.a;
					break;
			case 'b':
				st[i]= lt.b;
					break;
			case 'c':
				st[i]= lt.c;
					break;
			case 'd':
				st[i]= lt.d;
					break;
			case 'e':
				st[i]= lt.e;
					break;
			case 'f':
				st[i]= lt.f;
					break;
			case 'g':
				st[i]= lt.g;
					break;
			case 'h':
				st[i]= lt.h;
					break;
			case 'i':
				st[i]= lt.i;
					break;
			case 'j':
				st[i]= lt.j;
					break;
			case 'k':
				st[i]= lt.k;
					break;
			case 'l':
				st[i]= lt.l;
					break;
			case 'm':
				st[i]= lt.m;
					break;
			case 'n':
				st[i]= lt.n;
					break;
			case 'o':
				st[i]= lt.o;
					break;
			case 'p':
				st[i]= lt.p;
					break;
			case 'q':
				st[i]= lt.q;
					break;
			case 'r':
				st[i]= lt.r;
					break;
			case 's':
				st[i]= lt.s;
					break;
			case 't':
				st[i]= lt.t;
					break;
			case 'u':
				st[i]= lt.u;
					break;
			case 'v':
				st[i]= lt.v;
					break;
			case 'w':
				st[i]= lt.w;
					break;
			case 'x':
				st[i]= lt.x;
					break;
			case 'y':
				st[i]= lt.y;
					break;
			case 'z':
				st[i]= lt.z;
					break;
			case "(":
			case ")":
			case ' ':
			case "'":
			case `"`:
			case '`':
			case '_':
			case '-':
			case '':
			case '&':
				i++;//part of continue (required! DO NOT REMOVE!)
				continue;//continue on to next character
			case undefined:
			case null:
				if(st[i]=== null){H= 'Null';}
				else{H= 'Undefined';}
				console.log('"'+ H+ ' Value" Error');
				C[I]= H;
				I++;
				i++;
				continue;
			default:
				C[I]= st[i];
				I++;
				i++;
				continue;
		}
		if(upper== true){
			st[i]= st[i].split('');
			st[i][0]= st[i][0].toUpperCase();
			st[i]= st[i].join('');
		}
		i++;
	}
	console.log(st);
	st= st.join('');
	if(st== ''){
		st= '<small style="font:10vh Orbitron">Name not Defined</small>'
	}
	document.getElementById(id).innerHTML= st;
	if(C!= '' || st.includes('&')){
		C= C.sort();
		var c= ['error'],
		z= y=0;
		for(z in C){
			//Remove duplicates
			if(C[z - 1]!= C[z]){
				c[y]= C[z];
				y++;
			}
			z++;
		}
		z= 0;
		//Encase in '""'
		for(z in c){
			c[z]= '"'+ c[z]+ '"';
		}
		c= c.join(', ');
		document.getElementById('odd').innerHTML= 'Problem characters: ['+ c+ ']';
	}
	else{document.getElementById('odd').innerHTML= 'No Problem characters Detected';}
	c= C= y= z= st= i= upper= null;
}
function mark(s, b, Y){
	if(st[i - 1]==s && st[i]!= s){
		while(Y< st.length - i){
			if(st[i + Y]==s){
				st[i - 1]= '<'+ b+'>';
				st[i + Y]= '</'+ b+'>';
				break;
			}
		Y++;
		}
	}
}
function Tag(Reg,tg, Y){
	if(done=== false && Reg.test(st[i])){
		st[i]=tg;
		if(tg==''){
			st[i - 1]= st[i + Y]='';
		}
		done= true;
	}
}


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
	else{
		document.getElementById('rez').style.fontSize='';
	}
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