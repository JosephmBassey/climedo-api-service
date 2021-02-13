# API Microservice

1. cd to the project directory
3. Set up .env variables using .env.example
4. To install dependencies run `npm install ` on your terminal <br>
4. To start the server 
run `npm run dev` on your terminal if redis and nodejs are already install or using docker <br>
run `docker-compose up` on your terminal to start the server using docker

5. To access the API documentation navigate to http://localhost:9001/apidoc on your browser<br>


PS. You can also use PM2 to start the service by running  `pm2 restart ecosystem.config.js` 