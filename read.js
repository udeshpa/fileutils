var fs = require("fs");
var path = require("path");
//var contents = fs.readFileSync('./lib/Person.js', "UTF-8");
//console.log(contents);

fs.readdir("./lib", function(err, files){
    files.forEach( filename => {
        var file = path.join(__dirname, "lib", filename);
        var stats = fs.statSync(file);

        if(stats.isFile()) {
            console.log(`Contents of ${file}`)

            fs.readFile(file, "UTF-8", function(err, contents) {
                if(err) {
                    console.log(err);
                }
            
                console.log(contents);
            });
            

        }
    });
})

//console.log(contents1);