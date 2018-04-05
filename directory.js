var fs = require("fs");


if(fs.existsSync('lib1')) {
    console.log('Directory already exists');
}
else {
    fs.mkdir('lib1', function(err){

        if(err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }
    })
}

fs.rmdir("./lib1", function(err) {
    console.log("Remove Error:" + err);
});

fs.readdirSync("./lib1").forEach(function(fileName) {
        console.log("Found file:" + fileName);
});