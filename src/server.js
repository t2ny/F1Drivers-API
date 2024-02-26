const app = require('./app');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const MONGODB = process.env.MONGODB;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(MONGODB)
        .then(_result => console.log('Database connected successfully'))
        .catch(error => console.log(error));
});