import React from 'react';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { FileData } from '../types';

export function FileViewer({ content, onClose }: { content: FileData; onClose: () => void }) {
  const isMarkdown = content.language === 'Markdown';
  const nameWithoutExtension = content.name.replace(/\.[^/.]+$/, '');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-xl animate-slideUp">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{nameWithoutExtension}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 overflow-auto bg-gray-50 h-full max-h-[calc(80vh-4rem)]">
          {isMarkdown ? (
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content.content}
              </ReactMarkdown>
            </div>
          ) : (
            <pre>
              <code className="text-sm">{content.content}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}