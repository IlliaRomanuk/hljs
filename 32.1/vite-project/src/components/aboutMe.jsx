import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
function About() {
  return (
    <div>
      <Box sx={{ p: 3 }}>
        <Box>
          <Typography variant="h4">Ilya Romanuk</Typography>
          <Typography variant="h5">Trainee developer</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5">SUMMARY</Typography>
          <Divider />
          <Typography sx={{ mt: 2 }} variant="h6">
            Beginner Front-End developer with experience in creating single-page
            and multi-page websites based on ready-made layouts. Proficient in
            HTML5, CSS3, JavaScript, and the principles of responsive design. I
            am a fast learner, perform tasks responsibly, and strive to develop
            in the position of Trainee/Junior in real projects
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5">SKILLS</Typography>
          <Divider />
          <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
            <Chip label="JavaScript" />
            <Chip label="CSS3" />
            <Chip label="HTML5" />
            <Chip label="GIT" />
            <Chip label="GitHub" />
            <Chip label="GitLab" />
            <Chip label="Figma" />
            <Chip label="SASS" />
            <Chip label="Bootstrap" />
            <Chip label="Bash" />
            <Chip label="TailwindCSS" />
            <Chip label="node.js" />
            <Chip label="react js" />
            <Chip label="next js" />
            <Chip label="typescript" />
            <Chip label="WebStorage" />
            <Chip label="npm" />
            <Chip label="Babel" />
            <Chip label="Redux" />
            <Chip label="redux-thunk" />
            <Chip label="redux-saga" />
          </Stack>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5">EDUCATION</Typography>
          <Divider />
          <Typography sx={{ mt: 2 }} variant="h6">
            Automation, computer-integrated technologies at Professional College
            of Industrial Automation and Information Technologies of Odessa
            National Technological University (not graduated)
          </Typography>
          <Typography sx={{ mt: 2, color:"#bdbdbd" }} variant="h7">
          2023 - present
          </Typography>
        </Box>
        <Box sx={{ mt: 5,display: "flex", flexDirection: "column"}}>
          <Typography variant="h5">DDITIONAL COURSES AND TRAININGS</Typography>
          <Divider />
          <Typography sx={{ mt: 2 }} variant="h6">
          Front-end Basic at Hillel IT Schoo
          </Typography>
          <Link href="https://certificate.ithillel.ua/view/74971938">Link</Link>
          <Typography sx={{ mt: 1, color:"#bdbdbd" }} variant="h7">
          2025
          </Typography>
        </Box>
        <Box sx={{ mt: 5,display: "flex", flexDirection: "column"}}>
          <Typography variant="h5">HOBBY</Typography>
          <Divider />
          <Typography sx={{ mt: 2 }} variant="h6">
          gym, programming, active recreation, computer games.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default About;
