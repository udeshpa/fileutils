var fs = require("fs");

try {
    fs.renameSync("./lib1", "./lib2" );
}catch (err) {
    console.log(`Failed: ${err}`);    
}

fs.rename("./lib2", "./lib1", function(err) {

    console.log("Renamed");
} );