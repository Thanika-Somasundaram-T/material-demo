const setTheme = ({ data }) => ({
	darkTheme: data,
});

const setFontValue = ({ data }) => ({
	fontValue: data,
});

const setFontStyle = ({ data }) => ({
	selection: data,
});

const actions = {
	setTheme,
	setFontValue,
	setFontStyle,
};

export default actions;
