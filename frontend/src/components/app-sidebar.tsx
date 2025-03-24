import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useLocation } from "react-router"





export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {pathname}= useLocation()
  console.log(pathname)
  const data = 
  [
    
    {
      title: "",
      url: "",
      items: [
        {
          title: "Home",
          url: "/",
          isActive: pathname==="/",
        },
        {
          title: "Your routes",
          url: "/test",
          isActive: pathname==="/test",
          
        }
      ],
    },
    
  ]
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h3 className="text-2xl font-bold ml-2 mt-3">Sri kumaran App</h3>
        
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.map((item) => (
          <SidebarGroup key={item?.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive} >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
