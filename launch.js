var exec = require("child_process").exec;


var gamePath = "C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Source/hl2.exe" 


// exec('/c/Program\ Files\ \(x86\)/Steam/steamapps/common/Counter-Strike\ Source/hl2.exe -game cstrike -dev -windowed -console -sw +sv_lan 1 +sv_cheats 1');
exec('"C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Source/hl2.exe" -game cstrike -dev -windowed -console')

console.log("czesc");