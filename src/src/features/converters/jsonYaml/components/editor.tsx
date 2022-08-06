import { forwardRef } from 'react';
import MonacoEditor, { MonacoEditorProps } from 'react-monaco-editor';

import { Box, Typography } from '@mui/material';

type EditorProps = {
  props: MonacoEditorProps;
  title: string;
};

const EditorComponent = forwardRef<MonacoEditor, EditorProps>(
  ({ props, title }, ref) => {
    const { language, theme, options, onChange } = props;
    return (
      <Box sx={{ height: '100%' }}>
        <Box>
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
        <Box sx={{ height: '100%' }}>
          <MonacoEditor
            language={language}
            theme={theme}
            options={options}
            onChange={onChange}
            ref={ref}
            height="100%"
          />
        </Box>
      </Box>
    );
  },
);

export type OutputEditorProps = {
  title: string;
  language: string;
};

export const OutputEditor = forwardRef<MonacoEditor, OutputEditorProps>(
  ({ title, language }, ref) => {
    const options = {
      minimap: {
        enabled: false,
      },
      automaticLayout: true,
      readOnly: true,
    };
    const props = {
      language: language,
      theme: 'vs-dark',
      options: options,
    };
    return <EditorComponent props={props} title={title} ref={ref} />;
  },
);

export const InputEditor = ({
  title,
  language,
  onChange,
}: {
  title: string;
  language: string;
  onChange: (value: string) => void;
}) => {
  const options = {
    minimap: {
      enabled: false,
    },
    automaticLayout: true,
  };

  const handlerOnChange = (value: string) => {
    onChange(value);
  };

  const props = {
    language: language,
    theme: 'vs-dark',
    options: options,
    onChange: handlerOnChange,
  };

  return <EditorComponent props={props} title={title} />;
};
