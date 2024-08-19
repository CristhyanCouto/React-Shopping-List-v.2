const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = require('./models');

// Routes

const itemRouter = require('./routes/Item');
app.use('/item', itemRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});