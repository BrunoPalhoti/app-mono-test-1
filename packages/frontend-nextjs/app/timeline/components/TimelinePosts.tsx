import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLikeHandler } from "../hooks/useLikeHandler";
import { TimelinePostsProps } from "../types/TimelinePostsProps";

export function TimelinePosts({ posts, setPosts, likePost, likeLoading, profile }: TimelinePostsProps) {
  const { handleLike } = useLikeHandler(setPosts, likePost, profile);
  return (
    <Box width="100%" maxWidth={900} px={4} pb={6}>
      <Stack spacing={3}>
        {posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              transition: "transform 0.2s",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            <CardContent>
              <Box display="flex" gap={2} alignItems="flex-start">
                <Avatar
                  src={post.avatar}
                  alt={post.user}
                  sx={{ width: 56, height: 56 }}
                />
                <Box flex={1}>
                  <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      color="text.primary"
                    >
                      {post.user_name || post.user}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {post.date || post.created_at}
                    </Typography>
                  </Box>
                  {post.title && (
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="primary"
                      sx={{ mb: 1 }}
                    >
                      {post.title}
                    </Typography>
                  )}
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{ mb: 2 }}
                  >
                    {post.content}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton
                      aria-label="like"
                      color="error"
                      disabled={likeLoading}
                      onClick={() => handleLike(post.id)}
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
  );
}
