import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
const posts = [
  {
    id: 1,
    user: "João Silva",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Primeiro post na timeline!",
    date: "2025-08-17 10:00",
    like: 0,
  },
  {
    id: 2,
    user: "Maria Souza",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Curtindo muito esse app 😍",
    date: "2025-08-17 11:30",
    like: 0,
  },
  {
    id: 3,
    user: "Carlos Lima",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    content: "Alguém viu as novidades?",
    date: "2025-08-17 12:15",
    like: 0,
  },
];

export default function TimelinePage() {
  return (
    <Box minHeight="100vh" bgcolor="#f5f5f5" display="flex" flexDirection="column" alignItems="center" py={8}>
      <Box width="100%" maxWidth={500}>
        <Typography variant="h4" fontWeight={700} color="primary" align="center" mb={4}>
          Timeline
        </Typography>
        <Stack spacing={3}>
          {posts.map((post) => (
            <Card key={post.id} elevation={3}>
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
                      <IconButton aria-label="like" size="small" color="error" disabled>
                        <FavoriteIcon />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {post.like}
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