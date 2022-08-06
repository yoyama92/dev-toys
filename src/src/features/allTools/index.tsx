import { NavLink } from 'react-router-dom';

import { Card, CardContent, Grid, Typography } from '@mui/material';

import { TitleComponent } from '@/components/title';
import { ToolProvider } from '@/types/toolProvider';

type PageProps = {
  tools: ToolCardProps[];
};

type ToolCardProps = Pick<
  ToolProvider,
  'menu' | 'description' | 'link' | 'Icon'
>;

const AllTools = ({ tools }: PageProps) => {
  const title = 'All Tools';
  return (
    <>
      <TitleComponent title={title} />
      <Grid container>
        {tools.map((item) => {
          const { menu, link, Icon, description } = item;
          return (
            <Grid item key={menu} sx={{ m: 1 }}>
              <NavLink key={menu} to={link}>
                <Card sx={{ maxWidth: 180, height: 240 }}>
                  <CardContent>
                    <Grid
                      container
                      sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        p: 3,
                      }}
                    >
                      <Icon sx={{ fontSize: 48 }} />
                    </Grid>
                    <Typography>{menu}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </NavLink>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export { AllTools };
