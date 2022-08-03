import React from "react";
import { AppBar,Typography,Toolbar,Button,Stack,Container, Grid} from "@mui/material";
import{CardMedia,CardContent,CardActions,Card} from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import hotel from '../image/hotel.png'
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const NavBar=()=>{
    return (
           <div>
                <AppBar position="relative">
                    <Toolbar>
                        <PhotoCameraIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" >
                        Album layout
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm">
                <Typography
                
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
            </Container>
            <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56%',
                    }}
                    src={hotel}                   
                  />
                  <CardContent >
                    <Typography gutterBottom variant="h5" >
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
           </div>
    )
}
export default NavBar


// <Toolbar>
// <Typography variant="h6" flexGrow={1}>BlissFull Bytes</Typography>
// <Button varaint='text' color='inherit' startIcon={<LoginIcon/>}>Login</Button>
// <Button varaint='text' color='inherit' endIcon={<LogoutIcon/>}>Logout</Button>

// </Toolbar>