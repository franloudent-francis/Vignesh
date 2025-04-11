import { IconChevronRight } from '@tabler/icons-react';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import classes from './UserButton.module.css';
import { ProfileType } from '@/types/ProfileTypes';
import { useNavigate } from 'react-router';


interface Props{
  data:ProfileType
}
export function UserButton(props:Props) {
  const navigate = useNavigate()

  return (
    <UnstyledButton onClick={()=>navigate(`/${props.data.id}`)} className={classes.user}>
      <Group>
        <Avatar
          src={props.data.photo}
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
           {props.data.name}
          </Text>

          <Text c="dimmed" size="xs">
            {props.data.phone_number}
          </Text>
        </div>

        <IconChevronRight size={14} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}