const token = process.env.TOKEN;
const BASE_URL = `https://api.telegram.org/bot${token}/sendMessage`;
// process.env.TOKEN
// process.env.ADMINS

const sendMessage = (chat_id, text) => {};
const chatId = message.chat.id;
request.post(BASE_URL).form({ text: message.text, chat_id: chatId });

module.exports = {
  sendMessage,
};
