import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
  Box,
  Collapse,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
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
            <ListItemIcon
              sx={{
                minWidth: 42,
              }}
            >
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
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                        }}
                      >
                        <child.Icon fontSize="small" />
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
              <ListItemIcon
                sx={{
                  minWidth: 42,
                }}
              >
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

type InformationDialogProps = {
  open: boolean;
  onClose: () => void;
};

const InformationDialog = (props: InformationDialogProps) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const contentText = (
    <Typography>
      これは、
      <Link href="https://devtoys.app" target="_blank" rel="noopener">
        DevToys
      </Link>
      を模して作成したクローンアプリです。
    </Typography>
  );

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        Information
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ p: 1 }}>
      <IconButton aria-label="info" onClick={handleClick}>
        <HelpOutlineIcon />
      </IconButton>
      <IconButton
        aria-label="info"
        target="_blank"
        href="https://github.com/yoyama92/dev-toys"
      >
        <GitHubIcon />
      </IconButton>
      <InformationDialog open={open} onClose={handleClose} />
    </Box>
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

  const theme = useTheme();
  return (
    <Drawer sx={drawerSx} variant="persistent" anchor="left" open={true}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          bgcolor: theme.palette.background.default,
        }}
      >
        <DrawerContent values={[home]} />
        <Divider />
      </Box>
      <DrawerContent values={routers} />
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          bgcolor: theme.palette.background.default,
        }}
      >
        <Divider />
        <Footer />
      </Box>
    </Drawer>
  );
};
