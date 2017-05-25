"strict mode";
var st, i, upper, C;
function act(id){
	C= '';
	st=document.getElementById('string').value;
	st= st.split('');
	i=0;
	while(typeof st[i]=== 'string'){
		if (st[i]== st[i].toUpperCase()){upper= true; st[i]= st[i].toLowerCase();}
		else{upper= false;}
		// on "n" where n is a character, it is NOT converted!
		if(st[i - 1]+ st[i + 1]== '""'){
			st[i - 1]= st[i + 1]= '';
		}
		else if(st[i - 1]== '&' && st[i + 2]== ';' ){}
		else if(st[i - 2]== '&' && st[i + 1]== ';' ){}
		
		else if(st[i - 1]== '&' && st[i + 3]== ';' ){}
		else if(st[i - 2]== '&' && st[i + 2]== ';' ){}
		else if(st[i - 3]== '&' && st[i + 1]== ';' ){}
		
		else if(st[i - 1]== '&' && st[i + 4]== ';' ){}
		else if(st[i - 2]== '&' && st[i + 3]== ';' ){}
		else if(st[i - 3]== '&' && st[i + 2]== ';' ){}
		else if(st[i - 4]== '&' && st[i + 1]== ';' ){}
		
		/*   6-a=b
		var a=1,
		b;
		while(a< 6){
			b= 6-a;
			else if(st[i - a]== '&' && st[i + b]== ';' ){}
			a++;
		}*/
		else if(st[i - 1]== '&' && st[i + 5]== ';' ){}
		else if(st[i - 2]== '&' && st[i + 4]== ';' ){}
		else if(st[i - 3]== '&' && st[i + 3]== ';' ){}
		else if(st[i - 4]== '&' && st[i + 2]== ';' ){}
		else if(st[i - 5]== '&' && st[i + 1]== ';' ){}
		
		else if(st[i - 1]== '&' && st[i + 6]== ';' ){}
		else if(st[i - 2]== '&' && st[i + 5]== ';' ){}
		else if(st[i - 3]== '&' && st[i + 4]== ';' ){}
		else if(st[i - 4]== '&' && st[i + 3]== ';' ){}
		else if(st[i - 5]== '&' && st[i + 2]== ';' ){}
		else if(st[i - 6]== '&' && st[i + 1]== ';' ){}
		
		else{
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
			case '>':
				st[i]= '&gt;'
				break;
			case '<':
				st[i]= '&lt;'
			case ' ':
			case "'":
			case '"':
			case '_':
			case '-':
			case '.':
			case ',':
			case '':
				upper= false;
				break;
			default:
				upper= false;
				C+= st[i];
				break;
		}
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
	if(st== '' || null || undefined){
		st= '<small style="font:10vh Orbitron">Name not Defined</small>'
	}
	document.getElementById(id).innerHTML= st;
	if(C!= ''){
		C= C.split('');
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