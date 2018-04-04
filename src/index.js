// Server Home
const BodyParser = require('body-parser');
const Express = require('express');
const Got = require('got');

const App = Express();
const PORT = 3000;
const API_BASE = 'https://jsonplaceholder.typicode.com'

//  --- Set JSON & Template Configs ---
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use('/static', Express.static(`${__dirname}/public`));
App.set('view engine', 'pug');
App.set('views', `${__dirname}/templates`);

// --- API Helper Fns
function constructUrlByType (type) {
    if (type === 'posts' || type === 'comments' || type === 'users') {
        return `${API_BASE}/${type}/1`
    }

    console.error('Something went wrong during URL construction')
    return ''
}


// --- Routes
// - Render Landing Page
App.get('/', (req, res) => res.render('landing', {}));

// - Get Content From API
App.get('/getApi/:type', (req, res, next) => {
    const targetUrl = constructUrlByType(req.params.type);
    
    return Got(targetUrl)
    .then(apiCall => res.json({ body: apiCall.body, status: 200 }))
    .catch((err) => console.error('Server Explosion: ', err))
});

// - Sys Alive
App.get('/sys/alive', (req, res) =>
    res.send({ status: 'Test server is running.' })
);

// -Init Function
function startServer() {
    console.log(`Listening on Port: ${PORT}`)
    App.listen(PORT)
};

// - Start Server
startServer();