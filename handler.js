"use strict";

const request = require("request");
const commandHandlers = [
  require("./commandDelete"),
  require("./commandBan"),
  require("./commandUnban"),
];

module.exports.webhook = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const message = body.message;
  console.log(message);
  if (message && message.chat) {
    console.log(body.message.entities);
    const chatId = message.chat.id;
    request.post(BASE_URL).form({ text: message.text, chat_id: chatId });
  }

  // Process commands if any
  commandHandlers.forEach((handler) => handler(message));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      input: event,
    }),
  };

  return callback(null, response);
};
