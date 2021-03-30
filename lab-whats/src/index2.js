const axios = require("axios");

//WhatsGw/Send
const api = axios.create({
  baseURL: "https://app.whatsgw.com.br",
  headers: {"Content-Type": "application/x-www-form-urlencoded"}
})
const data = {
  apikey: "fb805ec2-896c-4fde-bffb-61686090417d",
  phone_number: "554498682502",
  contact_phone_number: "5544997681976",
  message_type: "text",
  message_body: "VAI enviada pela API 5544997681976",
}

api.post("/api/WhatsGw/Send", data)
  .then((response) => {
    console.log(response.status);
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });