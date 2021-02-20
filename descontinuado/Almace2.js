const fs = require('fs');

exports.red=function() {
  let rawdata= fs.readFileSync('alc.json');
  var user= JSON.parse(rawdata);
  return user;
}

exports.cre=function(usrs,name) {
  let user = {
    name: name, xp: 0
  }
  usrs.users.push(user);
  let data=JSON.stringify(usrs);
  fs.writeFileSync('alc.json', data);
}

exports.more=function(usrs,idx) {
  usrs.users[idx].xp=usrs.users[idx].xp+1;
  let data=JSON.stringify(usrs);
  fs.writeFileSync('alc.json', data);
}

/* todo loque estaba en index

if (msg.startsWith(pre + 'colecta')) {
  var data =alm.red();
  var autor = message.author.username;
  var flg = false;
  var idx=0;
  for (var i = 0; i < data.users.length; i++) {
    if(data.users[i].name==autor){
      idx = i;
      flg = true;
    }
  }
  if (flg) {
    alm.more(data,idx);
    let ndata = alm.red();
    message.reply('Nombre: '+ndata.users[idx].name+' XP: '+ ndata.users[idx].xp );
  }else {
    alm.cre(data,autor);
    let newData = alm.red();
    message.reply('usuario creado porfavor vuelva a consultar ');
  }
}


if (msg.startsWith(pre + 'xplist')) {
  let data =alm.red();
  var list ='';
  for (var i = 0; i < data.users.length; i++) {
    list = list + 'Nombre: '+data.users[i].name+' XP: '+ data.users[i].xp+'\n';
  }
  message.reply('\n Lista de usuarios \n'+ list );
}

OPCIONES PARA ALMACEN PERO QUE SE ME OLVIDARON SU FUNCION

 if (msg.startsWith(pre + 'data')) {
   let data =alm.red();
   message.reply('data: '+data.users[0].name );
 }

 if (msg.startsWith(pre + 'nodata')) {
   let data =alm.red();
   let autor = message.author.username;
   alm.cre(data,autor);
   let newData = alm.red();
   message.reply('data: '+newData.users[0].name+'\n'+newData.users[1].name );
 }

*/
