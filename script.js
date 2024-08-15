function init() {
    const grid = document.querySelector("#grid")
    const width = 10;
    const cellCount = width * width;
    const cells = [];


    // Creating the grid 
    function createGrid() {
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div'); 
            grid.appendChild(cell);
            cells.push(cell)
        }
    }
    createGrid();

    // Creating the list of words for the word search 
    const listOfWords = ["Galaxy", "Mystery", "Jungle", "Adventure"]

    const listOfWordsContainer = document.querySelector("#list-of-words")

    listOfWords.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.textContent = word; 
        listOfWordsContainer.appendChild(wordElement);
    });

    // Resetting the grid with the rest button 
    function resetGame() {
        grid.innerHTML = '';
        cells.length = 0; 
    }



}

init();