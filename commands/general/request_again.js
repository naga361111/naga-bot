const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('request_again')
		.setDescription('Replies to your request once more!'),
	async execute(interaction) {
		await interaction.reply('[built-in] Response!');
    await interaction.followUp('Response again!');
	},
};
