const app = require('./src/app');

//Running the server on Port 3000 default
let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {console.log(`Server is running on Port ${PORT}`);});
