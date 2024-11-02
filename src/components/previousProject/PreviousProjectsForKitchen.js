'use client'

import { Box, Container, Modal, IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Kitchen1 from '../../assets/Interior-Portfolio-Images/Kitchen/01 - Copy.jpg'
import Kitchen2 from '../../assets/Interior-Portfolio-Images/Kitchen/04.jpg'
import Kitchen3 from '../../assets/Interior-Portfolio-Images/Kitchen/07 - Copy.jpg'
import Kitchen4 from '../../assets/Interior-Portfolio-Images/Kitchen/21.jpg'
import Kitchen5 from '../../assets/Interior-Portfolio-Images/Kitchen/22.jpg'
import Kitchen6 from '../../assets/Interior-Portfolio-Images/Kitchen/22.png'
import Kitchen7 from '../../assets/Interior-Portfolio-Images/Kitchen/23.jpg'
import Kitchen8 from '../../assets/Interior-Portfolio-Images/Kitchen/23.png'
import Kitchen9 from '../../assets/Interior-Portfolio-Images/Kitchen/2L1A3561-HDR.jpg'
import Kitchen10 from '../../assets/Interior-Portfolio-Images/Kitchen/2L1A3573-HDR.jpg'
import Kitchen11 from '../../assets/Interior-Portfolio-Images/Kitchen/_DSC5272-HDR.jpg'
import Kitchen12 from '../../assets/Interior-Portfolio-Images/Kitchen/_DSC6797-HDR.jpg'

// Example project data
const projects = [
  {
    imageSrc: Kitchen1,
    link: '/projects/project1',
  },
  {
    imageSrc: Kitchen2,
    link: '/projects/project2',
  },
  {
    imageSrc: Kitchen3,
    link: '/projects/project3',
  },
  {
    imageSrc: Kitchen4,
    link: '/projects/project4',
  },
  {
    imageSrc: Kitchen5,
    link: '/projects/project5',
  },
  {
    imageSrc: Kitchen6,
    link: '/projects/project6',
  },
  {
    imageSrc: Kitchen7,
    link: '/projects/project7',
  },
  {
    imageSrc: Kitchen8,
    link: '/projects/project8',
  },
  {
    imageSrc: Kitchen9,
    link: '/projects/project9',
  },
  {
    imageSrc: Kitchen10,
    link: '/projects/project10',
  },
  {
    imageSrc: Kitchen11,
    link: '/projects/project11',
  },
  {
    imageSrc: Kitchen12,
    link: '/projects/project12',
  },
]

const PreviousProjectsForKitchen = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [openLightbox, setOpenLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const imageVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  }

  const handleImageClick = image => {
    setSelectedImage(image)
    setOpenLightbox(true)
  }

  const handleCloseLightbox = () => {
    setOpenLightbox(false)
    setSelectedImage(null)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box
        ref={ref}
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            // href={project.link}
            style={{
              display: 'block',
              overflow: 'hidden',
              borderRadius: '12px',
            }}
          >
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover="hover"
              style={{
                display: 'block',
                overflow: 'hidden',
                borderRadius: '12px',
                position: 'relative',
                width: '100%',
                height: '200px', // Consistent container height
              }}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                }}
                whileHover={{ scale: 1.1 }} // Only the image zooms in
              >
                <Image
                  src={project.imageSrc}
                  alt={`Project ${index + 1}`}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover"
                  style={{
                    borderRadius: '12px',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleImageClick(project.imageSrc)}
                />
              </motion.div>
            </motion.div>
          </a>
        ))}
      </Box>

      {/* Lightbox Modal */}
      <Modal
        open={openLightbox}
        onClose={handleCloseLightbox}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '90vw',
            maxHeight: '90vh',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: 24,
            p: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // Responsive width for small and medium devices
            width: {
              xs: '100%', // For small devices
              sm: '100%', // For small devices
              md: '60%', // For medium devices
            },
          }}
        >
          <IconButton
            onClick={handleCloseLightbox}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Responsive Image inside the Lightbox */}
          <Box
            sx={{
              width: '100%',
              maxHeight: '80vh', // To ensure the image doesn't overflow the modal
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              src={selectedImage}
              alt="Lightbox Image"
              layout="responsive" // Responsive layout
              width={800}
              height={600}
              objectFit="contain"
              style={{
                borderRadius: '12px',
                backgroundColor: '#000',
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Container>
  )
}

export default PreviousProjectsForKitchen
