const { isAuthorized, getCommand } = require("./messageUtils");
const { deleteMessage } = require("./telegramApi");
/**
 * Check if the message contains a command to delete another message and process it
 * @param {obj} message - Telegram message
 * This message should be a reply to another message that should be deleted.
 * The handler checks if the author is authorized to perform this command
 */
module.exports = (message) => {
  if (!isAuthorized(message)) {
    return;
  }
  const command = getCommand(message);
  if (command !== "DELETE") {
    return;
  }

  console.log("COMMAND", command);
  const message_id = message?.message_id;
  const reply_to_message_id = message?.reply_to_message?.message_id;
  const chat_id = message?.chat?.id;

  // Delete the quoted message
  deleteMessage(chat_id, reply_to_message_id);
  // Delete the command message
  deleteMessage(chat_id, message_id);
};
