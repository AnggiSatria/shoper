export const textReplacement = (str) => {
	if (!str) return '';

	switch (str) {
		case 'CREATED':
			return 'Created';
		case 'DELETED':
			return 'Deleted';

		default:
			return str;
	}
};
