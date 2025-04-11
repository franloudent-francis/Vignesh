import { truncateFilename } from '@/lib/utils'
import { Paper,ActionIcon ,Image} from '@mantine/core'
import {IconTrashFilled} from "@tabler/icons-react"
import React from 'react'

function DocumentsCard({url,filename,type}:{url:string|undefined,filename:string,type:string}) {
  
  return (
    <Paper shadow="xs" radius="md" p="sm" className='w-40 mt-6' withBorder>
    <div className='flex flex-row items-center justify-between'>
        <p className='font-semibold text-gray-500 text-sm'>{filename}</p>
        {type=='profile' ?(
          null
        ):(
          <ActionIcon variant="light" color="red" aria-label="Settings">
          <IconTrashFilled  size={14} stroke={1.5} />
          </ActionIcon>
        )}
      
    </div>
<Image
radius="md"
h={120}
w="full"
className='mt-3'
src={url}
/>
</Paper>
  )
}

export default DocumentsCard