//your code here
function removeArticle(bandName) {
 return bandName.join(',').replace(/^(a |an |the )/i, '').split(',').sort();
}
let names=removeArticle(['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']);
let ulcontainer=document.querySelector('ul');

names.map(name=>{
	let li=document.createElement('li');
	li.innerText=name;
	ulcontainer.appendChild(li);
})
