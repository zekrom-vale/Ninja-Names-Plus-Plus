function color(){
	var raw= /\D+/.exec(document.getElementById('color').value);
	document.getElementById('ability').innerHTML= raw;
}
function RanChar(){
	var ch= [
		'respect', 'responsibility', 'citizenship',
		'honesty', 'perseverance', 'positivity',
		'cooperation', 'courage', 'compassion'
	],
	rep= parseInt(document.getElementById('color').value);
	ch.splice(rep, 1);
	var num= document.getElementById('string').value.length;
	if(num==0){
		document.getElementById('ability').innerHTML= document.getElementById('ability2').innerHTML= 'undefined';
		return;
	}
	if(document.getElementById('ability').innerHTML== 'undefined' || document.getElementById('ability2').innerHTML== 'undefined')color();
	try{
		clear();
	} catch(err){}
	try{
		console.clear()
	} finally{}
	num%= ch.length;
	document.getElementById('ability2').innerHTML= ch[num];
	ch.splice(num, 1);
	console.log('My super duper secret ninja ability is '+ ch[ran(ch.length-1)]+ '!');
}