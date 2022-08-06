import { useEffect, useRef, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

import { Box, Grid, styled } from '@mui/material';

import { EditorWapper } from './classes/editor';
import { Configuration } from './components/configuration';
import { InputEditor, OutputEditor } from './components/editor';
import { Conversion, Indentation, Setting } from './types/configuration';
import { convertValue } from './utils/converter';

import { TitleComponent } from '@/components/title';

const headerHeight = 210;

const GridStyle = styled('div')(({}) => ({
  height: `calc(100% - ${headerHeight}px)`,
}));

type Language = 'json' | 'yaml';

const Main = () => {
  const defaultValue: Setting = {
    conversion: 'JsonToYaml',
    indentation: 'TwoSpaces',
  };
  const [conversion, setConversion] = useState<Conversion>(
    defaultValue.conversion,
  );
  const [indentation, setIndentation] = useState<Indentation>(
    defaultValue.indentation,
  );
  const [inputLanguage, setInputLanguage] = useState<Language>('json');
  const [outputLanguage, setOutputLanguage] = useState<Language>('yaml');

  const setLanguage = (inputLanguage: Language, outputLanguage: Language) => {
    setInputLanguage(inputLanguage);
    setOutputLanguage(outputLanguage);
  };

  useEffect(() => {
    const value = outputEditor.getValue();
    const convertedValue = convertValue(value, {
      conversion: conversion === 'JsonToYaml' ? 'YamlToJson' : 'JsonToYaml',
      indentation: indentation,
    });
    const newValue = convertValue(convertedValue, {
      conversion: conversion,
      indentation: indentation,
    });
    outputEditor.setValue(newValue);
  }, [indentation]);

  useEffect(() => {
    switch (conversion) {
      case 'JsonToYaml':
        setLanguage('json', 'yaml');
      case 'YamlToJson':
        setLanguage('yaml', 'json');
    }
  }, [conversion]);

  const outputEditorRef = useRef<MonacoEditor>(null);
  const outputEditor = new EditorWapper(outputEditorRef);

  const inputValueChangeHandler = (value: string) => {
    const convertedValue = convertValue(value, {
      conversion: conversion,
      indentation: indentation,
    });
    outputEditor.setValue(convertedValue);
  };

  const conversionChangedHandler = (setting: Conversion) => {
    setConversion(setting);
  };

  const indentationChangedHandler = (setting: Indentation) => {
    setIndentation(setting);
  };

  return (
    <GridStyle>
      <Box sx={{ py: 2, height: '100%' }}>
        <Box sx={{ my: 1, minWidth: '560px' }}>
          <Configuration
            defaultSetting={defaultValue}
            onIndentationChanged={indentationChangedHandler}
            onConversionChanged={conversionChangedHandler}
          />
        </Box>
        <Grid container spacing={2} sx={{ my: 1, height: '100%' }}>
          <Grid item xs={6} sx={{ height: '100%' }}>
            <InputEditor
              title="Input"
              language={inputLanguage}
              onChange={inputValueChangeHandler}
            />
          </Grid>
          <Grid item xs={6} sx={{ height: '100%' }}>
            <OutputEditor
              title="Output"
              language={outputLanguage}
              ref={outputEditorRef}
            />
          </Grid>
        </Grid>
      </Box>
    </GridStyle>
  );
};

const JsonYaml = () => {
  const title = 'Json <> Yaml Converter';
  return (
    <>
      <TitleComponent title={title} />
      <Main />
    </>
  );
};

export { JsonYaml };
