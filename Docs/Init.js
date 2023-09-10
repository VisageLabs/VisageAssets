// dont mind this shit lmao

// document.querySelectorAll('.css-175oi2r.r-ymttw5.r-1l7z4oj.r-2jelyo').forEach(e => e.remove());

let style = document.createElement('style');
	
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

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

textarea {
	font-family: 'JetBrains Mono', Hack, Consolas, Monaco, 'Courier New', monospace;
}
`

document.head.appendChild(style);

document.querySelectorAll('.npm__react-simple-code-editor__textarea').forEach(e => e.style.fontFamily = 'JetBrains Mono');

/*
function handleContextMenu(event)
{
    event.preventDefault();
}

document.addEventListener('contextmenu', handleContextMenu);
*/

// from https://codepen.io/knyttneve/pen/YzxEBew

