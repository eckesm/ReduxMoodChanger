const INITIAL_STATE = { payload: '╮(╯_╰)╭', description: 'idk', url: 'https://www.jemoticons.com/en/idk/' };
const moodReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INITIAL_STATE':
			return INITIAL_STATE;
		case 'FLIRTY':
			return { ...state, payload: '^.~', description: 'flirty', url: 'https://www.jemoticons.com/en/flirty/' };
		case 'FACEPALM':
			return { ...state, payload: '(－‸ლ)', description: 'facepalm', url: 'https://www.jemoticons.com/en/facepalm/' };
		case 'BLUSHING':
			return { ...state, payload: '(⺣ﻌ⺣)', description: 'blushing', url: 'https://www.jemoticons.com/en/blushing/' };
		case 'ZZZ':
			return { ...state, payload: '(－_－) zzZ', description: 'sleepy', url: 'https://www.jemoticons.com/en/zzz/' };
		case 'SUSPICIOUS':
			return {
				...state,
				payload        : '(→_→)',
				description : 'suspicious',
				url         : 'https://www.jemoticons.com/en/suspicious/'
			};
		default:
			return state;
	}
};

const store = Redux.createStore(moodReducer);
