export const copyToClipboard = (str, func) => {
	if (!str) return '';

	const cb = navigator.clipboard;
	const paragraph = str;

	cb.writeText(paragraph).then(() => func);
};
