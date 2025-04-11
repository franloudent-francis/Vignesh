import { HeaderTabs } from '@/components/mantine/HeaderTabs'
import { StatsGridIcons } from '@/components/mantine/stats/StatsGridIcons'
import ProfileHomeLayout from '@/Layout/ProfileHomeLayout'
import ProfileDetailHomeLayout from '@/Layout/ProfileDetailHomeLayout'
import { createContext, useState } from 'react'

function DashBoard() {
  const [profileId, setProfileId] = useState(0);
 
  return (
  
    <div className='overflow-hidden '>
        <HeaderTabs/>
        {/* <StatsGridIcons/> */}
        <div className="grid grid-cols-5  gap-2 min-h-screen">
     <ProfileHomeLayout />
      <ProfileDetailHomeLayout />
      </div>
    </div>
    
  )
}


export default DashBoard