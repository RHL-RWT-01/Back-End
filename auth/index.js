const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456"; // Ideally from process.env.JWT_SECRET

const app = express();
app.use(express.json());
const ALL_USERS = [
  { username: "rahul@gmail.com", password: "123", name: "Rahul Rawat" },
  { username: "raman@gmail.com", password: "123321", name: "Raman Singh" },
  { username: "abcd@gmail.com", password: "123321", name: "Abcd Kumar" }
];

function userExists(username, password) {
  return ALL_USERS.some(user => user.username === username && user.password === password);
}

app.get('/', (req, res) => {
  res.send('Hello, this is a basic authentication app');
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(401).json({ msg: "User doesn't exist in our in-memory db" });
  }

  const token = jwt.sign({ username }, jwtPassword); // Use jwtPassword for signing
  return res.json({ token });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword); // Verify with jwtPassword
    const username = decoded.username;
    return res.json(ALL_USERS.filter(user => user.username !== username));
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
