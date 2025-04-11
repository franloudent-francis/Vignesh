import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Group, Text } from '@mantine/core';
import classes from './UserInfoIcons.module.css';
import { ProfileType } from '@/types/ProfileTypes';

export function UserInfoIcons({data}:{data:ProfileType|null}) {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar
          src={data?.photo}
          size={140}
          radius="md"
        />
        <div>
          <Text fz="sm" tt="uppercase" fw={700} c="dimmed">
            Name
          </Text>
          <Text fz="sm" tt="uppercase" fw={700} c="dimmed">
            Phone
          </Text>
          <Text fz="sm" tt="uppercase" fw={700} c="dimmed">
           occupation
          </Text>
          <Text fz="sm" tt="uppercase" fw={700} c="dimmed">
            Aadhar Number
          </Text>
          <Text fz="sm" tt="uppercase" fw={700} c="dimmed">
            Pan Number
          </Text>
          <Text fz="sm" tt="uppercase" fw={700} c="dimmed">
            Address
          </Text>

        </div>
        <div>
          <Text fz="sm" fw={600} >
           {data?.name}
          </Text>
          <Text fz="sm" fw={600} >
           {data?.phone_number}
          </Text>
          <Text fz="sm" fw={600} >
           {data?.occupation}
          </Text>
          <Text fz="sm" fw={600} >
           {data?.aadhaar_number}
          </Text>
          <Text fz="sm" fw={600} >
           {data?.pan_number}
          </Text>
          <Text fz="sm" fw={600} >
           {data?.address}
          </Text>
         

        </div>

       
      </Group>
    </div>
  );
}