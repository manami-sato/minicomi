const back = (el)=>{
	document.querySelector(el).addEventListener("click",()=>{
		window.history.back();
	});
};