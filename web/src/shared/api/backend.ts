import { API_URL } from '@/shared/config/api';
import { getRequest } from '@/shared/api/http';

export const get = (endpoint: string, params: object) => {
  return getRequest(API_URL + endpoint, params);
};
