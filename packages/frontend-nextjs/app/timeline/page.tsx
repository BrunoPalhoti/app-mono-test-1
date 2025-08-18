"use client";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTimeline } from "./hooks/useTimeline";

export default function TimelinePage() {
  const {
    posts,
    setPosts,
    content,
    setContent,
    handlePost,
    loading,
    likeLoading,
    likePost,
    profile,
  } = useTimeline();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ bgcolor: "#f9fafb" }}
    >

      {profile && (
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            borderRadius: 4,
            px: 4,
            pt: 4,
            pb: 3,
            mt: 6,
            mb: 4,
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            background: "linear-gradient(135deg, #00D084 0%, #02b87c 100%)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Avatar
            src={profile.avatar}
            alt={profile.name}
            sx={{
              width: 90,
              height: 90,
              border: "4px solid #fff",
              boxShadow: 3,
              mr: { sm: 3 },
              mb: { xs: 2, sm: 0 },
            }}
          />
          <Box flex={1} minWidth={0} sx={{ mr: { sm: 3 } }}>
            <Typography
              variant="h5"
              fontWeight={700}
              color="#fff"
              sx={{ lineHeight: 1.2 }}
            >
              {profile.name}
            </Typography>
            <Typography variant="subtitle1" color="rgba(255,255,255,0.8)">
              {profile.profileType}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: "#00D084",
              fontWeight: 600,
              borderRadius: 2,
              px: 3,
              py: 1.2,
              boxShadow: "none",
              "&:hover": { bgcolor: "#f0fff8" },
            }}
          >
            Editar perfil
          </Button>
        </Box>
      )}

 
      <Box sx={{ width: "100%", maxWidth: 900, px: 4 }}>
        <Card
          sx={{
            borderRadius: 3,
            mb: 3,
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" gap={2}>
              <TextField
                label="O que você está pensando?"
                variant="outlined"
                fullWidth
                value={content}
                onChange={(e) => setContent(e.target.value)}
                inputProps={{ maxLength: 180 }}
                sx={{ borderRadius: 2 }}
              />
              <Button
                variant="contained"
                onClick={handlePost}
                sx={{
                  minWidth: 120,
                  height: 48,
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #00D084, #02b87c)",
                }}
                disabled={loading}
              >
                {loading ? "Postando..." : "Postar"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>


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
                        {post.user}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Box>
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
                        size="small"
                        color="error"
                        disabled={likeLoading}
                        onClick={async () => {
                          if (profile) {
                            const data = await likePost(post.id, profile.id);
                            if (data && typeof data.likes === "number") {
                              setPosts((prev) =>
                                prev.map((p) =>
                                  p.id === post.id
                                    ? { ...p, likes: data.likes }
                                    : p
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
