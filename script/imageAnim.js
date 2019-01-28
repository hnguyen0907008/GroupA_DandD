(() => {
	console.log('fired');

	//set up the puzzle pieces and boards
	//need a reference to each piece that we want to create
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"]; //array

	//SELECT ELEMENTS
	//get a reference to the drag side 
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");
	//get a reference to the buttons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img")

	//FUNCTION
	//function that generate images
	//pictureIndex: images folder
	function createPuzzlePieces(pictureIndex){
		// genenate images => make 4 (array)
		// loop through the images ref and generate 1 for each - piece
		// variable: img
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="peace${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});
	}

	//change current puzzle into other puzzles
	function resetPuzzlePieces(){
		//clean the puzzle pieces div
		piecesBoard.innerHTML = ""
		//this: the picture we click on
		createPuzzlePieces(this.dataset.puzzleref);
	}


	//event handling => Things happen: selector - function
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces))
	//CALL FUNCTION
	createPuzzlePieces(0); //0: piece of image


})();
	