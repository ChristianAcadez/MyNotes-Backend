import mongoose from 'mongoose';
import config from './config/variables'

(async () => {
    const db = await mongoose.connect(config.mongodbURL);
    console.log(db.connection.name);
})();