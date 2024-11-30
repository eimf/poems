export interface FileData {
  name: string;
  content: string;
  language: string;
}

export type FileViewerProps = {
  files: FileData[];
}