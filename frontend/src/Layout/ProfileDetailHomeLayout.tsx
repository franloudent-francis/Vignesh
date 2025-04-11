import api from "@/auth/api";
import DocumentsCard from "@/components/main/DocumentsCard";
import LoanModal from "@/components/main/LoanModal";
import { CardWithStats } from "@/components/mantine/loanscard/CardWithStats";
import { UserInfoIcons } from "@/components/mantine/profileDetails/UserInfoIcons";
import { LoanType } from "@/types/LoanTyoes";
import { ProfileType } from "@/types/ProfileTypes";
import { Button, Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {IconPlus,IconPremiumRights,IconFileTypeDoc, IconEdit, IconTrash} from '@tabler/icons-react'
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";




function ProfileDetailHomeLayout() {
  const [opened, { open, close }] = useDisclosure(false);
  const {id} = useParams()

  const fetchProfile = async (id:number|undefined) => {
    const response = await api.get<ProfileType>(`${import.meta.env.VITE_API_URL}/profile/${id}`,);
    return response.data;
  };

  const fetchLoans = async (id:number) => {
    const response = await api.get(`${import.meta.env.VITE_API_URL}/loans/profile/${id}`,);
    return response.data;
  }


    const {data :profileData} = useQuery<ProfileType>({
      queryKey:['profile',id],
      queryFn:()=>fetchProfile(parseInt(id||'0')),
      enabled:!!id && parseInt(id) > 0
    })

    const {data:loansData} = useQuery<LoanType[]>({
      queryKey:['loans',id],
      queryFn:()=>fetchLoans(parseInt(id||'0')),
      enabled:!!id && parseInt(id) > 0
    })

    

  if(id == undefined){
    return(
      <div className="m-auto col-span-3 col-start-3">
        <p>Please select a profile</p>
      </div>
    )
  }

    console.log(loansData,'loan details')
  

  return (
    <div className='col-span-3 col-start-3 mx-2  p-5 max-h-screen overflow-scroll'>
      <div className="mb-3 flex flex-row justify-between items-center ">
        <h3 className="text-xl font-bold ">Profile Details</h3>
        <div className="flex flex-row items-center gap-1.5">
          <Button size="xs" leftSection={<IconEdit size={16}/>}  color="yellow">
              Edit
          </Button>
          <Button size="xs" leftSection={<IconTrash size={16}/>} color="red">
              Delete
          </Button>
        </div>

      </div>
        <UserInfoIcons data={profileData||null}/>
        <Tabs defaultValue="loans" color="green" className='mt-5'>
      <Tabs.List justify="center"  >
        <Tabs.Tab leftSection={<IconPremiumRights size={16} />} value="loans">Loans</Tabs.Tab>
        <Tabs.Tab leftSection={<IconFileTypeDoc size={16} />} value="documents">Documents</Tabs.Tab>
        
      </Tabs.List>
      <Tabs.Panel value="loans" className='pt-3'>

        <div className='grid grid-cols-3'>

          {
            loansData?.map((loan:LoanType)=>(
              <div key={loan.id} onClick={open} className='w-60 mt-6 cursor-pointer shadow'>
              <CardWithStats loan={loan} />
              </div>
            ))
          }
        
       

        </div>
       
        <LoanModal opened = {opened} close={close}/>
        
      </Tabs.Panel>

      <Tabs.Panel value="documents" className='grid grid-cols-4 '>
       
      <DocumentsCard type="profile" url = {profileData?.pan_card_file} filename = "PAN Card"/>
      <DocumentsCard type="profile" url = {profileData?.aadhaar_file} filename = "Aadhaar Card"/>
      
      
      </Tabs.Panel>
        </Tabs>
       </div>
  );
}

export default ProfileDetailHomeLayout