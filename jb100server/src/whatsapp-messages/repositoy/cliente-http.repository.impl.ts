import ClientHttpResitory from './cliente-http.repository';
import Axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosAdapter,
  Cancel,
  CancelToken,
  CancelTokenSource,
  Canceler,
} from 'axios';

export class ClientHttpResitoryImpl implements ClientHttpResitory {
  config: AxiosRequestConfig = {
    method: 'POST',

    url: 'https://app.whatsgw.com.br/api/WhatsGw/Send',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },

    data: {
      apikey: 'fb805ec2-896c-4fde-bffb-61686090417d',
      phone_number: '554497681976',
      message_custom_id: 'JB100',
      message_type: 'text',
    },
  };

  axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create(this.config);
  }

  async send({ to, message }): Promise<any> {
    this.config.data.contact_phone_number = to;
    this.config.data.message_body = message;

    axios(this.config)
      .then((response) => {
        return new Promise((resolve) => {
          resolve(JSON.stringify(response.data));
        });
      })
      .catch((error) => {
        return new Promise((resolve, reject) => {
          reject(JSON.stringify(error.data));
        });
      });
  }
}
