const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');
const repositoryPlugin = require('./repository/repositoryPlugin');
const submissionRoutes = require('./routes/api/v1/submissionRoutes'); // Renamed from todoRoutes

async function app(fastify, options) {
    // Register CORS plugin with default or custom options
    await fastify.register(require('@fastify/cors'), {
        origin: "*", // Adjust this based on your security requirements
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    });

    // Register repository and service plugins in the correct order
    await fastify.register(repositoryPlugin);
    await fastify.register(servicePlugin);

    // Register routes with prefixes
    await fastify.register(submissionRoutes, { prefix: '/submissions' }); // Changed prefix to match route content
    await fastify.register(require('./routes/api/apiRoutes'), { prefix: '/api' });
}

// Wrap app as a Fastify plugin
module.exports = fastifyPlugin(app);
