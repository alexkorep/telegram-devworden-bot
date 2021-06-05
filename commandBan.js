const { isAuthorized, getCommand } = require("./messageUtils");
const { deleteMessage } = require("./telegramApi");
/**
 * Check if the message contains a command to ban the user
 * @param {obj} message - Telegram message
 * This message should be a reply to another message from the user to be banned
 * The handler checks if the author is authorized to perform this command
 */
module.exports = (message) => {
  if (!isAuthorized(message)) {
    return;
  }
  const command = getCommand(message);
  if (command !== "BAN") {
    return;
  }

  console.log("COMMAND", command);
  // const message_id = message?.message_id;
  // const user_to_ban_id = message?.reply_to_message?.from?.id;
  // const chat_id = message?.chat?.id;

  // // Delete the command message
  // deleteMessage(chat_id, message_id);
};
