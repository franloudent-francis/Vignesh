import { Card, Group, Image, Badge, Text } from '@mantine/core';
import classes from './CardWithStats.module.css';
import { LoanType } from '@/types/LoanTyoes';



export function CardWithStats({loan}:{loan:LoanType}) {

  const stats = [
    { title: 'Principle', value: `₹ ${loan.loan_principle}` },
    { title: 'Interest', value: `₹ ${loan.interest_amount}` },
    { title: 'Months', value: `${loan.duration}` },
  ];
  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" fw={700} color='blue'>
        {stat.title}
      </Text>
      <Text fw={500} size="sm">
        {stat.value}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="sm" className={classes.card}>

      <Group justify="space-between" >
        <Text fz="sm" fw={700} className={classes.title}>
          loan Number : {loan.id}
        </Text>
        <Group gap={5}>

        <Badge color={loan.active?'green':'black'}>{loan.active?'Active':'Closed'}</Badge>
          
        </Group>
      </Group>
      <Text style={{minHeight:38}} mt="sm" mb="md" c="dimmed" fz="xs">
        {loan.vehicle.vehicle_name} • {loan.vehicle.vehicle_model} •{loan.vehicle.vehicle_number} • {loan.vehicle.vehicle_color} • {loan.guarantor?.name}
      </Text>
      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
}