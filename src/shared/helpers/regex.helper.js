export const phoneRegExp = /^(\||)8[1-9][0-9]{6,9}$/;

export const slugRegExp = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const onlyPositiveNumber = /^[0-9]{1,3}$/;

export const httpsRegExp = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;

export const emailRegExp =
	'^(?=.{1,64}@)[A-Za-z0-9\\+_-]+(\\.[A-Za-z0-9\\+_-]+)*@' +
	'[^-][A-Za-z0-9\\+-]+(\\.[A-Za-z0-9\\+-]+)*(\\.[A-Za-z]{2,})$';
