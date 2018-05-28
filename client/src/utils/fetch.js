import { getAuthToken } from './auth';
import { AUTHENTICATION_HEADERS } from './constants';

// Create headers for HTTP request (authentication and content type)
const generateHeaders = contentType => {
	const headers = new Headers();
	headers.append('Content-Type', contentType);
	const token = getAuthToken();
	if (token) {
		headers.append(AUTHENTICATION_HEADERS, token);
	}
	return headers;
};

// Method for making API calls
const apiFetch = async (method, url, data, contentType = 'application/json') => {
	const options = {
		body: data ? JSON.stringify(data) : null,
		headers: generateHeaders(contentType),
		method,
	};
	const res = await fetch(url, options);
	const { ok, status, statusText, headers: responseHeaders } = res;
	const responseContentType = responseHeaders.get('content-type');
	if (!ok) {
		const { error } = await res.json();
		throw { error, status, statusText };
	}
	if (responseContentType && responseContentType.indexOf('application/json') !== -1) {
		return await res.json();
	}
	return ok;
};

// Methods for making different HTTP method calls
export const get = url => {
	return apiFetch('GET', `${url}`);
};

export const post = (url, data) => {
	return apiFetch('POST', `${url}`, data);
};

export const del = (url, data) => {
	return apiFetch('DELETE', `${url}`, data);
};

export const put = (url, data, contentType) => {
	return apiFetch('PUT', `${url}`, data, contentType);
};

export const shouldFetch = entity => {
	return entity.isStale && !entity.isFetching;
};