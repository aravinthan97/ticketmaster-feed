'use server';

import { FetchMethod, ResponseData } from "../models/shared-models";


/**
 *
 * @param url Api endpoint
 * @param method 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS
 * @param options {queryParams :Record}
 * @returns
 */



export const coreFetch = async (url: RequestInfo, method: FetchMethod, options: { queryParams?: Record<string, string> }): Promise<ResponseData> => {
  try {
    //pre-processing here if needed
    // Build the URL with query parameters
    if (options.queryParams) {
      const queryString = new URLSearchParams(options.queryParams).toString();
      url += `?${queryString}`;
    }
    console.log(url,"test")
    // Perform the fetch request
    const response = await fetch(url, {
      method,
      headers: {
          'Content-Type': 'application/json',
      },
      cache: 'no-store',
    //  body: options.requestBody ? JSON.stringify(options.requestBody) : void 0
    });

    // Check the status code of the response
    console.log()
    if (!response.ok) {
      const err = await response.json();
      console.log("API-ERROR: ", err);
      return {error: `API-ERROR: ${err && err.status ? err.status : response.status} - ${err && err.message ? err.message : response.statusText}`, status: response.status};
      // Handle different status codes
      // if (response.status === 404) {
      //   // throw new Error('Resource not found');
      //   NextResponse.json({ error: response.statusText }, { status: response.status })
      // } else if (response.status === 401) {
      //     // throw new Error('Unauthorized access');
      //     NextResponse.json({ error: response.statusText }, { status: response.status })
      // } else if (response.status === 500) {
      //   // throw new Error('Internal server error');
      //   NextResponse.json({ error: response.statusText }, { status: response.status })
      // } else {

      //   // throw new Error('Failed to fetch data');
      //   NextResponse.json({ error: response.statusText }, { status: response.status })
      // }
    }


    // Post-processing here as needed
    const data = await response.json();
    console.log(data);

    // Parse and return the payload as required
    if(data.payload){
      return { payload: data.payload, status: data.status };
    }

    if(data.message){
      return { payload: { message: data.message }, status: data.status };
    }

    return { payload: data.payload ? data.payload : data, status: data?.status ? data.status : response.status};
  } catch (error) {
    console.error(error);
    return {error: 'FE-ERROR-500 : Internal Server error from FE Server', status: 500 }; // Return an internal server error response
  }
};
