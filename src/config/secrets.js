
import { config } from 'dotenv';
config();

const secrets = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoUser: process.env.MONGO_USER,
    mongoPass: process.env.MONGO_PASS,
    
};

export default secrets;