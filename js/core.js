"strict mode";
var st, i, upper, C, I, done, conf,
chk= [false, false],
delta= 'null',
lt={
	"a":"ka", "b":"ru", "c":"mi", "d":"te",
	"e":"ku", "f":"lu", "g":"ji", "h":"ri",
	"i":"ki", "j":"zu", "k":"me", "l":"ta",
	"m":"rin", "n":"to", "o":"mo", "p":"no",
	"q":"ke", "r":"shi", "s":"ari", "t":"chi",
	"u":"do", "v":"ru", "w":"mei", "x":"na",
	"y":"fu", "z":"zi"
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
	chk[1]= chk[0]; delta= st; C= ['']; I= i=0;
	st= st.split('');
	var net=-50;
	core:
	while(st.length> i && st.length> net){
		net++;
		var Y= 1;
		if(!chk[1]){
			if(st[i - 1]=='*' && st[i - 2]== '*' && st[i]!= '*'){
				while(Y< st.length - i){
					if(st[i + Y]=='*' && st[i + Y + 1]== '*'   && st[i + Y - 1]!= '<' && st[i + Y - 1]!= '>'){
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
			while(Y< st.length - i && st[Y]!= '<' && st[Y]!= '>'){
				if(st[i + Y]== '"'){
						st[i - 1]= st[i + Y]= '';
					i+= Y;
					continue core;
				}
				Y++;
			}
		}
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
						Tag(/^(head|body)/i, '/div');
						console.log(done);
						if(done=== false){
							st[i]='/' +st[i];
							done= true;
						}
					}
					else{st[i]= st[i].join('');}
					Tag(/^(html|!DOCTYPE|meta)/i, '', Y);
					Tag(/^(head|body)/i,'div');
					innerds('script');
					innerds('style');
					innerds('iframe');
					innerds('frame');
					innerds('embed');
					if(done=== true){//Must be === true
						i+= Y;
					}
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
		else upper= false;
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
			case ';':
				i++;
				continue;
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
	if(conf=== false){
		//dd sd <script> sdd</script> zbcd
		st= st.replace(/<(script|embed|iframe|frame)/gi, '<code');
		st= st.replace(/<\/(script|embed|iframe|frame)>/gi, '</code>');
	}
	document.getElementById(id).innerHTML= st;
	if(C!= ''){
		C= C.sort();
		var c= ['error'],
		z= y=0;
		for(z in C){
			if(C[z - 1]!= C[z]){
				c[y]= C[z];
				y++;
			}
			z++;
		}
		z= 0;
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
	if(st[i - 1]== s && st[i]!= s){
		while(Y< st.length - i  && st[i + Y]!= '<' && st[i + Y]!= '>'){
			if(st[i + Y]== s){
				st[i - 1]= '<'+ b+'>';
				st[i + Y]= '</'+ b+'>';
				break;
			}
		Y++;
		}
	}
}
function Tag(Reg, tg, Y){
	if(done=== false && Reg.test(st[i])){
		st[i]=tg;
		if(tg==''){
			st[i - 1]= st[i + Y]='';
		}
		done= true;
	}
}
function innerds(str){
	if(done!= true && st[i]== str){
		if(conf!= true && conf!= false && str!= 'style'){
			conf= confirm('Scripts (' +str +') may contain harmful functions, are you sure you want to proceed?')
		}
		if(conf=== true || str== 'style'){
			var textLog='',
			strP= '</'+ str+ '>',
			vI= i;
			while(st.length> vI){
				textLog+= st[vI];
				if(textLog.includes(strP)){
					i= vI;
					done= 'skip';
					break;
				}
				vI++;
			}
		}
		else{
			i++;
		}
	}
}