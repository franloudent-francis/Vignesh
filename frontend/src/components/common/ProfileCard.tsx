import {
    Card,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { ChevronRight } from 'lucide-react';
  import { Button } from '@/components/ui/button';

function ProfileCard() {
  return (
    <Card className='flex flex-row items-center px-4 py-3 justify-between shadow-lg'>
    <div className='flex flex-row items-center gap-4'>
    <Avatar className='m-0'>
      <AvatarImage sizes='lg' src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div>
    <p className='text-gray-600'>John Francis J V</p>
    <p className='text-gray-500 text-sm'>9360330781</p>
    </div>
    </div>
   
    <div>
      <Button className="cursor-pointer" variant="outline" size="icon">
      <ChevronRight />
      </Button>
    
    </div>
   
  </Card>
  )
}

export default ProfileCard