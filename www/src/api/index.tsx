const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:44444/';
const OPTIONS: RequestInit = {};

const HEADERS: HeadersInit = {
	'Access-Control-Allow-Origin': '*'
};

export type successType<T> = {
	statusCode: number;
	data: T;
};

export type errorType = {
	statusCode: number | null;
	message: string;
};

export type APIResponseType<T> = successType<T>;

export async function fetchApi<T>(
	url: string,
	method?: string,
	body?: BodyInit,
	headers?: HeadersInit,
	options?: RequestInit
): Promise<APIResponseType<T>> {
	let res;
	const _options: RequestInit = {
		...OPTIONS,
		...options,
		headers: {
			...HEADERS,
			...headers
		},
		method,
		body
	};
	try {
		res = await fetch(BASE_URL.concat(url), _options);
		if (!res.ok) {
			throw new Error('Network response was not ok');
		}
		if (res.status < 200 || res.status > 299) {
			throw new Error(`Network error: ${res.statusText} (${res.status})`);
		}
		const contentType = res.headers.get('content-type');
		let response;
		if (contentType?.includes('json')) response = await res.json();
		else if (contentType?.includes('text')) response = await res.text();
		else response = await res.blob();
		return {
			statusCode: res.status,
			data: response
		};
	} catch (err) {
		throw err;
	}
}
