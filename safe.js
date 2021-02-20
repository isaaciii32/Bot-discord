if (message.author.bot) return;

if (msg.startsWith(pre + 'hola')) {
  message.reply(' HolaP ');
}

if (msg.startsWith(pre + 'ping')) {
  message.channel.send('pong');
}


if (msg.startsWith(pre+'help')) {

  var help=msg.slice(6);

  if (help !==''){
    message.channel.send({embed: {
                  color: 3447003,
                  author: {
                      name: bot.user.username,
                      icon_url: bot.user.avatarURL
                  },
                  title: "Listas de comandos",
                  description: ayuda.help(help)
              }});

  } else {
          message.channel.send({
              embed: {
                  color: 3447003,
                  author: {
                      name: bot.user.username,
                      icon_url: bot.user.avatarURL
                  },
                  title: "Listas de comandos",
                  description: "Esta es una lista de los comandos funcionables",
                  fields:
                      [
                          {
                              name: "~help",
                              value: "sirve para ver este mensaje de ayuda."
                          },
                          {
                              name: "~hola",
                              value: "Este regresa un saludo a la perona que lo escribio"
                          },
                          {
                              name: "~junko",
                              value: "Genera una imagen de Junko Enoshima"
                          },
                          {
                              name: "~jojo",
                              value: "Genera una imagen random de Jojo's"
                          },
                          {
                              name: "~hi",
                              value: "Inicia una conversacion privada conmigo ;)"
                          },
                          {
                              name: "~set-game",
                              value: "Cambia mi actividad"
                          }
                      ],
                  timestamp: new Date(),
                  footer: {
                      icon_url: bot.user.avatarURL,
                      text: "Mas comandos en camino ;)"
                  }
              }
          });
      }
}

if (msg.startsWith(pre+'set-game'))
{
  var game=message.content.slice(10);
  if (game.trim() == '')
  {
    bot.user.setActivity(null);
  }else
  {
    bot.user.setActivity(game);
  }
}
// aqui intento crear un bot musica

if(msg.startsWith(pre +'add')){
  let link = message.content;
  let ilink = link.indexOf('https');
  if (ilink != -1) {
    link = link.slice(ilink);
    audioAd(link,true);
    //let name = audioName(link);
    //message.reply('se ah añadido '+name+' a la lista de reproduccion');
  }
}

if(msg.startsWith(pre +'tel')){
  let link = message.content;
  let ilink = link.indexOf('https');
  if (ilink != -1) {
    link = link.slice(ilink);
    audioName(link);
  }
}

if(msg.startsWith(pre +'play'))
{
  if (message.member.voice.channel) {
    let connection = message.member.voice.channel.join();
  }else {
    message.reply('necesitas estar en un canal de audio primero');
  }
  let link = message.content;
  let ilink = link.indexOf('https');
  if (ilink != -1) {
    link = link.slice(ilink);
    audioAd(link,false)
    audioPlay(message);
  }
}

if(msg.startsWith(pre +'leave'))
{
  if (message.member.voice.channel) {
    const connection = message.member.voice.channel.leave();
  }else {
    message.reply('necesitas estar en un canal de audio primero');
  }
}


// fin del intento de crear un bot de musica

  if (msg.startsWith(pre+"mcdonalds"))
  {
      message.channel.send('https://www.youtube.com/watch?v=P9ibDqbfPdY');
  }
// IMAGENES DE JUNKO
  if (msg.startsWith(pre+'junko'))
  {
      r= buscador.buscador('junko+enoshima');
      var i = getNumRand(0,9);
      request({
          url: r,
          json: true
      }, (error, response, body) => {
          message.channel.send(JSON.stringify(body.items[i].pagemap.cse_image[0].src));
      });
  }
//GIF DE JOJOS
  if (msg.startsWith(pre + 'jojo')) {
  var q='Jotaro';
  var i = getNumRand(1,25);
  giphy.search('gifs', {"q": q})
  .then((response) => {
      message.channel.send(response.data[i].images.original.gif_url);
  })
  .catch((err) => {
  })
}
// GIF DE K-ON
  if (msg.startsWith(pre + 'k-on')) {
      var q='k+on';
      var i = getNumRand(1,25);
      giphy.search('gifs', {"q": q})
          .then((response) => {
              message.channel.send(response.data[i].images.original.gif_url);
          })
          .catch((err) => {
          })
  }

  if(msg.startsWith(pre+'hi'))
    {
      message.author.send('hola (͠≖ ͜ʖ͠≖)');
    }


// seccion del rpg game :D 09/03/2020

if(msg.startsWith(pre + 'rbp')){
  rpg.rollbackB();
  message.reply('data de jugadores restablecida');
}

if(msg.startsWith(pre + 'stg')){
  var autor = message.author.username;
   let resp =rpg.turn2(autor);
   //message.reply(resp.name);
   rpg.pInfo(resp,message.channel);
   console.log(resp.name);
}
// fin del la seccion rpg game
if (msg.startsWith(pre + 'bye')) {
  message.reply(' bye bye ');
}

if (msg.startsWith(pre + 'cl')) {
  let cont = message.content;
  cont = cont.slice(3);
  console.log(cont);
  rpg.color(message.channel,cont);
}
