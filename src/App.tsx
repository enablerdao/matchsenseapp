import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from './components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Import pages directly
import Home from './pages/Home';
import Questionnaire from './pages/Questionnaire';
import Results from './pages/Results';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <HelmetProvider>
          <Router>
            <Suspense fallback={
              <div className="flex h-screen w-full items-center justify-center">
                <LoadingSpinner size="lg" text="読み込み中..." />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questionnaire" element={<Questionnaire />} />
                <Route path="/results" element={<Results />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Toaster />
          </Router>
        </HelmetProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
