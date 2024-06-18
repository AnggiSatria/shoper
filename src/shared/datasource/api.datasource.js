import axios from 'axios';

import _ from 'lodash';
import dayjs from 'dayjs';

import { coreConfig } from '@shared/config/core.config';
import { DatasourceQuery, DatasourceResponse } from '@shared/datasource/datasource.factory';
import localStorage from '@shared/datasource/localstorage.datasource';

export const getHeader = (useAuth, isFormData, extraHeader) => {
	let forgeHeader = {};

	if (useAuth) {
		forgeHeader = {
			...forgeHeader,
			...{
				Authorization: `Bearer ${localStorage.getData(coreConfig.APP.AUTH_STORAGE)}`,
			},
		};
	}

	if (isFormData) {
		forgeHeader = { ...forgeHeader, ...{ 'Content-Type': 'multipart/form-data' } };
	}

	if (extraHeader) {
		forgeHeader = { ...forgeHeader, ...extraHeader };
	}

	return forgeHeader;
};

export const parseQuery = (param) => {
	const forgequery = [];

	if (param.currentPage) {
		forgequery.push('page=' + param.currentPage);
	}
	if (param.perPage) {
		forgequery.push('size=' + param.perPage);
	}
	if (param.sort) {
		if (param.sort?.by) {
			let remappedSort = '';
			remappedSort += param.sort?.by;
			forgequery.push('sort_by=' + remappedSort);
		}
		if (param.sort?.direction) {
			let remappedSort = '';
			remappedSort += param.sort.direction === 'ascend' ? 'asc' : 'desc';
			forgequery.push('sort_dir=' + remappedSort);
		}
	}
	if (param.search) {
		forgequery.push('q=' + param.search);
	}
	if (param.menu_type_id) {
		forgequery.push('menu_type_id=' + param.menu_type_id);
	}
	if (param.menu_type) {
		forgequery.push('menu_type=' + param.menu_type);
	}
	if (param.section_type) {
		forgequery.push('section_type=' + param.section_type);
	}
	if (param.filter) {
		if (param.filter.length > 0) {
			const remappedFilter = [];

			for (let index = 0; index < param.filter.length; index++) {
				if (typeof param.filter[index].key !== undefined) {
					const vValue = param.filter[index].value || [];
					if (param.filter[index].value && vValue.length > 0) {
						remappedFilter.push(param.filter[index].key + '=' + param.filter[index].value);
					}
				}
			}

			if (remappedFilter.length > 0) {
				forgequery.push(remappedFilter.join('&'));
			}
		}
	}
	if (param.date) {
		if (param.date.start) {
			const startDate = dayjs(param.date.start).format('YYYY-MM-DD 00:00:00');

			forgequery.push('start_date=' + dayjs(startDate));
		}
		if (param.date.end) {
			const endDate = dayjs(param.date.end).format('YYYY-MM-DD 23:59:59');

			forgequery.push('end_date=' + dayjs(endDate));
		}
	}

	return forgequery.length > 0 ? '?' + _.join(forgequery, '&') : '';
};

export const baseHTTP = async (method = 'get', version, url, query, body, useAuth, isFormData, extraHeader) => {
	query = new DatasourceQuery(query);
	const forgeResponse = new DatasourceResponse();
	try {
		if (method === 'post') {
			const dt = await axios.post(coreConfig.API.BASE_URL + version + url + parseQuery(query), body, {
				headers: getHeader(useAuth, isFormData, extraHeader),
			});

			forgeResponse.data = dt.data.data;
			forgeResponse.meta = query;
		}
		if (method === 'get') {
			const dt = await axios.get(coreConfig.API.BASE_URL + version + url + parseQuery(query), {
				headers: getHeader(useAuth, isFormData, extraHeader),
			});

			forgeResponse.data = dt.data.data;
			forgeResponse.meta = _.merge(query, { total: dt.data.meta?.total_data, perPage: dt.data.meta?.size });
		}
		if (method === 'delete') {
			const dt = await axios.delete(coreConfig.API.BASE_URL + version + url + parseQuery(query), {
				headers: getHeader(useAuth, isFormData, extraHeader),
			});

			forgeResponse.data = dt.data.data;
			forgeResponse.meta = _.merge(query, dt.data.meta?.total_data);
		}
		if (method === 'put') {
			const dt = await axios.put(coreConfig.API.BASE_URL + version + url + parseQuery(query), body, {
				headers: getHeader(useAuth, isFormData, extraHeader),
			});

			forgeResponse.data = dt.data.data;
			forgeResponse.meta = query;
		}
		if (method === 'patch') {
			const dt = await axios.patch(coreConfig.API.BASE_URL + version + url + parseQuery(query), body, {
				headers: getHeader(useAuth, isFormData, extraHeader),
			});

			forgeResponse.data = dt.data.data;
			forgeResponse.meta = query;
		}
		const objectResponse = JSON.parse(JSON.stringify(forgeResponse));
		objectResponse.data = forgeResponse.data;
		return objectResponse;
	} catch (error) {
		const forgeError = new DatasourceResponse();

		switch (error?.response?.status) {
			case 400:
				forgeError.message = 'Oops, A Validation Error Occurred';
				forgeError.description = error?.response?.data?.message || '';
				break;
			case 409:
				forgeError.message = 'Oops, There is Duplication of Data';
				forgeError.description = error?.response?.data?.message || '';
				break;
			case 404:
				forgeError.message = 'Oops, Resource Not Found';
				forgeError.description = error?.response?.data?.message || '';
				break;
			case 401:
				forgeError.message = 'Oops, You are not logged into the system';
				forgeError.description = error?.response?.data?.message || '';
				window.dispatchEvent(new Event('APP_AUTH_UNAUTHORIZED'));
				break;
			case 403:
				forgeError.message = 'Oops, Your Role Does Not Have Access. Access denied!';
				forgeError.description = error?.response?.data?.message || '';
				break;
			case 500:
				forgeError.message = 'Oops, An Error Occurred On The Server';
				forgeError.description = error?.response?.data?.message || '';
				break;
			default:
				forgeError.message = 'Unknown Error';
				break;
		}

		throw forgeError;
	}
};

export const POST = async (version, url, body, useAuth) => {
	return baseHTTP('post', version, url, {}, body, useAuth, false, {});
};

export const GET = async (version, url, query, body, useAuth) => {
	return baseHTTP('get', version, url, query, body, useAuth, false, {});
};

export const PUT = async (version, url, body, useAuth) => {
	return baseHTTP('put', version, url, {}, body, useAuth, false, {});
};

export const PATCH = async (version, url, body, useAuth) => {
	return baseHTTP('patch', version, url, {}, body, useAuth);
};

export const DELETE = async (version, url, useAuth) => {
	return baseHTTP('delete', version, url, {}, {}, useAuth, false, {});
};

export const UPLOAD = async (version, url, payload, useAuth) => {
	const formData = new FormData();

	if (payload.promotion_id !== null) {
		formData.append('promotion_id', payload.promotion_id);
	}
	formData.append('object_purpose', payload.object_purpose);
	formData.append('object_file', payload.object_file);

	return baseHTTP('post', version, url, {}, formData, useAuth, true);
};
