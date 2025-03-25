import api from '@/auth/api';
import useAuth from '@/auth/useAuth';
import Navbar from '@/components/common/Navbar';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { StatsCard } from '@/components/StatsCard';
import ProfileHomeLayout from '@/Layout/ProfileHomeLayout';
import ProfileDetailHomeLayout from '@/Layout/ProfileDetailHomeLayout';


function Home() {
    const {isAuthorized} = useAuth()

    const testapi = async() => {
      await api.get('/test').then((res)=>{
        console.log(res.data) 
        toast.success("Test api success")
      }).catch((err)=>console.log(err))
        
    }
    useEffect(()=>{
      if(isAuthorized){
        testapi()
      }
     
    },[isAuthorized])
  return (
    <Navbar>
      <div className="grid grid-cols-3 my-5">
        <StatsCard
          title="Total Revenue"
          amount="1,250.00"
          subtitle="Last 30 days"
        />
        <StatsCard
          title="Total Revenue"
          amount="1,250.00"
          subtitle="Trending up this Year"
        />
        <StatsCard
          title="Total Revenue"
          amount="1,250.00"
          subtitle="Trending up this Year"
        />
      </div>

      <div className="grid grid-cols-5 h-screen gap-2">
       <ProfileHomeLayout/>
       <ProfileDetailHomeLayout/>
      </div>
    </Navbar>
  );
}

export default Home