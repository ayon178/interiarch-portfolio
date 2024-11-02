import MainSlider from '../components/Slider'
import SummaryInformation from '../components/SummaryInformation'
import ClientTestimonial from '../components/ClientTestimonial'
import ScheduleMeeting from '../components/ScheduleMeeting'
import ServiceList from '../components/ServiceList'
import Gallery from '../components/gallery/Gallery'
import Tagline from '../components/TagLine'

const page = () => {
  return (
    <>
      <MainSlider />
      <SummaryInformation />
      <ServiceList />
      <Tagline />
      <Gallery />
     

      <ClientTestimonial />
      <ScheduleMeeting />
    </>
  )
}

export default page

// 'use client'
// // pages/index.js

// import { Container, Typography, Button } from '@mui/material'
// import { motion } from 'framer-motion'

// const pageVariants = {
//   initial: { opacity: 0, y: 100 },
//   in: { opacity: 1, y: 0 },
//   out: { opacity: 0, y: -50 },
// }

// const titleVariants = {
//   initial: { scale: 0.8, opacity: 0 },
//   in: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
// }

// const subtitleVariants = {
//   initial: { x: -100, opacity: 0 },
//   in: { x: 0, opacity: 1, transition: { duration: 0.5 } },
// }

// export default function ComingSoon() {
//   return (
//     <Container
//       component={motion.div}
//       variants={pageVariants}
//       initial="initial"
//       animate="in"
//       exit="out"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         bgcolor: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient background
//         // color: '#fff',
//         textAlign: 'center',
//         padding: 2,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <motion.div variants={titleVariants}>
//         <Typography variant="h2" gutterBottom>
//           Coming Soon!
//         </Typography>
//       </motion.div>
//       <motion.div variants={subtitleVariants}>
//         <Typography variant="h5" gutterBottom>
//           We&apos;re working hard to launch our new site.
//         </Typography>
//       </motion.div>

//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{
//           scale: 1,
//           opacity: 0.1,
//           transition: { duration: 2, ease: 'easeInOut' },
//         }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         sx={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: '50%',
//           background: 'rgba(0, 0, 0, 0.2)', // Semi-transparent overlay
//         }}
//       />
//     </Container>
//   )
// }
