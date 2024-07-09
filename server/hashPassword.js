const bcrypt = require("bcryptjs");

// Replace this with the admin password you want to hash
const plainPassword = "adminpassword123";

bcrypt.hash(plainPassword, 12, (err, hashedPassword) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Hashed Password: ${hashedPassword}`);
  }
});
