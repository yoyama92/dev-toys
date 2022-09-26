import MonacoEditor, { MonacoEditorProps } from 'react-monaco-editor';

import { Box, Grid, Typography } from '@mui/material';

import { decodedJwt, decodeJwtHeader } from '../utils/decoder';

type EditorComponentProps = {
  props: MonacoEditorProps;
  title: string;
  value: string;
};

const EditorComponent = ({ props, title, value }: EditorComponentProps) => {
  const { language, theme, options } = props;
  return (
    <Box sx={{ height: '100%' }}>
      <Box>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      <Box sx={{ height: '100%' }}>
        <MonacoEditor
          value={value}
          language={language}
          theme={theme}
          options={options}
          height="100%"
        />
      </Box>
    </Box>
  );
};

type EditorProps = {
  title: string;
  value: string;
};

const Editor = ({ title, value }: EditorProps) => {
  const options = {
    minimap: {
      enabled: false,
    },
    automaticLayout: true,
    readOnly: true,
  };
  const props = {
    language: 'json',
    theme: 'vs-dark',
    options: options,
  };
  return <EditorComponent props={props} title={title} value={value} />;
};

type DecodeResultProps = {
  value: string;
};

export const DecodeResult = ({ value }: DecodeResultProps) => {
  const jwtHeader = decodeJwtHeader(value);
  const payload = decodedJwt(value);

  const jwtHederJson = JSON.stringify(jwtHeader, null, 2) ?? '';
  const payloadJson = JSON.stringify(payload, null, 2) ?? '';

  return (
    <Grid container spacing={1} sx={{ height: '100%' }}>
      <Grid item xs={12} sx={{ height: '42%' }}>
        <Editor title="Header" value={jwtHederJson} />
      </Grid>
      <Grid item xs={12} sx={{ height: '42%' }}>
        <Editor title="Payload" value={payloadJson} />
      </Grid>
    </Grid>
  );
};
