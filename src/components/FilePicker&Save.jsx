import React from "react";
import { useState } from "react";
let file;
export const FilePickerAndSave = () => {
  const [save, setSave] = useState();

  const saveFile = async () => {
    [file] = await window.showOpenFilePicker();
    console.log(file.kind);
    let fileData = await file.getFile();
    let text = await fileData.text();
    console.log(text);
    // setSave(text);
    return text.toString();
  };

  const saveFunction = async () => {
    console.log("file:", file.kind);
    let stream = await file.createWritable();
    await stream.write(save);
    await stream.close();
  };

  const saveAs = async () => {
    file = await window.showSaveFilePicker();
    saveFunction();
  };

  return (
    <div>
      <input
        type="textarea"
        value={save}
        onChange={(e) => setSave(e.target.value)}
        id="input"
      />
      <br></br>
      <button
        onClick={async () => {
          let data;
          await saveFile().then((res) => {
            console.log(res);
            data = res;
          });
          setSave(data);
          document.getElementById("input").innerHTML = data;
        }}
      >
        open
      </button>
      <button onClick={() => saveFunction()}>save </button>
      <button onClick={() => saveAs()}>save as</button>
    </div>
  );
};
