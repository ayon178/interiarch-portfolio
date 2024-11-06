import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

export default function DesignSection({ image, heading, para, imgRight, uri }) {
  return (
    <Container maxWidth="lg" id={uri}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: imgRight ? 'row-reverse' : 'row',
          }, // Column on small devices, row on larger
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: {
            xs: '8px',
            md: '2rem',
          },
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'left' }, // Center on small devices
            padding: { xs: '1rem 0', md: '0 2rem' },
            marginTop: { xs: 0, md: '-2rem' },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: '#595959',
              fontSize: { xs: '1.8rem', md: '2.2rem' }, // Responsive font size
              mb: 1,
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#595959',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            {para}
          </Typography>
        </Box>

        {/* Image and Decoration Section */}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' }, // Center on small, right on medium
            mt: { xs: '2rem', md: '0' }, // Add margin-top on small devices
            maxWidth: { xs: '100%', md: '500px' }, // Responsive image width
          }}
        >
          {/* <Box
            sx={{
              width: '100%',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              height: { xs: '200px', md: '500px' },
              paddingTop: 5,
            }}
          > */}
            {/* Top Image */}
            <Image
              src={image}
              alt="Living Space Design"
              width={400}
              height={300}
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
                zIndex: 14, 
                position: 'relative', 
                width: { xs: '200px', md: '400px' },
              }}
            />

            
            {/* <Box
              sx={{
                width: '80%',
                height: '390px', 
                backgroundColor: '#f0e4d7', 
                position: 'absolute',
                top: '-20px', 
                left: '40px', 
                zIndex: 12, 
              }}
            /> */}

            
            {/* <Box
              sx={{
                width: '80%',
                height: '370px', 
                border: '2px solid gray', 
                position: 'absolute',
                top: '20px', 
                left: '55px', 
                zIndex: 10, 
              }}
            /> */}
          {/* </Box> */}
        </Box>
      </Box>
    </Container>
  )
}
