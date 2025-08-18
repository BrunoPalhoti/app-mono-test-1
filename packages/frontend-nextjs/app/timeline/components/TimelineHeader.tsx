import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export function TimelineHeader({ profile }: { profile: any }) {
  return (
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
  );
}
