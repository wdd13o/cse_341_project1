const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Users Api',
    description: 'Users Api'
  },
  host: 'cse-341-project1-yt5c.onrender.com',
  basePath: '/api/contacts',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/users.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
