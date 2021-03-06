const ms = require("ms");
const moment = require("moment");

module.exports = bot => {
  let type;
  let status;
  let activity;

  if (process.env.ACTIVITY != null) {
    activity = process.env.ACTIVITY;
  } else {
    activity = bot.config.botactivity.activity;
  };

  if (process.env.ACTIVITYTYPE != null) {
    type = process.env.ACTIVITYTYPE;
  } else {
    type = bot.config.botactivity.type;
  };

  if (process.env.ACTIVITYSTATUS != null) {
    status = process.env.ACTIVITYSTATUS;
  } else {
    status = bot.config.botactivity.status;
  };

  let today = [];
  let day = moment().format("DD");
  today.push(day)
  let month = moment().format("MM");
  today.push(month)


  let date = bot.date(today)

  console.log(today)
  console.log(date)

  bot.user.setPresence({
    game: {
      name: activity,
      type: type
    },
    status: status
  });

  setInterval(() => {
    let rdmactivity = ["Hentaihaven.org", "hanime.tv", "hentai2read.com", "pururin.io"];
    let randAct = Math.floor(Math.random() * rdmactivity.length);
    bot.user.setPresence({
      game: {
        name: `${rdmactivity[randAct]}`,
        type: `${type}`
      },
      status: `${status}`
    });
  }, ms("10s"));

  bot.log(`Bot ${bot.user.tag} has started with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`, "Started");
};
