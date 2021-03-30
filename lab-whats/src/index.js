const axios = require("axios");

let config = {
  method: "post",
  url: "https://app.whatsgw.com.br/api/WhatsGw/Send",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: {
    apikey: "fb805ec2-896c-4fde-bffb-61686090417d",
    phone_number: "554498682502",
    contact_phone_number: "5544997681976",
    message_type: "text",
    message_body: "Mensagem enviada pela API 5544997681976",
  }
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
