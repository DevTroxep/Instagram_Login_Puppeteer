const core = require('./core.js');
const reader = require('readline-sync'); 

(async () => {

    const username = reader.question('Username: ');
    const password = reader.question('Password: ',{ hideEchoBack: true });

    await core.initialize();
    await core.main(username, password);

})();