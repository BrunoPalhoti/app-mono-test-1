import { Avatar, Box } from '@mui/material';

interface ProfileAvatarProps {
  name: string;
  avatar?: string;
}

export default function ProfileAvatar({ name, avatar }: ProfileAvatarProps) {
  return (
    <Box sx={{ position: "relative", mb: 3 }}>
      <Avatar src={avatar || 'https://via.placeholder.com/150'} alt={name} sx={{ width: 130, height: 130, border: "5px solid #fff", zIndex: 1, boxShadow: "0 6px 24px rgba(0,0,0,0.18)" }} />
      <Box sx={{
        position: "absolute",
        top: -8,
        left: -8,
        width: "146px",
        height: "146px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00D084, #00B877, #009966, #1e293b)",
        animation: "spin 7s linear infinite",
        zIndex: 0,
        opacity: 0.7,
      }} />
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
}
