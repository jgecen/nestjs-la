"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var config = {
    baseURL: "https://app.whatsgw.com.br/",
    responseType: "json",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};
var handleResponse = function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    //console.log(response.headers);
    //console.log(response.config);
};
var handleError = function (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    else {
        console.log(error.message);
    }
};
var axios = axios_1["default"].create(config);
var data = {
    apikey: "fb805ec2-896c-4fde-bffb-61686090417d",
    phone_number: "554497681976",
    contact_phone_number: "554498682502",
    message_custom_id: "ID2",
    message_type: "text",
    message_body: "MENSAGEM DO SERVIDOR"
};
axios.post("/api/WhatsGw/Send", data).then(handleResponse);
