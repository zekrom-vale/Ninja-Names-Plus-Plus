function color(){
	document.getElementById('ability').innerHTML= document.getElementById('color').value;
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
	rep= /[0-8]/.exec(document.getElementById('color').id.toString());
	console.log(rep);
	ch= ch.splice(rep, 1);
	console.log(ch);
	var num= document.getElementById('string').value.length;
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