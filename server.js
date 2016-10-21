var exec = require("child_process").exec;

exec("http-server './build/bundled'", function () {
});