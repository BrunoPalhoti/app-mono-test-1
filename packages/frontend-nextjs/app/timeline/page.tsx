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
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        background: "linear-gradient(135deg, #1e293b 0%, #00B877 100%)",
        position: "relative",
        overflow: "hidden",
      }}
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