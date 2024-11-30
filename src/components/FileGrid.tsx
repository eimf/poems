import React from 'react';
import { FileCard } from './FileCard';
import type { FileData } from '../types';

interface FileGridProps {
  files: FileData[];
  onFileSelect: (file: FileData) => void;
}

export function FileGrid({ files, onFileSelect }: FileGridProps) {
  if (files.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No files found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {files.map((file) => (
        <FileCard
          key={file.name}
          file={file}
          onClick={() => onFileSelect(file)}
        />
      ))}
    </div>
  );
}