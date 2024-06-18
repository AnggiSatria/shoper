const setData = (store, data) => {
	localStorage.setItem(store, JSON.stringify(data));
	return data;
};

const getData = (store) => {
	const data = localStorage.getItem(store);

	try {
		return JSON.parse(data);
	} catch (error) {
		return false;
	}
};

const removeData = (store) => {
	localStorage.removeItem(store);
};

export default { setData, getData, removeData };
