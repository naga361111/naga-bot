const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('request')
		.setDescription('Replies to your request!'),
	async execute(interaction) {
		await interaction.reply('[built-in] Response!');
	},
};
