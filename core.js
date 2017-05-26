"strict mode";
var st, i, upper, C, I;
function act(id){
	C= [''];
	st=document.getElementById('string').value;
	st= st.split('');
	I= i=0;
	core:
	while(st.length> i){
		//typeof st[i]=== 'string'
		var Y= 1;
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
		//Avoid('"', '"', function(){st[i - 1]= st[i + Y]= '';});
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
		if(st[i - 1]== '%' &&  st[i]== '"'){
			st[i - 1]= '';
			st[i]= "''"
			i++;
			continue core;
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
					i+= Y;
					continue core;
				}
				Y++;
			}
		}
		//igrore numbers
		//if(!isNaN(st[i])){skip= true;}
		if (st[i]== st[i].toUpperCase()){
			upper= true;
			st[i]= st[i].toLowerCase();
		}
		else{upper= false;}
		switch(st[i]){
			case 'a':
				st[i]= 'ka';
					break;
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
				upper= false;
				break;
			default:
				upper= false;
				C[I]= st[i];
				I++;
				break;
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
/*function Avoid(comp, r, fn){
	if(st[i - 1]== comp && st[i]!= comp){
		var Y= 1;
		while(Y< st.length - i){
			if(st[i + Y]== r){
					fn();
				i+= Y;
				skip= true;
				break;
			}
			Y++;
		}
	}
}*/

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