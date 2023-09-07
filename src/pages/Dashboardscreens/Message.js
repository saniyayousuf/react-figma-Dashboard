import { Box, Container, Paper, Typography } from '@mui/material';
import MessageIcon from "@mui/icons-material/Message";

export default function Message () {
    alert("WELCOME TO Message page")
    return (

        <>
            <Container>
      <Paper elevation={3}>
        <Box height="500px" display="flex" flexDirection="column">
            <h1>This is a Message Page</h1>
          <Typography EndIcon={<Message />} variant="h3" align="center" paddingTop="10px">
            Messaging App
          </Typography>
          
        </Box>
      </Paper>
    </Container>
        </>
    )
}