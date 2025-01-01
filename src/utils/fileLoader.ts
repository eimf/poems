import { FileData } from '../types';

export async function loadMarkdownFiles(): Promise<FileData[]> {
  const markdownModules = import.meta.glob('../data/files/*.md', { as: '?raw', eager: true });
  
  return Object.entries(markdownModules).map(([path, content]) => ({
    name: path.split('/').pop() || '',
    content: content as string,
    language: 'Markdown'
  }));
}