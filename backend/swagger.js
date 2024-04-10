const fs = require('fs');
const path = require('path');


function getRouteFiles() {
    const routesDir = path.join(__dirname, './routes');

    try {
        // Read the contents of the routes directory
        const files = fs.readdirSync(routesDir);

        // Filter out only JavaScript files
        const jsFiles = files.filter(file => path.extname(file) === '.js');

        // Create an array of relative file paths with 'routes/' prefix
        const relativeFilePaths = jsFiles.map(file => path.join('routes', file).replace(/\\/g, '/'));

        return relativeFilePaths;
    } catch (error) {
        console.error('Error reading route files:', error);
        return [];
    }
}

// Usage
const routeFiles = getRouteFiles();
console.log(routeFiles);

const swaggerAutogen = require('swagger-autogen')();
const HOST =   process.env.ENVIROMENT === 'production' ? 'https://soekwerk.onrender.com' : 'localhost'
const PORT =  process.env.ENVIROMENT === 'production' ? '' : ':5000';

console.log("host and port",HOST,PORT)

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: `${HOST}${PORT}`,
  "schemes": [
    "https",
    "http"
  ],
};

const outputFile = './swagger.json';

const routes = ['./server.js']
// routeFiles.push('./server.js');

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
swaggerAutogen(outputFile, routes, doc);