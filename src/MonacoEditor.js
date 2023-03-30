import { Component } from "react";
import * as monaco from "monaco-editor";
import Editor, { Monaco } from "@monaco-editor/react";

import "monaco-editor/esm/vs/editor/editor.api";

import "monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js";
import "monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js";
import "monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js";
import "monaco-editor/esm/vs/editor/standalone/browser/quickInput/standaloneQuickInputService.js";
import "monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js";
import "monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js";

class MonacoEditor extends Component {
  getLatestCode = (editorCode) => {
    return editorCode;
  };
  render() {
    const { editorPath, code, setCode } = this.props;
    return (
      <Editor
        path={editorPath}
        defaultValue={this.getLatestCode(code)}
        onChange={(newCode) => {
          if (newCode) {
            setCode(newCode);
          } else {
            setCode("");
          }
        }}
        options={{
          minimap: { enabled: false },
          wordWrap: "off",
          lineNumbers: "on",
          fontSize: 14,
          tabSize: 4,
        }}
        loading={
          <div className="w-full h-full flex justify-center items-center bg-[#1e1e1e] text-white">
            loading
          </div>
        }
        theme={"vs-dark"}
      />
    );
  }
}

export default MonacoEditor;
