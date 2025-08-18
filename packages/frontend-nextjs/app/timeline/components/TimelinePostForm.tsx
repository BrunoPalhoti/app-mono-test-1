import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface TimelinePostFormProps {
  title: string;
  setTitle: (v: string) => void;
  content: string;
  setContent: (v: string) => void;
  handlePost: () => void;
  loading: boolean;
}

export function TimelinePostForm({ title, setTitle, content, setContent, handlePost, loading }: TimelinePostFormProps) {
  return (
    <Box sx={{ width: "100%", maxWidth: 900, px: 4 }}>
      <Card sx={{ borderRadius: 3, mb: 3, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
        <CardContent>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" gap={2}>
            <TextField
              label="Título do post"
              variant="outlined"
              fullWidth
              value={title}
              onChange={e => setTitle(e.target.value)}
              inputProps={{ maxLength: 60 }}
              sx={{ borderRadius: 2, mb: { xs: 2, md: 0 } }}
            />
            <TextField
              label="O que você está pensando?"
              variant="outlined"
              fullWidth
              value={content}
              onChange={e => setContent(e.target.value)}
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
  );
}
