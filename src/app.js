const express = require('express')
const userRoutes = require('./routes/user.route')
const postRoutes = require('./routes/post.route')
const commentRoutes = require('./routes/comment.route')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    console.log("Welcome to Node.js");
})

module.exports = app;