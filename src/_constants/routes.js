// Icons
import {
  ListAlt,
  Dashboard as DashboardIcon,
  PeopleAlt,
  Sell
} from "@mui/icons-material";

export const APP = Object.freeze({
  DASHBOARD: {
    name: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon
  },
  ORDERS: {
    name: "Orders",
    path: "/orders",
    icon: ListAlt
  },
  CUSTOMER: {
    name: "Customers",
    path: "/customers",
    icon: PeopleAlt
  },
  PRODUCTS: {
    name: "Products",
    path: "/products",
    icon: Sell
  }
});
