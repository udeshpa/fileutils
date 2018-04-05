var fs = require('fs');

try {
    fs.unlinkSync('temp.md');
}catch(err) {
    console.log(err);
}

fs.unlink('temp.md', function(err) {
    if(err) {
        console.log(err);        
    }else {
        console.log("Removed successfully");
    }
})