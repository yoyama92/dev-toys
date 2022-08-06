import { RefObject } from 'react';
import MonacoEditor, { monaco } from 'react-monaco-editor';

/**
 * Editorコンポーネントの内容を操作するためのWapperクラス
 */
export class EditorWapper {
  #ref: RefObject<MonacoEditor>;

  constructor(ref: RefObject<MonacoEditor>) {
    this.#ref = ref;
  }

  #getModel(): monaco.editor.ITextModel | undefined {
    const current = this.#ref.current;
    const editor = current?.editor;
    const model = editor?.getModel();
    return model ?? undefined;
  }

  setValue(value: string): void {
    const model = this.#getModel();
    if (model) {
      model.setValue(value ?? '');
    }
  }

  getValue(): string {
    const model = this.#getModel();
    const value = model?.getValue();
    return value ?? '';
  }
}
