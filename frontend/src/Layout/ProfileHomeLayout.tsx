import { IconPlus ,IconSearch} from '@tabler/icons-react'
import { UserButton } from '@/components/mantine/profilecard/UserButton'
import { Pagination,Button, Input } from '@mantine/core'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ProfileListType } from '@/types/ProfileTypes';
import { useEffect, useState } from 'react';
import { usePagination } from '@mantine/hooks';
import { useDebounce } from "@uidotdev/usehooks";
import api from '@/auth/api';


function ProfileHomeLayout() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [total, setTotal] = useState(0);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const fetchProfile = async (page: number, searchTerm: string) => {
    const response = await api.get<ProfileListType>(`${import.meta.env.VITE_API_URL}/profile/`,{
      params: { page,search: searchTerm },
    });
    return response.data;
  };
  const { data, error, isLoading } = useQuery<ProfileListType>({
    queryKey: ["profileList",page,debouncedSearchTerm],
    queryFn:()=> fetchProfile(page, debouncedSearchTerm)
  });
  useEffect(()=>{
    if(data){
      setTotal(data.count/1)
    }
  })
  console.log(data,'prifiledata')
  return (
    <div className='col-span-2 p-5 flex flex-col gap-5 max-h-screen overflow-scroll '>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-3xl font-bold'>Borrower Profiles</h1>
        <Button variant="light" leftSection={<IconPlus size={14} />}>
            New
        </Button>
      </div>
      <div>
        <Input autoFocus placeholder="Search by name & phone number" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} leftSection={<IconSearch size={16} />}   />
      </div>
      {data?.results.map((item,index)=>(
        <UserButton  key={index} data = {item}/>
      ))}
      
     
      {
        total > 1 && 
          <Pagination value={page} onChange={(page) => setPage(page)} style={{width:"300px",margin:'auto'}}  total={total} />

        
      }
     
      
      </div>
  )
}

export default ProfileHomeLayout