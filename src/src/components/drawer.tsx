import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import urlJoin from 'url-join';

import { ToolProvider } from '@/types/toolProvider';

type ListItem = Pick<ToolProvider, 'menu' | 'Icon' | 'link' | 'children'>;

type NestedListProps = {
  value: ListItem;
};

const NestedList = ({ value }: NestedListProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { menu, Icon, children, link } = value;
  return (
    <>
      {children ? (
        <>
          <ListItemButton onClick={handleClick} sx={{ py: '1' }}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={menu} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((child) => {
                const path = urlJoin(link, child.link);
                return (
                  <NavLink key={child.menu} to={path}>
                    <ListItemButton
                      sx={{ pl: 4, py: 0.5 }}
                      selected={location.pathname === path}
                    >
                      <ListItemIcon>
                        <child.Icon />
                      </ListItemIcon>
                      <ListItemText primary={child.menu} />
                    </ListItemButton>
                  </NavLink>
                );
              })}
            </List>
          </Collapse>
        </>
      ) : (
        <>
          <NavLink to={link}>
            <ListItemButton
              sx={{ py: 1 }}
              selected={location.pathname === link}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={value.menu} />
            </ListItemButton>
          </NavLink>
        </>
      )}
    </>
  );
};

type DrawerContentProps = {
  values: ListItem[];
};

const DrawerContent = ({ values }: DrawerContentProps) => {
  return (
    <List component="nav">
      {values.map((value) => {
        return <NestedList key={value.menu} value={value} />;
      })}
    </List>
  );
};

type DrawerComponentProps = {
  home: ListItem;
  routers: ListItem[];
  width: number;
};

export const DrawerComponent = ({
  home,
  routers,
  width,
}: DrawerComponentProps) => {
  const drawerSx = {
    width: width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: width,
      boxSizing: 'border-box',
    },
  };
  return (
    <Drawer sx={drawerSx} variant="persistent" anchor="left" open={true}>
      <DrawerContent values={[home]} />
      <Divider />
      <DrawerContent values={routers} />
    </Drawer>
  );
};
