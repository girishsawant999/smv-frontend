const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:44444/';
const OPTIONS = {};

export type successType<T> = {
  statusCode: number;
  data: T;
}

export type errorType = {
  statusCode: number | null;
  message: string;
}

export type APIResponseType<T> = successType<T>;

export async function fetchApi<T>(url: string, options?: RequestInit, authenticated?: Boolean) : Promise<APIResponseType<T>> {
  let res;
  try {
    res = await fetch(BASE_URL.concat(url), {
      ...OPTIONS,
      ...options
    });
    const response = await res.json();
    return {
      statusCode: res.status,
      data: response
    };
  } catch(err) {
    throw err;
    /*
    const error:string = (err && err.message) || 'Something went wrong!';
    return {
      statusCode: res ? res.status : null,
      message: error
    };
    */
  }
};