import { useState, useMemo } from 'react';
import { FileData } from '../types';

export function useSearch(files: FileData[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = useMemo(() => {
    if (!searchQuery.trim()) return files;

    const query = searchQuery.toLowerCase();
    return files.filter(
      (file) =>
        file.name.toLowerCase().includes(query) ||
        file.content.toLowerCase().includes(query) ||
        file.language.toLowerCase().includes(query)
    );
  }, [files, searchQuery]);

  return { searchQuery, setSearchQuery, filteredFiles };
}