module.exports = {
    apps : [{
        name: 'api-based-microservice',
        script: './server.js',
        watch:true,
        exec_interpreter:'babel-node', 
        exec_mode:'fork',
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }]
};


