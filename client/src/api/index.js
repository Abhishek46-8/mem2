import axios from 'axios';

const url = 'https://stormy-gorge-51249.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`https://stormy-gorge-51249.herokuapp.com/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`https://stormy-gorge-51249.herokuapp.com/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`https://stormy-gorge-51249.herokuapp.com/posts/${id}`);
