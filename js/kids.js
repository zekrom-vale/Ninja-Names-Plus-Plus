function color(){
	document.getElementById('ability').innerHTML= /\D+/.exec(document.getElementById('color').value);
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
		with(document){
			getElementById('ability').innerHTML= getElementById('ability2').innerHTML= 'undefined';
		}
		return;
	}
	if(document.getElementById('ability').innerHTML== 'undefined' || document.getElementById('ability2').innerHTML== 'undefined') color();
	try{
		clear();
	}catch(e){
		try{
			console.clear()
		}finally{}
	}
	num%= ch.length;
	document.getElementById('ability2').innerHTML= ch[num];
	ch.splice(num, 1);
	console.log('My super duper secret ninja ability is '+ ch[ran(ch.length-1)]+ '!');
}