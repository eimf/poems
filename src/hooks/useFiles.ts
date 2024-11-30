import { useState, useEffect } from 'react';
import { FileData } from '../types';
import { loadMarkdownFiles } from '../utils';

export function useFiles() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const markdownFiles = await loadMarkdownFiles();
        setFiles(markdownFiles);
        setLoading(false);
      } catch (err) {
        setError('Failed to load files');
        setLoading(false);
      }
    }

    fetchFiles();
  }, []);

  return { files, loading, error };
}