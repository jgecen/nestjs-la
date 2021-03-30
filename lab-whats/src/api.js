const Axios = require("axios");
const { isExportSpecifier, ModuleKind } = require("typescript");

const api = Axios.create({
    baseURL: "https://app.whatsgw.com.br",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
})
const data = {
    apikey: "fb805ec2-896c-4fde-bffb-61686090417d",
    phone_number: "554498682502",
    message_type: "text",

    contact_phone_number: "",
    message_body: ""
}

const whatsapp = {
    send: async (phone, message) => {
        data.contact_phone_number = phone;
        data.message_body = message;
        return api.post("/api/WhatsGw/Send", data)
            .then((response) => {
                return Promise.resolve({ status:response.status, ...response.data });
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }
}


module.exports = whatsapp