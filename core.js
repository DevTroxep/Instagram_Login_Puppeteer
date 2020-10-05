const puppeteer = require('puppeteer'),
      BASE_URL  = "https://instagram.com/";

const insta = {
    browser: null,
    page: null,

    initialize: async () => {
        insta.browser = await puppeteer.launch({
            headless: true // false = open browser
        });

        insta.page = await insta.browser.newPage();
    },

    main: async(username, password) => {
        
        try {

            await insta.page.goto(BASE_URL, {waitUntil: 'domcontentloaded'} );

            await insta.page.waitForSelector('input[name="username"]');
            await insta.page.type('input[name="username"]', username, {delay: 50});
            
            await insta.page.waitForSelector('input[name="password"]');
            await insta.page.type('input[name="password"]', password, {delay: 50});

            await insta.page.waitFor(500);

            const login_button = await insta.page.$x(`//*[@id="loginForm"]/div/div[3]/button`);
            await login_button[0].click();

            insta.page.close();

        }
        catch(e) {
            console.log(e);
        }

    },

}

module.exports = insta;