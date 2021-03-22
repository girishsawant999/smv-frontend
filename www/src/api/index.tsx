export type APIResponseType = {
  response: JSON;
  error: String;
  status: Number;
};

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:44444/';
const OPTIONS = {};

export const fetchApi = async (
  url: string,
  options: RequestInit = OPTIONS,
  authenticated: Boolean = false
) => {
  let apiResponse: APIResponseType = await fetch(BASE_URL.concat(url), {
    ...OPTIONS,
    ...options
  })
    .then(async (res) => {
      let response = null;
      let error = null;
      try {
        response = await res.json();
        console.log('response :>> ', response);
        return {
          response,
          error,
          status: res.status
        };
      } catch (err) {
        error = (err && err.message) || 'Something went wrong!';
        console.log('error :>> ', error);
        return {
          response,
          error,
          status: res.status
        };
      }
    })
    .then((res) => res);

  return apiResponse;
};
