"use strict";

const request = require("request");

module.exports.webhook = (event, context, callback) => {
  const token = "1488172734:AAEZxwnXqJgO2VH9zhgHTnmLuCm0BWATS0A";
  const BASE_URL = `https://api.telegram.org/bot${token}/sendMessage`;

  const body = JSON.parse(event.body);
  const message = body.message;
  console.log(message);
  if (message && message.chat) {
    console.log(body.message.entities);
    const chatId = message.chat.id;
    request.post(BASE_URL).form({ text: message.text, chat_id: chatId });
  }

  const reply_to_message_id = message?.reply_to_message?.message_id;
  const chat_id = message?.chat?.id;
  if (message?.text === "@DevwordenBot delete") {
    console.log("Deleting", chat_id, reply_to_message_id);
    const url = `https://api.telegram.org/bot${token}/deleteMessage`;
    request.post(url).form({
      chat_id,
      message_id: reply_to_message_id,
    });
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
    }),
  };

  return callback(null, response);
};
