const defaultConfig = {
  apikey: "fb805ec2-896c-4fde-bffb-61686090417d",
  phone_number: "554497681976",
  message_custom_id: "JB100",
  message_type: "text",
};

let data = {
  contact_phone_number: "554498682502",
  message_body: "Minha mensagem HA HA HA HA HA...",
};

defaultConfig.contact_phone_number = data.contact_phone_number;
defaultConfig.message_body = data.message_body;

console.log(defaultConfig);
