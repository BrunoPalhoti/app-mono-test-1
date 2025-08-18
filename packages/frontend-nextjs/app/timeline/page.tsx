"use client";
import { Box } from "@mui/material";
import { TimelineHeader } from "./components/TimelineHeader";
import { TimelinePostForm } from "./components/TimelinePostForm";
import { TimelinePosts } from "./components/TimelinePosts";
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
        <TimelineHeader profile={profile} />
      )}

      <TimelinePostForm
        content={content}
        setContent={setContent}
        handlePost={handlePost}
        loading={loading}
      />

      <TimelinePosts
        posts={posts}
        setPosts={setPosts}
        likePost={likePost}
        likeLoading={likeLoading}
        profile={profile}
      />
    </Box>
  );
}