// components/TaglineSection.js
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function Tagline() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f5efe0',
      }}
    >
      {/* Left side image (will be at the bottom on small devices) */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' },
          mt: { xs: '2rem', md: '0' }, // Add margin-top for small screens
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '500px' }, // Set max-width for responsiveness
            width: '100%',
          }}
        >
          <Image
            src="https://i.ibb.co/zGfvk73/tagline.jpg"
            alt="Chair and plant"
            width={500} // Native image size to maintain quality
            height={200}
            layout="responsive" // Makes the image responsive
            style={{ objectFit: 'cover' }} // `objectFit: cover` to handle aspect ratio
          />
        </Box>
      </Box>

      {/* Right side text (will be vertically centered) */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Vertically center the content
          // paddingRight: { md: '2rem' },
          height: '100%', // Ensure the box takes up the full height
          padding: {
            xs: '0.5rem',
            md: '0',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.7rem', md: '2.5rem' },
            fontWeight: 400,
            color: '#595959', // Adjust based on the design
            textAlign: { xs: 'center', lg: 'left' }, // Center text on small devices
          }}
        >
          We bring elegance
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.7rem', md: '2.5rem' },
            fontWeight: 600,
            color: '#595959',
            mt: '0.5rem',
            borderBottom: '10px solid #595959',
            paddingBottom: 2,
            width: 'fit-content',
            margin: { xs: '0 auto', lg: '0' }, // Center align the text on small devices
            textAlign: { xs: 'center', lg: 'left' },
          }}
        >
          through interior design
        </Typography>
      </Box>
    </Box>
  )
}
