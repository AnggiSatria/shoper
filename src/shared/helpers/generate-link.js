export const generateLink = (number, message) => {
	const text = message?.replaceAll(' ', '%20');

	const url = 'https://api.whatsapp.com';
	const end_url = `${url}/send?phone=${number}&text=${text}`;

	return end_url;
};
