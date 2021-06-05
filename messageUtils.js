/*
{
  message_id: 19,
  from: {
    id: 131758072,
    is_bot: false,
    first_name: 'Alexey',
    last_name: 'Korepanov',
    username: 'alexkorep',
    language_code: 'en'
  },
  chat: { id: -1001232020314, title: 'DevwordenTest', type: 'supergroup' },
  date: 1622904679,
  reply_to_message: {
    message_id: 18,
    from: {
      id: 131758072,
      is_bot: false,
      first_name: 'Alexey',
      last_name: 'Korepanov',
      username: 'alexkorep',
      language_code: 'en'
    },
    chat: { id: -1001232020314, title: 'DevwordenTest', type: 'supergroup' },
    date: 1622904674,
    text: 'test'
  },
  text: '/delete',
  entities: [ { offset: 0, length: 7, type: 'bot_command' } ]
}

*/

/**
 * Check if the given message is sent by admin
 * @param {obj} message - Telegram message
 * @returns True if message sender is in the ADMINS environment variable
 */
const isAuthorized = (message) => {
  const adminsStr = process.env.ADMINS;
  const admins = adminsStr.split(",");
  return admins.some((a) => a === message?.from?.username);
};

/**
 * Extract command from the message, if it's there
 * @param {obj} message - Telegram message
 */
const getCommand = (message) => {
  const { text, entities } = message;
  if (!entities?.length) {
    return "";
  }
  const [entity] = entities;
  if (entity?.type !== "bot_command") {
    return "";
  }
  const command = text.substring(
    entity.offset + 1,
    entity.offset + entity.length
  );
  return command.toUpperCase();
};

module.exports = {
  isAuthorized,
  getCommand,
};
