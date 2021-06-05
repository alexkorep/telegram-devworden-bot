# Telegram bot to ban users from group chats and delete group chat messages

## Bot syntax

- Reply to the message with `/delete` text to delete the message
- `/ban <username>` to ban the user
- `/unban <username>` to unban the user

## Prerequesites

- `node` v.14 or higher
- `yarn` should be globally installed

## Clone the repository and install node dependencies

```
git clone https://github.com/alexkorep/telegram-devworden-bot.git
cd telegram-devworden-bot
yarn
```

### Run the bot locally

Copy `env.example` file to `env.example`. Update it with your bot token (see Create a new Telegram bot section) and the admin username (telegram username)

In the project directory:

```
yarn runserver
```

See Register bot webhook URL section for instruction how to make integrate the bot running
locally with Telegram.

## Configuration

### Create a new Telegram bot

Please follow the instructions at https://core.telegram.org/bots#6-botfather

You will be given the bot token. Save it somewhere

Please note that Privacy Mode should be DISABLED (https://core.telegram.org/bots#privacy-mode) - because otherwise the bot will not receive `reply_to_message_id`
field when you ask him to delete the message.

You can disable it with BotFather: Bot Settings - Group Privacy.

### Give the bot admin rights in the chat

The bot should be added to the group chat and given admin rights:

- Delete Messages
- Ban Users

### Deploying to AWS

Run the command

```
yarn deploy
```

### AWS configuration

Go to AWS web console, find your Lambda and set the following environment variables:

- TOKEN - your bot token
- ADMINS - comma separated list of admins, for example `alice,bob,chris`

### Register bot webhook URL

Run the command:

```
curl --request POST --url https://api.telegram.org/bot<your-bot-token>/setWebhook --header 'content-type: application/json' --data '{"url": "<bot-url>"}'
```

Replace `<your-bot-token>` with your bot token and `<bot-url>` with the url received
on the deployment step

If you run the bot locally on your computer, you need `ngrok` utility, or similar, to expose your local app to the enternet via HTTPS: https://ngrok.com/

Run `./ngrok http 5000`. You will be provided with HTTPS url which can be used to configure webhook.
