import React from "react";

const saveFunction = async (blob) => {
  const a = document.createElement("a");
  a.download = "F:/Learnings & Projects/my-file.txt";
  a.href = URL.createObjectURL(blob);
  a.addEventListener("click", (e) => {
    setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
  });
  a.click();
};

export const SaveFile = () => {
  const obj = { hello: "world" };
  const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
  });

  return (
    <div>
      SaveFile
      <button onClick={() => saveFunction(blob)}> save file </button>
    </div>
  );
};
