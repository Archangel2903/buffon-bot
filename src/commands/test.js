const { TEST } = require('../const/commands');

module.exports = (bot) => {
    bot.onText(new RegExp(`${TEST}`, 'gi'), (msg) => {
        console.log('test', msg);
        bot.sendMessage(msg.chat.id, `Привет ${msg.from.first_name}, это тестовое сообщение.<pre>${JSON.stringify(msg, null, 2)}</pre>`, {parse_mode: 'html'})
    });
}