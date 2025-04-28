import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import "./App.css";

const DEFAULT_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Playground</title>
</head>
<body>
  <h1>Hello, Monaco + iframe!</h1>
  <button onclick="alert('Hello!')">Click me</button>
  <script>
    // JS code here
    console.log('Hello from JS!')
  </script>
</body>
</html>`;

function App() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          flex: 1,
          minWidth: 0,
          borderRight: "1px solid #333",
          overflow: "hidden",
        }}
      >
        <Editor
          height="100%"
          width="100%"
          defaultLanguage="html"
          value={code}
          onChange={(v) => setCode(v || "")}
          theme="vs-dark"
          options={{ fontSize: 16, minimap: { enabled: false } }}
        />
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 0,
          background: "#fff",
        }}
      >
        <iframe
          ref={iframeRef}
          title="preview"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "#fff",
            display: "block",
          }}
          srcDoc={code}
        />
      </div>
    </div>
  );
}

export default App;
