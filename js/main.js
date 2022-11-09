const playBtnEl = document.getElementById('playBtn');
const gameMode = document.getElementById('modeSelect');

playBtnEl.addEventListener('click', function () {
	createGrid(gameMode.value);
});

/**
 * creates a grid of n x n tiles
 * @param {number} tilesPerRow tiles that you want in each row
 */

function createGrid(tilesPerRow) {
	const boardEl = document.querySelector('.board');
	const boardSize = Math.pow(tilesPerRow, 2);

	boardEl.innerHTML = '';

	for (let i = 0; i < boardSize; i++) {
		const tile = document.createElement('div');
		tile.classList = 'tile';
		tile.style.flexBasis = `calc(100% / ${tilesPerRow})`;
		tile.innerText = i + 1;

		boardEl.append(tile);

		tile.addEventListener('click', function () {
			console.log('cliccato il numero ' + this.textContent);
			this.classList.add('clicked');
		});
	}
}
