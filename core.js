function replace(id){
	var st=document.getElementById('string').value;
	st= st.split('')
	while(typeof st[i]=== 'string'){
		i++
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
			case ' ':
				st[i]= ' ';
		       		break;
			defult:
				console.log(st[i]);
				st[i]= ' ';
				break;
		}
		
	}
	st= st.toString;
	document.getElementbyId(id).innerHTML= st;
}
