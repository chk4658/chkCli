const myHelp = function(program) {
  program.version(require("./../package.json").version);
};

module.exports = myHelp;