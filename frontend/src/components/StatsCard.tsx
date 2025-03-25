import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface props {
  title: string
  amount: string
  subtitle: string
}
export function StatsCard(props:props) {
  return (
    <div className="*:data-[slot=card]:shadow-xs px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>{props.title}</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          ₹ {props.amount}
          
          </CardTitle>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
           {props.subtitle}
            {/* <TrendingUpIcon className="size-4" /> <TrendingDownIcon className="size-4" /> */}
          </div>
         
        </CardFooter>
      </Card>
      
    </div>
  )
}
