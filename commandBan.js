const { isAuthorized, getCommand } = require("./messageUtils");
const { restrictUser, deleteMessage } = require("./telegramApi");
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
  if (command !== "BAN" && command !== "UNBAN") {
    return;
  }

  console.log("COMMAND", command);
  const user_to_ban_id = message?.reply_to_message?.from?.id;
  const chat_id = message?.chat?.id;

  // Restrict the user
  const isReadOnly = command === "BAN";
  restrictUser(chat_id, user_to_ban_id, isReadOnly);

  // Delete the command message
  const message_id = message?.message_id;
  deleteMessage(chat_id, message_id);
};
