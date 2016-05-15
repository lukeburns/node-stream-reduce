var reduce = require("./");
process.stdin.pipe(reduce(function(acc, data) {
  return acc + Number(data.toString());
}, 0))
.on("data", function(data) {
  console.log("intermediate state:", data);
})
.on("end", function(end) {
  console.log("final state:", end);
});
