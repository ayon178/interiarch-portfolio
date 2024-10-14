import { Typography } from '@mui/material'
import PreviousProjects from '../components/PreviousProjects'
import RoomStyles from '../components/RoomStyles'
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
      {/* <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginTop: 10,
          paddingLeft: 5,
          paddingRight: 5,
          textAlign:'center'
        }}
      >
        Our Portfolio
      </Typography>
      <RoomStyles /> */}
      <Gallery />

      <ClientTestimonial />
      <ScheduleMeeting />
    </>
  )
}

export default page
