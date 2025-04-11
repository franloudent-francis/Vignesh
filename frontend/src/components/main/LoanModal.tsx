import { Modal,Tabs,Table,ActionIcon,Button } from '@mantine/core'
import { IconPremiumRights,IconFileTypeDoc,IconFilePlus,IconPrinter,IconEdit } from '@tabler/icons-react'
import { LoanInfoIcons } from '../mantine/profileDetails/LoanInfoIcons'
import DocumentsCard from './DocumentsCard'

function LoanModal({opened,close}:{opened:boolean,close:any}) {
    const elements = [
        { insMonth: '1st', insDate: "12-01-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: '₹ 2600', entrydate: '13-01-2025', latefee: '₹ 30', latefeedays: '1', totoalfee: '₹ 30' ,ispaid:true},
        { insMonth: '2nd', insDate: "12-02-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: '₹ 2600', entrydate: '13-02-2025', latefee: '₹ 30', latefeedays: '1', totoalfee: '₹ 30' ,ispaid:true},
        { insMonth: '3rd', insDate: "12-03-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: '₹ 2600', entrydate: '13-03-2025', latefee: '₹ 30', latefeedays: '1', totoalfee: '₹ 30' ,ispaid:true},
        { insMonth: '4th', insDate: "12-04-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: '₹ 2600', entrydate: '13-04-2025', latefee: '₹ 30', latefeedays: '1', totoalfee: '₹ 30' ,ispaid:true},
        { insMonth: '5th', insDate: "12-05-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: '₹ 2600', entrydate: '13-05-2025', latefee: '₹ 30', latefeedays: '1', totoalfee: '₹ 30' ,ispaid:true},
        { insMonth: '6th', insDate: "12-06-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: '₹ 2600', entrydate: '13-06-2025', latefee: '₹ 30', latefeedays: '1', totoalfee: '₹ 30' ,ispaid:true},
        { insMonth: '7th', insDate: "12-07-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: '₹ 2600', entrydate: '13-07-2025', latefee: '₹ 30', latefeedays: '1', totoalfee: '₹ 30' ,ispaid:true},
        { insMonth: '8th', insDate: "12-08-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: '₹ 2600', entrydate: '13-08-2025', latefee: '₹ 30', latefeedays: '1', totoalfee: '₹ 30' ,ispaid:true},
        { insMonth: '9th', insDate: "12-09-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: null, entrydate: null, latefee: null, latefeedays: null, totoalfee: null ,ispaid:false},
        { insMonth: '10th', insDate: "12-10-2025", Principle: '₹ 2000', Interest: '₹ 600', emi: null, entrydate: null, latefee: null, latefeedays: null, totoalfee: null ,ispaid:false}
      ]
      const rows = elements.map((element) => (
        <Table.Tr className='bg-green-200' key={element.insMonth}>
          <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.insMonth}</Table.Td>
                <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.insDate}</Table.Td>
                <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.Principle}</Table.Td>
                <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.Interest}</Table.Td>
                <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.emi ?? "-"}</Table.Td>
                <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.entrydate ?? '-'}</Table.Td>
                <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.latefee ?? '-'}</Table.Td>
                <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.latefeedays ?? '-'}</Table.Td>
                <Table.Td className={`${element.ispaid? "bg-green-100":"bg-red-100"}`} >{element.totoalfee ?? '-'}</Table.Td>
                <Table.Td  >
                {element.ispaid? (
                      <>
                      <ActionIcon variant="outline" color="grape" aria-label="Settings">
                  
                  <IconPrinter  size={14} stroke={1.5} />
              </ActionIcon>
                        <ActionIcon className='ml-1' variant="light" color="orange" aria-label="Settings">
                <IconEdit  size={14} stroke={1.5} />
                      </ActionIcon>
                      </>
                  ):(
                      <>
                       <Button leftSection={<IconFilePlus  size={14} stroke={1.5} />} >
                 Add
                      </Button>
                      </>
                  )}
                
                </Table.Td>
        </Table.Tr>
      ));
      
  return (
    <Modal opened={opened} onClose={close} title="Loan Number : 30" size={'75%'}>
      <LoanInfoIcons/>
      <Tabs defaultValue="repayments" color="green" className='mt-5'>
      <Tabs.List justify="center"  >
        <Tabs.Tab leftSection={<IconPremiumRights size={16} />} value="repayments">Repayments</Tabs.Tab>
        <Tabs.Tab leftSection={<IconFileTypeDoc size={16} />} value="documents">Documents</Tabs.Tab>
        
      </Tabs.List>
      <Tabs.Panel value="repayments" className='py-3 h-96'>

      <Table withColumnBorders withTableBorder className=''>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Ins.month</Table.Th>
          <Table.Th>Ins. Date</Table.Th>
          <Table.Th>Principle</Table.Th>
          <Table.Th>Interset</Table.Th>
          <Table.Th>E.M.I</Table.Th>
          <Table.Th>Entry Date</Table.Th>
          <Table.Th>Late fee</Table.Th>
          <Table.Th>Late fee days</Table.Th>
          <Table.Th>Total fee </Table.Th>
          <Table.Th>Actions </Table.Th>

        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>
      <Table.Tr>
      <Table.Th></Table.Th>
      <Table.Th></Table.Th>
      <Table.Th>Pending</Table.Th>
      <Table.Th>Pending</Table.Th>
      <Table.Th>Pending</Table.Th>
      <Table.Th></Table.Th>
      <Table.Th></Table.Th>
      <Table.Th></Table.Th>
      <Table.Th>Total</Table.Th>
      <Table.Th></Table.Th>
      
    </Table.Tr>
    <Table.Tr >
      <Table.Th></Table.Th>
      <Table.Th></Table.Th>
      <Table.Th></Table.Th>
      <Table.Th>₹ 4000</Table.Th>
      <Table.Th>₹ 1200</Table.Th>
      <Table.Th></Table.Th>
      <Table.Th></Table.Th>
      <Table.Th></Table.Th>
      <Table.Th>₹ 200</Table.Th>
      <Table.Th></Table.Th>
      
    </Table.Tr>
    
      </Table.Tfoot>

    </Table>
       
       
        
      </Tabs.Panel>

      <Tabs.Panel value="documents" className='grid grid-cols-5 '>
      <DocumentsCard/>
      <DocumentsCard/>
      <DocumentsCard/>
      <DocumentsCard/>
      <DocumentsCard/>
      <DocumentsCard/>
      <DocumentsCard/>
      
      </Tabs.Panel>
        </Tabs>
    </Modal>
  )
}

export default LoanModal