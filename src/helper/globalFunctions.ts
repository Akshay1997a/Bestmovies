
export const logOnConsole = (...arg: any) => {
	if (__DEV__)
		console.log(arg);
}

export const isNotEmpty = (data) => {
	return data !== null && data !== undefined && data !== "";
};


export const createReducer = (initialState: any, handlers: any) => {
	return function reducer(state = initialState, action: any) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};
};


export const objToFormData = (rawData: any) => {
	let formData: FormData = new FormData();
	if (rawData && rawData != null && typeof (rawData) === 'object') {
		Object.keys(rawData).map((item, index) => {
			formData.append(item, rawData[item]);
		})
	}
	console.log(`New form = ${formData}`)
	return formData;
}

