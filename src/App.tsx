import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from './components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import { LoadingSpinner } from './components/ui/loading-spinner';
import './App.css';

// Import pages
const Home = lazy(() => import('./pages/Home'));
const Questionnaire = lazy(() => import('./pages/Questionnaire'));
const Results = lazy(() => import('./pages/Results'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
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
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
