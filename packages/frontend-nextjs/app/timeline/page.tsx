"use client";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useGetPosts } from './api/useGetPosts';
import { usePostPosts } from './api/usePostPosts';
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLikePost } from './api/useLikePost';


export default function TimelinePage() {
  const { posts: backendPosts } = useGetPosts();
  const [posts, setPosts] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const { profile } = useAuth();
  const { postNew, loading } = usePostPosts();
  const { likePost, loading: likeLoading } = useLikePost();

  React.useEffect(() => {
    
    const sorted = [...backendPosts].sort((a, b) => {
      const dateA = new Date(a.date || a.createdAt || 0).getTime();
      const dateB = new Date(b.date || b.createdAt || 0).getTime();
      return dateB - dateA;
    });
    setPosts(sorted);
  }, [backendPosts]);

  const handlePost = async () => {
    if (!content.trim() || !profile) return;

    const userId = profile.id;
    const avatar = profile.avatar || "";
    const user = profile.name || "Usuário";
    const result = await postNew({ title: "", content, userId });
    if (result) {
      
      const newPost = {
        ...result,
        avatar,
        user,
        date: new Date().toLocaleString(),
        like: 0,
      };
     
      const updatedPosts = [newPost, ...posts];
      updatedPosts.sort((a, b) => {
        const dateA = new Date(a.date || a.createdAt || 0).getTime();
        const dateB = new Date(b.date || b.createdAt || 0).getTime();
        return dateB - dateA;
      });
      setPosts(updatedPosts);
      setContent("");
    }
  };


  return (
    <Box minHeight="100vh" className="timeline-bg" display="flex" flexDirection="column" alignItems="center" py={8}>
      <Box width="100%" maxWidth={500}>
        <Typography variant="h4" fontWeight={700} color="primary" align="center" mb={4}>
          Timeline
        </Typography>
        <Box display="flex" gap={2} mb={3} alignItems="center" justifyContent="center">
          <TextField
            label="Escreva seu post"
            variant="outlined"
            fullWidth
            value={content}
            onChange={e => setContent(e.target.value)}
            color='primary'
            inputProps={{ maxLength: 180 }}
          />
          <Button
            variant="contained"
            onClick={handlePost}
            color='primary'
            sx={{ minWidth: 120, height: 48, fontWeight: 600, fontSize: '1rem', boxShadow: '0 2px 12px rgba(0,128,0,0.10)' }}
            disabled={loading}
          >
            {loading ? 'Postando...' : 'Postar'}
          </Button>
        </Box>
        <Stack spacing={3}>
          {posts.map((post) => (
            
            <Card key={post.id} elevation={3} className="timeline-card">
              <CardContent>
                <Box display="flex" gap={2} alignItems="flex-start">
                  <Avatar src={post.avatar} alt={post.user} sx={{ width: 56, height: 56 }} />
                  <Box flex={1}>
                    <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                      <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                        {post.user}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" mb={2}>
                      {post.content}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                      <IconButton
                        aria-label="like"
                        size="small"
                        color="error"
                        disabled={likeLoading}
                        onClick={async () => {
                          if (profile) {
                            const data = await likePost(post.id, profile.id);
                            if (data && typeof data.likes === 'number') {
                              setPosts((prev) =>
                                prev.map((p) =>
                                  p.id === post.id ? { ...p, likes: data.likes } : p
                                )
                              );
                            }
                          }
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {post.likes || 0}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}