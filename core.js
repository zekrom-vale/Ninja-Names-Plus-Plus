"strict mode";
var st, i, upper, C, I, done, chk= [false, false],
delta= 'null';
//window.addEventListener("beforeunload", function(event){event.returnValue= "";});
function act(id, event){
	st=document.getElementById('string').value;
	if(event.keyCode== 46 && event.shiftKey && st!= ''){
		var r= confirm('Are you shure you want to delete your name?')
		if(r){
			st= document.getElementById('string').value= '';
		}
	}
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
			case 'a':// on a
				st[i]= 'ka';//change it too ka
					break;//end
			case 'b':
				st[i]= 'zu';
					break;
			case 'c':
				st[i]= 'mi';
					break;
			case 'd':
				st[i]= 'te';
					break;
			case 'e':
				st[i]= 'ku';
					break;
			case 'f':
				st[i]= 'lu';
					break;
			case 'g':
				st[i]= 'ji';
					break;
			case 'h':
				st[i]= 'ri';
					break;
			case 'i':
				st[i]= 'ki';
					break;
			case 'j':
				st[i]= 'zu';
					break;
			case 'k':
				st[i]= 'me';
					break;
			case 'l':
				st[i]= 'ta';
					break;
			case 'm':
				st[i]= 'rin';
					break;
			case 'n':
				st[i]= 'to';
					break;
			case 'o':
				st[i]= 'mo';
					break;
			case 'p':
				st[i]= 'no';
					break;
			case 'q':
				st[i]= 'ke';
					break;
			case 'r':
				st[i]= 'shi';
					break;
			case 's':
				st[i]= 'ari';
					break;
			case 't':
				st[i]= 'chi';
					break;
			case 'u':
				st[i]= 'do';
					break;
			case 'v':
				st[i]= 'ru';
					break;
			case 'w':
				st[i]= 'mei';
					break;
			case 'x':
				st[i]= 'na';
					break;
			case 'y':
				st[i]= 'fu';
					break;
			case 'z':
				st[i]= 'zi';
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
function zero(){
	if(document.getElementById('optCen').style.display!=''){
		document.getElementById('optCen').style.display= '';
		document.getElementById('options').style.height= '200px';
		document.getElementById('options').style.overflowY= 'scroll';
		document.getElementById('hide').innerHTML= 'hide';
	}
	else{
		document.getElementById('options').style.height= '';
		document.getElementById('options').style.overflowY= '';
		document.getElementById('optCen').style.display= 'none';
		document.getElementById('hide').innerHTML= 'show';	
	}
}