var exec = require("child_process").execFile;

var gamePath = "C:/Program\ Files\ \(x86\)/Steam/steamapps/common/Counter-Strike\ Source/hl2.exe"; 
var gameFlags = ["-game", "cstrike", "-dev", "-windowed", "-console"];

exec(gamePath,gameFlags, function (err,data){
	console.log(err);
	console.log(data.toString());
});