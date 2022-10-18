const postSchema = require('../schemas/postSchema');
const detailedPostSchema = require('../schemas/detailedPostSchema');
const userSchema = require('../schemas/userSchema');

module.exports = {
  postInfo: async (req, res) => {
    const newPost = new postSchema(req.body);
    await newPost.save();
    res.send({ post: newPost });
  },
  filterPosts: async (req, res) => {
    const { username } = req.body;

    let posts = [];

    if (username?.length > 0) {
      posts = await postSchema.find({ username });
    } else {
      posts = await postSchema.find();
    }
    console.log('posts', posts);
    res.send({ posts });
  },
  deletePost: async (req, res) => {
    const { id } = req.params;

    await postSchema.findOneAndDelete({ _id: id })

    res.send({ success: true });
  },
  updatePost: async (req, res) => {
    const { title, id } = req.body;
    console.log('req.body', req.body);

    const post = await postSchema.findOneAndUpdate(
      { _id: id },
      { $set: { title: title } },
      { new: true }
    );
    console.log('post', post);
    res.send({ post });
  },

  validateRegister: async (req, res) => {
    console.log('req.body', req.body);
    const newUser = new userSchema(req.body);
    await newUser.save();
    res.send({ error: false, message: '', user: newUser })
  },
  validateLogin: async (req, res) => {
    console.log('req login', req.body);
    const { email, password } = req.body;
    const user = await userSchema.find({ email, password });
    console.log('user', user);
    if (user.length) res.send({ ok: 'ok', error: false, user });
    else res.send({ ok: 'ok', error: true });
  },


  validatePost: async (req, res) => {
    const newPost = new detailedPostSchema(req.body);
    await newPost.save();
    res.send({ error: false, message: '', post: newPost });
  },
  detailedPosts: async (req, res) => {
    const posts = await detailedPostSchema.find();
    res.send({ posts });
  }


}