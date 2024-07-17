import { icons } from "../assets/icons";

export const menuItem = [
  {
    menuIcon: icons.mdspacedashboard,
    menuName: "Dashboard",
    menuLink: "/",
    subMenu: [],
  },
  {
    menuIcon: icons.gogear,
    menuName: "Service",
    menuLink: "/service",
    subMenu: [],
  },
  {
    menuIcon: icons.fahandshake,
    menuName: "Partnership",
    menuLink: "/partnership",
    subMenu: [],
  },
  {
    menuIcon: icons.iodocumenttext,
    menuName: "Articles",
    menuLink: "/articles",
    subMenu: [],
  },
  {
    menuIcon: icons.faclipboardlist,
    menuName: "Pricelist",
    menuLink: "pricelist",
    subMenu: [
      { subMenuName: "Pricelist Group", subMenuLink: "/pricelist/group" },
      { subMenuName: "Pricelist Item", subMenuLink: "/pricelist/item" },
    ],
  },
  {
    menuIcon: icons.riadvertisementfill,
    menuName: "Banner Mobile",
    menuLink: "/banner",
    subMenu: [],
  },
];
