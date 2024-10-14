import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

export default function DesignSection2({ image, heading, para, imgRight, uri }) {
  return (
    <Container maxWidth="lg" id={uri}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: imgRight ? 'row-reverse' : 'row' }, // Column on small devices, row on larger
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem',
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'right' }, // Center on small devices
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
            justifyContent: { xs: 'center', md: 'flex-start' }, // Center on small, right on medium
            mt: { xs: '2rem', md: '0' }, // Add margin-top on small devices
            maxWidth: { xs: '100%', md: '500px' }, // Responsive image width
          }}
        >
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              height: '600px',
              paddingTop: 5,
              paddingLeft: 10,
            }}
          >
            {/* Top Image */}
            <Image
              src={image}
              alt="Living Space Design"
              width={400}
              height={450}
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
                zIndex: 14, // Keep the image on top
                position: 'relative', // Ensure image is relative to parent container
              }}
            />

            {/* Color Section Below the Image */}
            <Box
              sx={{
                width: '80%',
                height: '540px', // Adjust the height of the colored box
                backgroundColor: '#f0e4d7', // Custom color (can adjust)
                position: 'absolute',
                top: '-20px', // Move it below the image
                right: '3rem', // Adjust the 'left' to shift it to the right for stacking effect
                zIndex: 12, // Keep the color box below the image but above the border
              }}
            />

            {/* Border Section */}
            <Box
              sx={{
                width: '80%',
                height: '520px', // Height of the bottom bordered box
                border: '2px solid gray', // Border around the box
                position: 'absolute',
                top: '20px', // Position below the color box
                right: '4rem', // Shift it to the right and down for stacking effect
                zIndex: 10, // Ensure the border stays behind both the image and color box
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
