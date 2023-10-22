const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('request_again')
		.setDescription('Replies to your request once more!'),
	async execute(interaction) {
		await interaction.reply('[built-in] Response!');
    await wait(2000);
    await interaction.deleteReply();
    await interaction.followUp('Response again!');
	},
};
