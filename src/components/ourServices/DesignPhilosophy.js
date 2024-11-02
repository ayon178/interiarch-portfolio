// pages/index.js
import { Box, Container, Grid, Typography } from '@mui/material'

export default function DesignPhilosophy() {
  return (
    <Box sx={{ py: 4, backgroundColor: '#fbf5f2' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 1 }}
        >
          Why Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 6,
            width: {
              xs: '100%',
              sm: '95%',
              md: '50%',
            },
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          At InteriArch, we cover all aspects of interior design & construction,
          as well as ensure the objectives of interior design are well
          completed.
        </Typography>

        {/* First Section */}
        <Grid container spacing={4} sx={{ mb: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src="https://i.ibb.co/NVyJH0Q/2-1.jpg" // Replace with your actual image path
                alt="Improved functionality "
                style={{
                  width: '100%',
                  height: 'auto',
                  // maxHeight: '450px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Improved Functionality & Space Utilization
            </Typography>
            <Typography variant="body1" paragraph>
              <span style={{ fontSize: '1.6rem' }}>E</span>
              ffective interior design, be it for homes, offices or any space
              enhances the functionality of inner environment. Thoughtfully
              planed layouts align with intended purposes, fostering
              productivity and satisfaction.Making spaces more conductive to
              their unique activities. Also making the best use of available
              space as in urban area empty space is limited.
            </Typography>
            {/* <Typography variant="body1" paragraph>
            We craft spaces that are both visually striking and functional,
            using materials and forms that work in harmony with the environment.
          </Typography> */}
          </Grid>
        </Grid>

        {/* Second Section */}
        <Grid container spacing={4} sx={{ my: 6 }} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Well-being & Comfort
            </Typography>
            <Typography variant="body1" paragraph>
              <span style={{ fontSize: '1.6rem' }}>P</span>roperly planned and
              thoughtfully prepared interior contributes to the well being &
              comfort of occupants. Elements such as ergonomic furniture, proper
              lighting and efficient ventilation can have a very positive impact
              on health & overall comfort level in the home.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box>
              <img
                src="https://i.ibb.co/bbypvc9/5-1.jpg" // Replace with your actual image path
                alt="Well being & comfort"
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Third Section */}
        <Grid container spacing={4} sx={{ mt: 6, mb: 3 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src="https://i.ibb.co/VD3P456/2-2.jpg" // Replace with your actual image path
                alt="Property Value"
                style={{
                  width: '100%',
                  height: 'auto',
                  // maxHeight: '450px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Property Value
            </Typography>
            <Typography variant="body1" paragraph>
              <span style={{ fontSize: '1.6rem' }}>I</span>
              nterior design is not only for artistic beauty or better
              functions, it can highly increase the property value of any real
              estate. Quality materials & appealing design add value to the
              property and make it more suitable choice to buyers by increasing
              it&apos;s usability.
            </Typography>
            {/* <Typography variant="body1" paragraph>
            We craft spaces that are both visually striking and functional,
            using materials and forms that work in harmony with the environment.
          </Typography> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
