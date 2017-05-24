"strict mode";
var st, i;
function act(id){
	st=document.getElementById('string').value;
	st= st.split('');
	i=0;
	while(typeof st[i]=== 'string'){
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
			case 'A':
				st[i]= 'Ka';
		       		break;
			case 'B':
				st[i]= 'Zu';
		       		break;
			case 'C':
				st[i]= 'Mi';
		       		break;
			case 'D':
				st[i]= 'Te';
		       		break;
			case 'E':
				st[i]= 'Ku';
		       		break;
			case 'F':
				st[i]= 'Lu';
		       		break;
			case 'G':
				st[i]= 'Ji';
		       		break;
			case 'H':
				st[i]= 'Ri';
		       		break;
			case 'I':
				st[i]= 'Ki';
		       		break;
			case 'J':
				st[i]= 'Zu';
		       		break;
			case 'K':
				st[i]= 'Me';
		       		break;
			case 'L':
				st[i]= 'Ta';
		       		break;
			case 'M':
				st[i]= 'Rin';
		       		break;
			case 'N':
				st[i]= 'To';
		       		break;
			case 'O':
				st[i]= 'Mo';
		       		break;
			case 'P':
				st[i]= 'No';
		       		break;
			case 'Q':
				st[i]= 'Ke';
		       		break;
			case 'R':
				st[i]= 'Shi';
		       		break;
			case 'S':
				st[i]= 'Ari';
		       		break;
			case 'T':
				st[i]= 'Chi';
		       		break;
			case 'U':
				st[i]= 'Do';
		       		break;
			case 'V':
				st[i]= 'Ru';
		       		break;
			case 'W':
				st[i]= 'Mei';
		       		break;
			case 'X':
				st[i]= 'Na';
		       		break;
			case 'Y':
				st[i]= 'Fu';
		       		break;
			case 'Z':
				st[i]= 'Zi';
		       		break;
			case ' ':
				st[i]= ' ';
		       		break;
			case "'":
			case '_':
			case '-':
			case '.':
			case ',':
				break;
			defult:
				console.log(st[i]);
				st[i]= ' ';
				break;
		}
		i++;
	}
	console.log(st);
	st= st.join('*');
	while(st.includes('*')){
		st= st.replace('*','');
	}
	if(st==''){
		st= '<small style="font:10vh Orbitron">Name not Defined</small>'
	}
	document.getElementById(id).innerHTML= st;
}