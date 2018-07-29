const mongoose = require("mongoose");
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/taskManager', { useNewUrlParser: true })
  .then(() => {
    const admin = new User ({
      name: 'admin',
      email: 'admin@admin.loc',
      password: 'admin',
      isAdmin: true
    });
    admin.password = admin.encryptPassword("admin");
    admin.save()
      .then(() => {
        console.log("Admin successfully created");
        process.exit(0);
      })
  });