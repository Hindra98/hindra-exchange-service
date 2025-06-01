import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../sidebar";

export function AppSidebar({ title, position, items, link }: SidebarProps) {
  return (
    <Sidebar className={position}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold text-primary/50">
            {title}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, idx) =>
                item?.separator ? (
                  <SidebarSeparator key={idx} />
                ) : (
                  <SidebarMenuItem key={item?.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.url.toLowerCase().includes(link)}
                    >
                      <Link to={item?.url} reloadDocument={true}>
                        {item?.icon}
                        <span>{item?.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
