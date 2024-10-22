import React from 'react'
import Gallery from '../../components/gallery/Gallery'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const GalleryPage = () => {
  return (
    <>
      <Box sx={{ mt: 20 }}>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Our Gallery
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mx: 'auto',
            mt: 2,
            width: {
              xs: '100%',
              md: '70%',
              lg: '50%',
            },
            color: 'gray',
            px: 5,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          perferendis maiores neque vel quaerat quod magni inventore aliquam
          consequatur voluptas.
        </Typography>

        {/* Full width image */}
        <Box
          sx={{
            mt: 8,
            width: '90%',
            height: '300px',
            position: 'relative',
            overflow: 'hidden',
            mx: 'auto',
          }}
        >
          <Image
            src="https://i.ibb.co/9gfq72M/1-2.jpg"
            alt="Gallery Image"
            layout="responsive"
            width={100} // width and height of the image in percentage
            height={50}
            style={{ objectFit: 'cover' }} // Cover to ensure it fills the container
          />
        </Box>
      </Box>

      <Gallery />
    </>
  )
}

export default GalleryPage
