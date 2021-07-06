const setTheme = ({ data }) => ({
	darkTheme: data,
});

const setValue = ({ data }) => ({
	fontValue: data,
});

const actions = {
	setTheme,
	setValue,
};

export default actions;
