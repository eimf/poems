import React from 'react';
import { FileCode } from 'lucide-react';
import type { FileData } from '../types';

export function FileCard({ file, onClick }: { file: FileData; onClick: () => void }) {
  const nameWithoutExtension = file.name.replace(/\.[^/.]+$/, '');

  return (
    <div 
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <FileCode className="w-6 h-6 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-800">{nameWithoutExtension}</h3>
      </div>
      {/* <div className="mt-3">
        <p className="text-sm text-gray-600">Language: {file.language}</p>
      </div> */}
    </div>
  );
}