import api from '@/auth/api';
import useAuth from '@/auth/useAuth';
import Navbar from '@/components/common/Navbar';
import { useEffect } from 'react';
import { toast } from 'sonner';

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
    <Navbar >
    <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
    </Navbar>
  )
}

export default Home