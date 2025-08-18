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
    title,
    setTitle,
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
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e293b 0%, #00B877 100%)",
        position: "relative",
        overflow: "hidden",
        p: { xs: 1, md: 3 },
      }}
    >
      {profile && (
        <TimelineHeader profile={profile} />
      )}

      <TimelinePostForm
        title={title}
        setTitle={setTitle}
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