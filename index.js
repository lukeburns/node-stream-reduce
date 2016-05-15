var through = require("through");

module.exports = function(fn, acc) {
	if (arguments.length < 2) {
		throw new Error("Initial value must be given");
	}

	return through(function(data) {
		acc = fn(acc, data);
    this.emit("data", acc);
	}, function() {
		this.emit("end", acc);
	});
};
