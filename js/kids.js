function color(){
	var raw= /\D+/.exec(document.getElementById('color').value);
	document.getElementById('ability').innerHTML= raw;
}
function RanChar(){
	var ch= [
		'respect',
		'responsibility',
		'citizenship',
		'honesty',
		'perseverance',
		'positivity',
		'cooperation',
		'courage',
		'compassion'
	],
	rep= parseInt(document.getElementById('color').value);
	ch.splice(rep, 1);
	var num= document.getElementById('string').value.length;
	if(num== 0){
		document.getElementById('ability').innerHTML= 'undefined';
		document.getElementById('ability2').innerHTML= 'undefined';
		return;
	}
	if(document.getElementById('ability').innerHTML== 'undefined' || document.getElementById('ability').innerHTML== 'undefined')color();
	
	num= num%8;
	switch(num){
		case 0:
			document.getElementById('ability2').innerHTML=ch[0];
			ch.splice(0, 1);
			break;
		case 1:
			document.getElementById('ability2').innerHTML=ch[1];
			ch.splice(1, 1);
			break;
		case 2:
			document.getElementById('ability2').innerHTML=ch[2];
			ch.splice(2, 1);
			break;
		case 3:
			document.getElementById('ability2').innerHTML=ch[3];
			ch.splice(3, 1);
			break;
		case 4:
			document.getElementById('ability2').innerHTML=ch[4];
			ch.splice(4, 1);
			break;
		case 5:
			document.getElementById('ability2').innerHTML=ch[5];
			ch.splice(5, 1);
			break;
		case 6:
			document.getElementById('ability2').innerHTML=ch[6];
			ch.splice(6, 1);
			break;
		case 7:
			document.getElementById('ability2').innerHTML=ch[7];
			ch.splice(7, 1);
			break;
		default:
			document.getElementById('ability2').innerHTML=ch[ran(7)];
			console.log('Error: Invalid length');
			ch.splice(Ran, 1);
			break;
	}
	console.log('My super duper secret ninja ability is '+ ch[ran(6)]+ '!');
}