const request = require("request");

const token = process.env.TOKEN;
const BASE_URL = `https://api.telegram.org/bot${token}/sendMessage`;
// process.env.TOKEN
// process.env.ADMINS

const sendMessage = (chat_id, text) => {};
// const chatId = message.chat.id;
// request.post(BASE_URL).form({ text: message.text, chat_id: chatId });

const deleteMessage = (chat_id, message_id) => {
  console.log("Deleting", chat_id, message_id);
  const url = `https://api.telegram.org/bot${token}/deleteMessage`;
  request.post(url).form({
    chat_id,
    message_id,
  });
};

module.exports = {
  sendMessage,
  deleteMessage,
};
