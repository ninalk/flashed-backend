const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopolgoy: true
})
.then(() => {
    console.log("DB Connected");
})
.catch((err) => console.log(err));