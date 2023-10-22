const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('math')
    .setDescription('solve simple math problem!')
    .addStringOption(option =>
      option.setName('operator')
      .setDescription('choose your prefer math problem')
      .setRequired(true)
      .addChoices(
        { name: '\'+\'', value: 'plus operator' },
        { name: '\'-\'', value: 'minus operator' }
      )),
  async execute(interaction) {
    const operator = interaction.options.getString('operator');

    if (operator === 'plus operator') {
      const firstNum = Math.floor(Math.random() * 10100);
      const secondNum = Math.floor(Math.random() * 10100);
      const problemAnswer = firstNum + secondNum;
      await interaction.reply(`${firstNum} + ${secondNum} = ? (${problemAnswer})`);
    } else if (operator === 'minus operator') {
      const firstNum = Math.floor(Math.random() * 10100);
      const secondNum = Math.floor(Math.random() * 10100);
      const problemAnswer = firstNum - secondNum;
      await interaction.reply(`${firstNum} - ${secondNum} = ? (${problemAnswer})`);
    } else {
      await interaction.reply('unknown error occured!')
    }
    
  }
}