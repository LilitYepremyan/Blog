import { Box } from '@material-ui/core';
import RecipeReviewCard from './post';

export default function ShowPosts() {
  const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
  return (
    <Box display="flex">
      {posts.map((post) => {
        return <RecipeReviewCard 
         title={post.title}
         post={post.post} />;
      })}
    </Box>
  );
}
