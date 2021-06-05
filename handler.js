"use strict";

const commandHandlers = [require("./commandDelete"), require("./commandBan")];

module.exports.webhook = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const message = body.message;

  // Process commands if any
  commandHandlers.forEach((handler) => handler(message));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      result: "OK",
    }),
  };

  return callback(null, response);
};
