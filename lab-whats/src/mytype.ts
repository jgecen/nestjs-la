import Axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://app.whatsgw.com.br/",
  responseType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const handleResponse = (response: AxiosResponse) => {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  //console.log(response.headers);
  //console.log(response.config);
};

const handleError = (error: AxiosError) => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else {
    console.log(error.message);
  }
};

const axios: AxiosInstance = Axios.create(config);

let data = {
  apikey: "fb805ec2-896c-4fde-bffb-61686090417d",
  phone_number: "554497681976",
  contact_phone_number: "554498682502",
  message_custom_id: "ID2",
  message_type: "text",
  message_body: "MENSAGEM DO SERVIDOR",
};

axios.post("/api/WhatsGw/Send", data)
  .then(handleResponse)
  .catch(handleError)
