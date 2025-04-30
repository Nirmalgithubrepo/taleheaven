const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouters = require('./Routes/AuthRouters');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db'); // Make sure this connects to your DB properly
const PORT = process.env.PORT || 8080;


//const authRoutes = require('./Routes/auth'); // <-- You need to require your auth route
//const authRoutes = require('./Routes/AuthRouter'); // ✅ corrected

app.get('/ping', (req, res) => {
    res.send('PONG');
});


app.use(bodyParser.json());
app.use(cors()); // Enables cross-origin requests (important in frontend-backend communication)
app.use('/auth', AuthRouters); // i have changed the name of AuthRouter to AuthRouter .
app.use('/products', ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});



