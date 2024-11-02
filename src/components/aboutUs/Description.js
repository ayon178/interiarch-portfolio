// 'use client'

// import React, { useState } from 'react'
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
// } from '@mui/material'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { COLORS } from '../../constant/constant'

// const Description = () => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })

//   // State to track which card is expanded
//   const [expandedCard, setExpandedCard] = useState(null)

//   // Function to toggle the expansion of a card
//   const toggleCard = cardId => {
//     setExpandedCard(prev => (prev === cardId ? null : cardId))
//   }

//   return (
//     <Box ref={ref} sx={{ padding: 4 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             marginBottom: 4,
//             fontWeight: 'bold',
//             textAlign: 'center',
//             color: COLORS.main,
//             mt: 2,
//           }}
//         >
//           We believe in quality.
//         </Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={4}>
//             <Card
//               sx={{ boxShadow: 3, borderRadius: 2, cursor: 'pointer' }}
//               onClick={() => toggleCard('values')}
//             >
//               <CardMedia
//                 component="img"
//                 image="https://i.ibb.co/Zg8xs0P/pexels-pavel-danilyuk-6340698.jpg"
//                 alt="Dynamic Image 1"
//                 sx={{ height: 200, objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <Typography variant="h6">Our Values</Typography>
//                 <motion.div
//                   initial={{ height: 0 }}
//                   animate={{ height: expandedCard === 'values' ? 'auto' : 0 }}
//                   transition={{ duration: 0.5 }}
//                   style={{ overflow: 'hidden' }}
//                 >
//                   {expandedCard === 'values' && (
//                     <Typography variant="body2" sx={{ marginTop: 2 }}>
//                       Our core value is to ensure your well being & comfort
//                       through interior design work, Functionality & proper use
//                       of space is another major focus area, therefore we uphold
//                       our commitment to efficient design.
//                     </Typography>
//                   )}
//                 </motion.div>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card
//               sx={{ boxShadow: 3, borderRadius: 2, cursor: 'pointer' }}
//               onClick={() => toggleCard('mission')}
//             >
//               <CardMedia
//                 component="img"
//                 image="https://i.ibb.co/18K9yQq/pexels-erika-andrade-1358382831-28347064.jpg"
//                 alt="Dynamic Image 2"
//                 sx={{ height: 200, objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <Typography variant="h6">Our Mission</Typography>
//                 <motion.div
//                   initial={{ height: 0 }}
//                   animate={{ height: expandedCard === 'mission' ? 'auto' : 0 }}
//                   transition={{ duration: 0.5 }}
//                   style={{ overflow: 'hidden' }}
//                 >
//                   {expandedCard === 'mission' && (
//                     <Typography variant="body2" sx={{ marginTop: 2 }}>
//                       We are committed to enhance the quality of life of our
//                       clients through modern & practical designs. We believe in
//                       thoughtfully designed interiors to create spaces that will
//                       engage and inspire people within their home space.
//                     </Typography>
//                   )}
//                 </motion.div>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card
//               sx={{ boxShadow: 3, borderRadius: 2, cursor: 'pointer' }}
//               onClick={() => toggleCard('impact')}
//             >
//               <CardMedia
//                 component="img"
//                 image="https://i.ibb.co/HP1QDzg/3-2.jpg"
//                 alt="Dynamic Image 3"
//                 sx={{ height: 200, objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <Typography variant="h6">Our Impact</Typography>
//                 <motion.div
//                   initial={{ height: 0 }}
//                   animate={{ height: expandedCard === 'impact' ? 'auto' : 0 }}
//                   transition={{ duration: 0.5 }}
//                   style={{ overflow: 'hidden' }}
//                 >
//                   {expandedCard === 'impact' && (
//                     <Typography variant="body2" sx={{ marginTop: 2 }}>
//                       InteriArch envisions Artful Elegance through interior
//                       design within the home space of our clients. We see our
//                       journey beyond aesthetics & luxury, where we work for a
//                       improved lifestyle with efficient design work.
//                     </Typography>
//                   )}
//                 </motion.div>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </motion.div>
//     </Box>
//   )
// }

// export default Description


'use client'

import React from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { COLORS } from '../../constant/constant'

const Description = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <Box ref={ref} sx={{ padding: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            fontWeight: 'bold',
            textAlign: 'center',
            color: COLORS.main,
            mt: 2,
          }}
        >
          We believe in quality.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                image="https://i.ibb.co/Zg8xs0P/pexels-pavel-danilyuk-6340698.jpg"
                alt="Dynamic Image 1"
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">Our Values</Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Our core value is to ensure your well being & comfort through
                  interior design work. Functionality & proper use of space is
                  another major focus area, therefore we uphold our commitment
                  to efficient design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                image="https://i.ibb.co/18K9yQq/pexels-erika-andrade-1358382831-28347064.jpg"
                alt="Dynamic Image 2"
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">Our Mission</Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  We are committed to enhance the quality of life of our clients
                  through modern & practical designs. We believe in thoughtfully
                  designed interiors to create spaces that will engage and
                  inspire people within their home space.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                image="https://i.ibb.co/HP1QDzg/3-2.jpg"
                alt="Dynamic Image 3"
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">Our Impact</Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  InteriArch envisions Artful Elegance through interior design
                  within the home space of our clients. We see our journey
                  beyond aesthetics & luxury, where we work for a improved
                  lifestyle with efficient design work.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  )
}

export default Description
