"strict mode";
var st, i, upper, C, I;
function act(id){
	C= [''];
	st=document.getElementById('string').value;
	st= st.split('');
	I= i=0;
	while(typeof st[i]=== 'string'){
		var skip= false;
		// "" not converted
		if(st[i - 1]== '"' && st[i]!= '"'){
			if(st[i + 1]== '"'){
				expt(1);
				skip= true;
			}
			else if(st[i + 2]== '"'){
				expt(2);
				skip= true;
			}
			else if(st[i + 3]== '"'){
				expt(3);
				skip= true;
			}
			else if(st[i + 4]== '"'){
				expt(4);
				skip= true;
			}
			else if(st[i + 5]== '"'){
				expt(5);
				skip= true;
			}
			else if(st[i + 6]== '"'){
				expt(6);
				skip= true;
			}
			else if(st[i + 7]== '"'){
				expt(7);
				skip= true;
			}
			else if(st[i + 8]== '"'){
				expt(8);
				skip= true;
			}
			else if(st[i + 9]== '"'){
				expt(9);
				skip= true;
			}
			else if(st[i + 10]== '"'){
				expt(10);
				skip= true;
			}
			else if(st[i + 11]== '"'){
				expt(11);
				skip= true;
			}
			else if(st[i + 12]== '"'){
				expt(12);
				skip= true;
			}
		}
		//Unicode
		if(st[i - 1]== '&'){
			if(st[i + 1]== ';' ){
				exptA(1);
				skip= true;
			}
			else if(st[i + 2]== ';' ){
				exptA(2);
				skip= true;
			}
			else if(st[i + 3]== ';' ){
				exptA(3);
				skip= true;
			}
			else if(st[i + 4]== ';' ){
				exptA(4);
				skip= true;
			}
			else if(st[i + 5]== ';' ){
				exptA(5);
				skip= true;
			}
			else if(st[i + 6]== ';' ){
				exptA(6);
				skip= true;
			}
			else if(st[i + 7]== ';' ){
				exptA(7);
				skip= true;
			}
		}
		//igrore numbers
		//if(!isNaN(st[i])){skip= true;}
		if(skip== false){
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
				case '>':
					st[i]= '&gt;'
					console.log(st[i]);
					upper= false;
					C[I]= st[i];
					I++;
					break;
				case '<':
					st[i]= '&lt;'
					console.log(st[i]);
					upper= false;
					C[I]= st[i];
					I++;
				case ' ':
				case "'":
				case '"':
				case '_':
				case '-':
				case '.':
				case ',':
				case '':
				case '&':
					upper= false;
					break;
				default:
					console.log(st[i]);
					upper= false;
					C[I]= st[i];
					I++;
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


function expt(e){
	st[i - 1]= '';
	st[i + e]= '';
	i+= e;
}
function exptA(e){
	C[I]= '&'+ st[i];
	I++;
	i+= e;
	//skip= true;//Does not work!
}



		/*Test for "n"  Failed
		var lp=1;
		else if(
			while(lp<= 20){
				if(st[i - 1]+ st[i + lp]== '""'){
					break;
				}
				lp++;
			})
			{
				
				var li=1;
				var text= st[i];
				while(li< lp){
					text+= st[i + li];
					st[i + li]= '';
				}
			st[lp]= '';
			}*/