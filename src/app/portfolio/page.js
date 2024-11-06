import React from 'react'
import PreviousProjects from '../../components/previousProject/PreviousProjects'
import DesignSection from '../../components/portfolio/DesignSection'
import Banner from '../../components/portfolio/Banner'

import DesignSection2 from '../../components/portfolio/DesignSection2'
import PreviousProjectsForBedRoomDesigns from '../../components/previousProject/PreviousProjectsForBedRoomDesigns'
import PreviousProjectsForKitchen from '../../components/previousProject/PreviousProjectsForKitchen'
import PreviousProjectsForDining from '../../components/previousProject/PreviousProjectsForDining'

const PreviousProject = () => {
  return (
    <>
      {/* <PortfolioSummary /> */}
      <Banner />
      <DesignSection
        heading="Living Space"
        image={
          'https://i.ibb.co/9nhwN8B/Whats-App-Image-2024-11-03-at-13-51-25-1a1dc75e.jpg'
        }
        para="View our living space designs."
        imgRight={false}
        uri="living-space"
      />
      {/* <Gallery /> */}
      <PreviousProjects />
      <DesignSection2
        heading="Bedroom Designs"
        image={
          'https://i.ibb.co/cwYq7xP/Whats-App-Image-2024-11-03-at-13-51-26-8f79bef0.jpg'
        }
        para="View our living bedroom designs."
        imgRight={true}
        uri="bedroom-designs"
      />
      <PreviousProjectsForBedRoomDesigns />
      <DesignSection
        heading="Kitchen"
        image="https://i.ibb.co/74YVqfc/Whats-App-Image-2024-11-03-at-13-51-26-d96bd839.jpg"
        para="View our living kitchen designs."
        imgRight={false}
        uri="kitchen"
      />
      <PreviousProjectsForKitchen />
      <DesignSection2
        heading="Dining room Designs"
        image={
          'https://i.ibb.co/brn8VBc/Whats-App-Image-2024-11-03-at-13-51-26-165e41e9.jpg'
        }
        para="View our living dining room designs."
        imgRight={true}
        uri="dining-room"
      />
      <PreviousProjectsForDining />
      {/* <RoomCategory /> */}
    </>
  )
}

export default PreviousProject
