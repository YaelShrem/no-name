import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import iconPath from "../../IconLib";
import Parser from "html-react-parser";
import profile from './51f6fb256629fc755b8870c801092942.png'

const Aside = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
      <SidebarHeader className='text-center'>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          className='d-flex justify-content-center'>
          <img src={profile} className='img-fluid' style={{ height: '45%', width: '45%' }}></img>
        </div>
        <div>hello ,Yoram</div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem className='removeBG' icon={Parser(iconPath['profile'])} suffix={<span className="badge red">new</span>}>My profile</MenuItem>
          <MenuItem icon={Parser(iconPath['bar'])}>Dashboard</MenuItem>
          <MenuItem icon={Parser(iconPath['messages'])}>Messages</MenuItem>
          <MenuItem icon={Parser(iconPath['orders'])}>Orders</MenuItem>
          <MenuItem icon={Parser(iconPath['plus'])}>Add listing</MenuItem>
          <MenuItem icon={Parser(iconPath['star'])}>My Business</MenuItem>
          <MenuItem icon={Parser(iconPath['chatSquare'])}>Businesses</MenuItem>
          <MenuItem icon={Parser(iconPath['signOut'])}>Sign out</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
