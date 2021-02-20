const fs = require('fs');
//const Discord = require("discord.js");
//const bot = new Discord.Client();

// funcion de rollback para la lista de players
exports.rollbackB=function(name) {
  let rawdata= fs.readFileSync('rpg_data/players_rb.json');
  var ply= JSON.parse(rawdata);
  let data=JSON.stringify(ply);
  fs.writeFileSync('rpg_data/players.json', data);
}

exports.turn=function(name) {
  console.log("comenzando turno para: ",name);
  var idPlayer=getPlayer(name);
  if(!idPlayer){
    console.log('porque sigo entrando aqui?')
    createPlayer(name);
  }
  idPlayer=getPlayer(name);
  console.log("player comprovado");
  getAtributos(idPlayer); // en este momento no se esta usando solo ejecuntndo
  console.log("atributos obtenidos");
  var final = combate(idPlayer);
  return final;
}

exports.turn2=function(name) {
  console.log('rady?');
  var idPlayer=getPlayer(name);
  if(!idPlayer){
    console.log('porque sigo entrando aqui?')
    createPlayer(name);
  }
  idPlayer=getPlayer(name);
  var atrs=getAtributos(idPlayer);
  return atrs;
}

exports.pInfo=function(pl,ch) {
  //ch.send('nombre de jugador: '+pl.name+'\n nivel del jugador: '+pl.lvl);
  ch.send({embed: {
                color: 10500,
                title: "Estaditicas de jugador",
                description: 'nombre: '+pl.name+'\n nivel: '+pl.lvl
            }});
  return 0;
}
exports.color=function(ch,col) {
  ch.send({embed: {
                color: col,
                title: "Estaditicas de jugador",
                description: 'nombre: '
            }});
}

function getPlayer(name) {
  let rawdata= fs.readFileSync('rpg_data/players.json');
  var ply= JSON.parse(rawdata);
  var player = false;
  for (var i = 0; i < ply.player.length; i++) {
    if(name == ply.player[i].name){
      var player= i;
      break;
    }
  }
  return player;
}

function createPlayer(name) {
  let rawdata= fs.readFileSync('rpg_data/players.json');
  var ply= JSON.parse(rawdata);
  let nply = {
    name:name,
    lvl:1,
    xp:0,
    atk:1,
    vid:2,
    items:[1]
  }
  ply.player.push(nply);
  let data=JSON.stringify(ply);
  fs.writeFileSync('rpg_data/players.json', data);
}

function getAtributos(id) {
  let rawdata= fs.readFileSync('rpg_data/players.json');
  var ply= JSON.parse(rawdata);
  var atrs = ply.player[id];
  return atrs;
}

function getMob() {
  let rawdata= fs.readFileSync('rpg_data/mobs.json');
  var ply= JSON.parse(rawdata);
  let id=ply.mobs[0].id;
  let name=ply.mobs[0].name;
  let atk=ply.mobs[0].atk;
  let vid=ply.mobs[0].vid;
  let n_aux=ply.mobs[0].n_aux;
  var atrs={
    id:id,
    name:name,
    atk:atk,
    vid:vid,
    n_aux:n_aux
  }
  return atrs;
}

function combate(pId) {
  console.log("comenzando el combate");
  var mobAtr=getMob()
  var playerAtr=getAtributos(pId);
  var pvid=playerAtr.vid;
  let patk=playerAtr.atk;
  let plvl=playerAtr.lvl;
  var mvid=mobAtr.vid;
  let matk=mobAtr.atk;
  pvid=lvlBuff(pvid,plvl);
  patk=lvlBuff(patk,plvl);
  console.log("peleadores listos");
  if (mvid-patk <= 0) {
    var combatResult = 'combate ganado en 1 turno';
    mvid=mvid-patk;
  }
  else {
    pvid=pvid-matk;
  }
  if (mvid > 0 && pvid >0) {
    if (mvid-patk <=0) {
      var combatResult = 'combate ganado en 2 turnos';
    }
    else {
      var combatResult = 'combate igualado el monstruo a escapado';
    }
  }
  else if (pvid <= 0) {
    var combatResult = 'combate perdido es todo por hoy';
  }

  return combatResult;
}

function lvlBuff(atr,lvl) {
  bfAtr=atr+lvl;
  return bfAtr;
}
