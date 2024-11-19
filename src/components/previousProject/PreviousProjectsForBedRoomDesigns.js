'use client'

import { Box, Container, Modal, IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

// Example project data with updated image links
const projects = [
  {
    imageSrc: 'https://i.ibb.co/7jxyRY8/DSC4480-HDR-2.jpg',
    link: '/projects/project1',
  },
  {
    imageSrc: 'https://i.ibb.co/TmqBGmC/DSC4546-HDR.jpg',
    link: '/projects/project2',
  },
  {
    imageSrc: 'https://i.ibb.co/7tzv0MQ/DSC4543-HDR.jpg',
    link: '/projects/project3',
  },
  {
    imageSrc: 'https://i.ibb.co/PgJRP1H/DSC4582-HDR.jpg',
    link: '/projects/project4',
  },
  {
    imageSrc: 'https://i.ibb.co/VQfJRtQ/DSC4615-HDR.jpg',
    link: '/projects/project5',
  },
  {
    imageSrc: 'https://i.ibb.co/6yC8q0h/DSC5203-HDR.jpg',
    link: '/projects/project6',
  },
  {
    imageSrc: 'https://i.ibb.co/Vj1kKnf/DSC5212-HDR.jpg',
    link: '/projects/project7',
  },
  {
    imageSrc: 'https://i.ibb.co/3NqxL82/DSC5299-HDR.jpg',
    link: '/projects/project8',
  },
  {
    imageSrc: 'https://i.ibb.co/m4TPBmT/DSC6623-HDR.jpg',
    link: '/projects/project9',
  },
  {
    imageSrc: 'https://i.ibb.co/znKzkfg/DSC6638-HDR.jpg',
    link: '/projects/project10',
  },
  {
    imageSrc: 'https://i.ibb.co/5x07pT6/DSC6776-HDR.jpg',
    link: '/projects/project11',
  },
  {
    imageSrc: 'https://i.ibb.co/y8tfZky/2-L1-A2856-HDR.jpg',
    link: '/projects/project12',
  },
  {
    imageSrc: 'https://i.ibb.co/09D6zCT/2-L1-A2904-HDR.jpg',
    link: '/projects/project13',
  },
]

const PreviousProjectsForBedRoomDesigns = () => {
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
            xs: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
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
            maxWidth: '90vw',
            maxHeight: '90vh',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: 24,
            p: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
          <Box
            sx={{
              width: '100%',
              maxHeight: '80vh',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              src={selectedImage}
              alt="Lightbox Image"
              layout="responsive"
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

export default PreviousProjectsForBedRoomDesigns
