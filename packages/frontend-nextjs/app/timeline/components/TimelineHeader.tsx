import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { Profile } from "../type/Profile";
import { AnimatedBorder, containerSx, avatarSx, buttonSx } from "../styles/timelineHeaderStyles";


export function TimelineHeader({ profile }: { profile: Profile }) {
  const router = useRouter();
  return (
    <Box sx={containerSx}>
      <Box sx={{ position: "relative", display: "inline-flex", mr: { sm: 3 }, mb: { xs: 2, sm: 0 } }}>
        <Avatar src={profile.avatar} alt={profile.name} sx={avatarSx} />
        <AnimatedBorder />
      </Box>
      <Box flex={1} minWidth={0} sx={{ mr: { sm: 3 }, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5" fontWeight={700} sx={{ color: "#fff", mb: 0.5 }}>
          {profile.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>
          {profile.profileType}
        </Typography>
      </Box>
      <Button variant="contained" sx={buttonSx} onClick={() => router.push("/profile")}>Editar perfil</Button>
   
    </Box>
  );
}
