/*
{
  message_id: 12,
  from: {
    id: 131758072,
    is_bot: false,
    first_name: 'Alexey',
    last_name: 'Korepanov',
    username: 'alexkorep',
    language_code: 'en'
  },
  chat: { id: -1001232020314, title: 'DevwordenTest', type: 'supergroup' },
  date: 1622870766,
  text: '@DevwordenBot delete',
  entities: [ { offset: 0, length: 13, type: 'mention' } ]
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
  //
  return "";
};

module.exports = {
  isAuthorized,
};
