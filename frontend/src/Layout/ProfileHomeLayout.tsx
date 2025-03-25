import ProfileCard from '@/components/common/ProfileCard'
import { SearchForm } from '@/components/search-form'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


function ProfileHomeLayout() {
  return (
    <div className="col-span-2 p-5 flex flex-col gap-5 max-h-screen overflow-scroll ">
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-3xl font-bold'>Borrower Profiles</h1>
        <Button>
        <Plus /> New
        </Button>
      </div>
      <div>
        <SearchForm/>
      </div>
      
    <ProfileCard/>
    <ProfileCard/>
    <ProfileCard/>
    <ProfileCard/>
    <ProfileCard/>
    <ProfileCard/>
    
    <ProfileCard/>
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  )
}

export default ProfileHomeLayout