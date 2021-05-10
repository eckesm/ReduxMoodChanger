const moodButtons = document.querySelectorAll('.mood');
moodButtons.forEach(button => {
	button.addEventListener('click', function() {
		const mood = this.getAttribute('data-mood');
		store.dispatch({ type: mood });
		const state = store.getState();
		document.querySelector('#mood-display').innerText = state.payload;
	});
});

// LOAD INITIAL STATE ON LOAD
store.dispatch({ type: 'INITIAL_STATE' });
const state = store.getState();
document.querySelector('#mood-display').innerText = state.payload;
