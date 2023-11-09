import axios from 'axios';
import { RequestResult, RequestMethod } from "../models/general.models";
import { useToastContext } from '../providers/toast.provider';

const backUrl: string = 'http://192.168.1.101:4000';

const useRequest = () => {
  axios.defaults.withCredentials = true;

  //@ts-ignore
  const { showToast } = useToastContext();

  const makeRequest: RequestResult = async (url: string, body?: any, method: RequestMethod = 'get'): Promise<RequestResult> => {
    return await axios[method](backUrl + url, body)
      .then(res => {
        console.log('success')
        return res.data as any;
      })
      .catch(err => {
        console.log(err)
        showToast({
          severity: "error",
          summary: "Ошибка!",
          detail: err.message
        });
        return null;
      })
  }
  return makeRequest;
}

export default useRequest;