import app from './app.js';
import sequelize from './database/config/connection.js';

sequelize.sync().then(() => {
  app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on http://127.0.0.1:3000');
  });
});
