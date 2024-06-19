const client = require('../../../index');
const chalk = require('chalk');
const {ActivityType} = require('discord.js');

const activitiesList = [
    {name: 'play.elowyr.fr‍', type: ActivityType.Playing},
];

let activityIndex = 0;

client.on("ready", async () => {
    console.log(chalk.green(`[INFO] ${client.user.tag} est bien connecté !`));
    console.log(chalk.green(`[INFO] Développé avec le ❤  par SkillOfFire & AnZok`));

    await updateActivity();

    setInterval(() => {
        activityIndex = (activityIndex + 1) % activitiesList.length;
        updateActivity();
    }, 60000); // 1 minute
});

async function updateActivity() {
    const activity = activitiesList[activityIndex];
    await client.user.setActivity(activity.name, {type: activity.type});
    await client.user.setPresence({status: 'online'});
}
