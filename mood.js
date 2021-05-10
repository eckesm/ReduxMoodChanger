const moodButtons = document.querySelectorAll('.mood');
const face = document.querySelector('#face');

moodButtons.forEach(button => {
	button.addEventListener('click', function() {
		const mood = this.getAttribute('data-mood');
		store.dispatch({ type: mood });
		face.innerText = store.getState().payload;
	});
});

// LOAD INITIAL STATE ON LOAD
// store.dispatch({ type: 'INITIAL_STATE' });
// const state = store.getState();
// document.querySelector('#face').innerText = state.payload;

function renderFace() {
	face.innerText = store.getState().payload;
}

renderFace();
store.subscribe(renderFace);
