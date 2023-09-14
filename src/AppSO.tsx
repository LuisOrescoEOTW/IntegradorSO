// import React from 'react'
import { useRef, useState } from 'react';

export const AppSO = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileContent, setFileContent] = useState<string>('');

  const handleFileChange = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setFileContent(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} />
      <div>AppSO está bien</div>
      <div>Mostrar lo que hay: {fileContent}</div>
    </div>
  );
};


