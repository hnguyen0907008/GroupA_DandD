(() => {
	console.log('fired');

	//set up the puzzle pieces and boards
	//need a reference to each piece that we want to create
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"]; //array
	const theButton = document.querySelector("#buttonholder img");


	//SELECT ELEMENTS
	//get a reference to the drag side 
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");
	//get a reference to the buttons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img")

	let dropZones = document.querySelectorAll('.dropZones');

	//FUNCTION
	//function that generate images
	//pictureIndex: images folder
	function createPuzzlePieces(pictureIndex){
		// genenate images => make 4 (array)
		// loop through the images ref and generate 1 for each - piece
		// variable: img
		// dragganble
		// on right screen: set up div area to drag img into
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable="true" id="peace${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;

		initDrag();
	}

	//draggandDrop go here

	function initDrag(){
		piecesBoards.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				//e.preventDefault();
				console.log('draggin...')

				//set: reference to the id of the image - grab the id
				e.dataTransfer.setData('text/plain', this.id);
			});
		});
	}

	//handle dragover and drop
	dropZones.forEach(zone => {
		zone.addEventListener("draggover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!")
		});

		zone.addEventListener("drop", function(e){
			e.preventDefault();
			console.log("you dropped sumpin on me");

			//get image - dropping
			let piece = e.dataTransfer.getData('text/plain')
			e.target.appendChild(document. querySelector(`#${piece}`));
		});
	})

	function resetPuzzlePieces(){
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);
	}

	//change current puzzle into other puzzles
	function resetPuzzlePieces(){
		//clean the puzzle pieces div
		piecesBoard.innerHTML = "";
		//this: the picture we click on
		createPuzzlePieces(this.dataset.puzzleref);
	}


	//event handling => Things happen: selector - function
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces))
	//CALL FUNCTION
	createPuzzlePieces(0); //0: piece of image


})();