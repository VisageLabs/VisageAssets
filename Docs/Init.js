// dont mind this shit lmao

document.querySelectorAll('.css-175oi2r.r-ymttw5.r-1l7z4oj.r-2jelyo').forEach(e => e.remove());

let style = document.createElement('style');
	
style.innerHTML = `
*::-webkit-scrollbar
{
    width: 7px;
}

*::-webkit-scrollbar-track
{
	background: transparent;
}

*::-webkit-scrollbar-thumb
{
	background-color: #525252;
	border-radius: 10px;
	border: 0px none;
 	opacity: 0.4;
  	transition: all 0.35s ease;
}

*::-webkit-scrollbar-thumb:hover
{
	opacity: 0.7;
}
`

document.head.appendChild(style);

/*
function handleContextMenu(event)
{
    event.preventDefault();
}

document.addEventListener('contextmenu', handleContextMenu);
*/

// from https://codepen.io/knyttneve/pen/YzxEBew

