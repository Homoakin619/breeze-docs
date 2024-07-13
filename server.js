const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

// Swagger setup
const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Authentication API',
    version: '1.0.0',
    description: 'API for user authentication and registration using email/password and magic links.',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./docs/**/*.yaml'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Dummy endpoints for example
app.post('/auth/register', (req, res) => {
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/auth/login', (req, res) => {
  res.status(200).json({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' });
});

app.post('/auth/magic-link', (req, res) => {
  res.status(200).json({ message: 'Magic link sent to your email' });
});

app.get('/auth/magic-link/verify', (req, res) => {
  res.status(200).json({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app
