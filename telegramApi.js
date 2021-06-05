const request = require("request");

const token = process.env.TOKEN;
const BASE_URL = `https://api.telegram.org/bot${token}/sendMessage`;

// const sendMessage = (chat_id, text) => {};
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

const restrictUser = (chat_id, user_id, isReadOnly) => {
  const allowed = !isReadOnly;
  const permissions = {
    can_send_messages: allowed,
    can_send_media_messages: allowed,
    can_send_polls: allowed,
    can_send_other_messages: allowed,
    can_add_web_page_previews: allowed,
    can_change_info: allowed,
    can_invite_users: allowed,
    can_pin_messages: allowed,
  };
  const url = `https://api.telegram.org/bot${token}/restrictChatMember`;
  request.post(url).form({
    chat_id,
    user_id,
    permissions: JSON.stringify(permissions),
  });
};

module.exports = {
  deleteMessage,
  restrictUser,
};
