var fs = require("fs");


fs.renameSync("./temp.md", "./temp1.md");

console.log("temp.md renamed")

fs.rename("./temp1.md", "./temp.md", function(err){
    if(err) {
        console.log(err);
    }
    else {
        console.log("temp1.md renamed")
    }
});

