import { useState } from 'react';
import { FileViewer, SearchBar, FileGrid, LoadingSpinner } from './components';
import { useFiles, useSearch } from './hooks';
import type { FileData } from './types';

function App() {
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const { files, loading, error } = useFiles();
  const { searchQuery, setSearchQuery, filteredFiles } = useSearch(files);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Poemas</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {error && (
          <div className="text-red-500 mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <LoadingSpinner />
        ) : (
          <FileGrid 
            files={filteredFiles}
            onFileSelect={setSelectedFile}
          />
        )}

        {selectedFile && (
          <FileViewer
            content={selectedFile}
            onClose={() => setSelectedFile(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;