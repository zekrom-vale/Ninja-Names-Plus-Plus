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
			return;
		case 1:
			document.getElementById('ability2').innerHTML=ch[1];
			return;
		case 2:
			document.getElementById('ability2').innerHTML=ch[2];
			return;
		case 3:
			document.getElementById('ability2').innerHTML=ch[3];
			return;
		case 4:
			document.getElementById('ability2').innerHTML=ch[4];
			return;
		case 5:
			document.getElementById('ability2').innerHTML=ch[5];
			return;
		case 6:
			document.getElementById('ability2').innerHTML=ch[6];
			return;
		case 7:
			document.getElementById('ability2').innerHTML=ch[7];
			return;
		default:
			//document.getElementById('ability2').innerHTML=ch[/*Value*/];
			return;
	} 
}