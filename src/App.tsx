import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { StudentProfileSection } from './components/StudentProfileSection';
import { LiteraryAnalysesSection } from './components/LiteraryAnalysesSection';
import { FavoriteMasterpieceSection } from './components/FavoriteMasterpieceSection';
import { SummaryOfLearningSection } from './components/SummaryOfLearningSection';
import { PersonalReflectionSection } from './components/PersonalReflectionSection';
import { AnalysisDetailModal } from './components/AnalysisDetailModal';
import { EditProfileModal } from './components/EditProfileModal';
import { Footer } from './components/Footer';
import { INITIAL_STUDENT_PROFILE } from './data/summaryAndReflection';
import { LiteraryAnalysis, StudentProfileData } from './types/portfolio';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [profile, setProfile] = useState<StudentProfileData>(INITIAL_STUDENT_PROFILE);
  const [selectedAnalysis, setSelectedAnalysis] = useState<LiteraryAnalysis | null>(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState<boolean>(false);

  // Sync dark class on html
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Bar Navigation Contract */}
      <Navigation
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        
        {/* Part 1: Student Profile */}
        <StudentProfileSection
          profile={profile}
          onEditProfile={() => setIsEditProfileOpen(true)}
        />

        {/* Part 2: Compilation of Seven (7) Literary Analyses */}
        <LiteraryAnalysesSection
          onSelectAnalysis={analysis => setSelectedAnalysis(analysis)}
        />

        {/* Part 3: My Favorite Literary Masterpiece */}
        <FavoriteMasterpieceSection />

        {/* Part 4: Summary of Learning */}
        <SummaryOfLearningSection />

        {/* Part 5: Personal Reflection */}
        <PersonalReflectionSection />

      </main>

      {/* Academic Quiet Footer */}
      <Footer />

      {/* Detail Modal for Close Reading of any of the 7 Analyses */}
      <AnalysisDetailModal
        analysis={selectedAnalysis}
        onClose={() => setSelectedAnalysis(null)}
      />

      {/* Customizer Modal for Student Profile */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onSave={updated => setProfile(updated)}
      />

    </div>
  );
}
