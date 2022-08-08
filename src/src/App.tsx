import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';
import urlJoin from 'url-join';

import { DrawerComponent } from '@/components/drawer';
import { TitleComponent } from '@/components/title';
import { AllTools } from '@/features/allTools';
import { provider as convertersProvider } from '@/features/converters/provider';
import { ToolProvider } from '@/types/toolProvider';

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: 0,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: theme.spacing(6),
  marginRight: theme.spacing(6),
  paddingTop: theme.spacing(3),
  height: '100%',
}));

type RouterProps = Pick<
  ToolProvider,
  'menu' | 'link' | 'element' | 'children' | 'title'
>;

type HomeRouterProps = Pick<
  ToolProvider,
  'menu' | 'link' | 'element' | 'title'
>;

type MainComponentProps = {
  home: HomeRouterProps;
  routers: RouterProps[];
};

const MainComponent = ({ home, routers }: MainComponentProps) => {
  return (
    <Main>
      <Routes>
        <Route
          key={home.menu}
          path={home.link}
          element={
            <>
              <TitleComponent title={home.title} />
              {home.element}
            </>
          }
        />
        {routers.map((router) => {
          return router.children ? (
            <Route key={router.menu} path={router.link}>
              {router.children.map((child) => {
                const element = (
                  <>
                    <TitleComponent title={child.title} />
                    {child.element}
                  </>
                );
                return (
                  <Route key={child.menu} path={child.link} element={element} />
                );
              })}
            </Route>
          ) : (
            <Route
              key={router.menu}
              path={router.link}
              element={
                <>
                  <TitleComponent title={router.title} />
                  {router.element}
                </>
              }
            />
          );
        })}
      </Routes>
    </Main>
  );
};

export const App = () => {
  const toolProviders: ToolProvider[] = [convertersProvider];
  const flatToolProviders = toolProviders.flatMap((provider) => {
    return provider.children
      ? provider.children.map((child) => {
          const path = urlJoin(provider.link, child.link);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { link, ...otherItem } = child;
          return {
            link: path,
            ...otherItem,
          };
        })
      : [provider];
  });

  const allToolsProvider: ToolProvider = {
    menu: 'All tools',
    title: 'All Tools',
    Icon: HomeIcon,
    element: <AllTools tools={flatToolProviders} />,
    link: '/',
    description: '',
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const drawerWidth = 240;

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <CssBaseline />
          <DrawerComponent
            home={allToolsProvider}
            routers={toolProviders}
            width={drawerWidth}
          />
          <MainComponent home={allToolsProvider} routers={toolProviders} />
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
