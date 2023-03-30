import * as React from "react";
import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";
import "monaco-editor/esm/vs/editor/editor.api";
import {
  CloseAction,
  ErrorAction,
  MonacoLanguageClient,
} from "monaco-languageclient";
import {
  WebSocketMessageReader,
  WebSocketMessageWriter,
  toSocket,
} from "vscode-ws-jsonrpc";
import MonacoEditor from "./MonacoEditor";

loader.config({ monaco });

const filesInfo = [
  {
    id: "file1",
    path: "/file1.js",
    code: "console.log('file1')",
    name: "File 1",
  },
  {
    id: "file2",
    path: "/file2.js",
    code: "console.log('file2')",
    name: "File 2",
  },
  {
    id: "file3",
    path: "/file3.js",
    code: "console.log('file3')",
    name: "File 3",
  },
];
function App() {
  const [activeEditorDetails, setActiveEditorDetails] = React.useState(
    filesInfo[0]
  );
  // const createLanguageClient = (transports) => {
  //   return new MonacoLanguageClient({
  //     name: "Java Language Client-front",
  //     clientOptions: {
  //       // use a language id as a document selector
  //       documentSelector: ["java"],
  //       // disable the default error handler
  //       errorHandler: {
  //         error: () => ({ action: ErrorAction.Continue }),
  //         closed: () => ({ action: CloseAction.DoNotRestart }),
  //       },
  //     },
  //     // create a language client connection from the JSON RPC connection on demand
  //     connectionProvider: {
  //       get: () => {
  //         return Promise.resolve(transports);
  //       },
  //     },
  //   });
  // };
  // const createWebSocket = (url) => {
  //   const webSocket = new WebSocket(`${url}`);

  //   webSocket.onopen = (event) => {
  //     const socket = toSocket(webSocket);
  //     const reader = new WebSocketMessageReader(socket);
  //     const writer = new WebSocketMessageWriter(socket);
  //     const languageClient = createLanguageClient({
  //       reader,
  //       writer,
  //     });
  //     languageClient.start();
  //   };
  // };

  // React.useEffect(() => {
  //   createWebSocket("ws://localhost:4000/?token=secret_key");
  // }, []);
  const onClickButton = (details) => () => {
    setActiveEditorDetails(details);
  };
  return (
    <div className="App">
      {filesInfo.map((file) => {
        return <button onClick={onClickButton(file)}>{file.name}</button>;
      })}
      <MonacoEditor
        key={activeEditorDetails.id}
        editorPath={activeEditorDetails.path}
        code={activeEditorDetails.code}
        setCode={() => {}}
      />
    </div>
  );
}

export default App;
