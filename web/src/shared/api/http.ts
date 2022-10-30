import axios, { AxiosError } from 'axios';
import { RequestError } from '@/shared/api/error';

export const getRequest = <T>(url: string, params: object = {}): Promise<T> => {
  return axios
    .get(url, {
      params,
    })
    .catch((error): RequestError | any => {
      if (error instanceof AxiosError) {
        return new RequestError(
          error.response?.status || -1,
          error.response?.statusText || 'Unknown error',
        );
      }

      throw error;
    });
};
