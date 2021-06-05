/**
 * Check if the message contains a command to delete another message and process it
 * @param {obj} message - Telegram message
 * This message should be a reply to another message that should be deleted.
 * The handler checks if the author is authorized to perform this command
 */
module.exports = (token, message) => {
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
};
