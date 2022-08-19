import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

//import { useSelector } from "react-redux";

import {
  DashboardRounded,
  AccountBoxRounded,
  PeopleAltRounded,
  ManageAccountsRounded,
  AdminPanelSettings,
} from "@mui/icons-material";

import "./styles/Sidebar.css";

const Sidebar = () => {
  //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <ProSidebar className="proSidebarMain">
        <Menu iconShape="square">
          <MenuItem icon={<DashboardRounded />}>
            Dashboard
            <Link to="/" />
          </MenuItem>
          <SubMenu title="Ticket" icon={<ManageAccountsRounded />}>
            <MenuItem icon={<AdminPanelSettings />}>
              Lista de Tickets
              <Link to="/ticket/list-tickets" />
            </MenuItem>
            <MenuItem icon={<AccountBoxRounded />}>
              Registro de tickets
              <Link to="/ticket/ticket-register" />
            </MenuItem>
          </SubMenu>
          <SubMenu title="Atencion" icon={<PeopleAltRounded />}>
            <MenuItem icon={<AdminPanelSettings />}>
              Tickets pendientes
              <Link to="/atention/list-atention" />
            </MenuItem>
            <MenuItem icon={<AdminPanelSettings />}>
              Historial de atencion
              <Link to="/atention/historial-atention" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
