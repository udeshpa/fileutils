var fs = require("fs");


var md = `
Sample Text
==========

**hnhn
`;

fs.writeFile("sample.md", md.trim(), function(err) {

    console.log("File created");

});