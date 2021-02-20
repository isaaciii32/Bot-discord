exports.inCmd = function(cmd,message) {
  const cmds = {
    "~ping" : message.channel.send('pong'),
    '~hola': message.reply(' HolaP ')
  };
  return cmds.cmd;
}
