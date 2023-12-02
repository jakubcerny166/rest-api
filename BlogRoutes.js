const express = require('express');
const router = express.Router();

const { getBlogs, postBlog, getBlog, deleteBlog} = require('../controllers/blogControllers');

router.get('/', getBlogs);
router.post('/', postBlog);
router.get('/:id', getBlog);
router.get('/:id', deleteBlog);

module.exports = router;












