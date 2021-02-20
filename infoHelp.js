//Common JS

const Discord = require("discord.js");
const bot = new Discord.Client();

exports.help=function (msg) {

    var resp='vacio';

    if (msg == 'help')
    {
        resp='Si lograste llegar aquí deberias saber como funciona pero te explicare de todas formas\n ' +
            'El comando help sirve para mostrar una lista de todos\n ' +
            'los cmandos ademas de mostrar el uso de comandos mas complejos, su sintaxis es así:\n' +
            '~help [comando quedaria algo] asi:  ~help set-game';
    }
    if (msg == 'hola')
    {
        resp='Este regresa un saludo a la perona que lo escribio';
    }
    if (msg == 'junko')
    {
        resp='Genera una imagen de Junko Enoshima';
    }
    if (msg == 'jojo')
    {
        resp='Genera una imagen random de Jojos';
    }
    if (msg == 'hi')
    {
        resp='Inicia una conversacion privada conmigo ;)';
    }
    if (msg == 'set-game')
    {
        resp='Este comando cmbia la ctividad del bot es muy facil de usar\n' +
            'su sintaxis es asi: ~set-game [el estado que se desea]';
    }

    return resp;

}