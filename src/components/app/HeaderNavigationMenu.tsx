import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Box, Home } from "lucide-react";
import { NavLink } from "./app/nav-link";

export function HeaderNavigationMenu(){
  return(
    <NavigationMenu>
      <NavigationMenuList className="flex justify-center gap-10 p-5">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink to={"/"}>
              <Home/>
              <span>Dashboard</span>
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink to={"/estoque"}>
              <Box/>
              <span>Estoque</span>
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}