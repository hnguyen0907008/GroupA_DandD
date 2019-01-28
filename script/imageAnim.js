(() => {
	console.log('fired');

	const theButton = document.querySelector("#buttonholder img");

	function changeHeadLine(){
		document.querySelector("h1").textContent = "Hey JS!";
		document.querySelector("p").textContent = "This is the subhead!";
	}
	// set up the puzzle pieces and boards
	// 
	//window.addEventListener("load", changeHeadLine); => changeHeadLine on window
	buttonHolder.addEventListener("click", changeHeadLine); //buttonHolder - nav id => click img => changeHeadLine function
})();
