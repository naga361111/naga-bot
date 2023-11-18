const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies Naga Bot\'s latency!'),
	async execute(interaction) {
		await interaction.reply(`Latency is ${Date.now() - message.createdTimestamp}ms.`);
	},
};
