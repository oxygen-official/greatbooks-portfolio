import React from 'react';
import { User, GraduationCap, Calendar, BookOpen, Compass, Edit3 } from 'lucide-react';
import { StudentProfileData } from '../types/portfolio';

interface StudentProfileSectionProps {
  profile: StudentProfileData;
  onEditProfile: () => void;
}

export const StudentProfileSection: React.FC<StudentProfileSectionProps> = ({
  profile,
  onEditProfile
}) => {
  return (
    <section id="student-profile" className="pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Academic Course Badge & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-500 font-bold mb-1">
              <span>Section 1</span>
              <span>·</span>
              <span>Culminating Performance Task</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 dark:text-stone-50 font-classical [text-wrap:balance]">
              My Literary Journey: A Great Books Digital Portfolio
            </h1>
          </div>

          <button
            onClick={onEditProfile}
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>Customize Profile Details</span>
          </button>
        </div>

        {/* Student Profile Card (Part 1 of PDF) */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Photograph / Academic Avatar & Identity Badges */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
              
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 flex items-center justify-center shadow-md">
                {profile.photoUrl ? (
                  <img
                    src={profile.photoUrl}
                    alt={profile.fullName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 text-stone-700 dark:text-stone-300">
                    <User className="w-16 h-16 stroke-1 text-stone-400 dark:text-stone-500 mb-2" />
                    <span className="text-xs font-classical font-semibold tracking-wide">
                      Student Scholar
                    </span>
                  </div>
                )}
              </div>

              {/* Identity & Institutional Metadata */}
              <div className="w-full space-y-3 pt-2">
                <div>
                  <h2 className="text-2xl font-bold text-stone-950 dark:text-stone-50 font-classical">
                    {profile.fullName}
                  </h2>
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-400 mt-0.5">
                    {profile.course}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-stone-400 shrink-0" />
                    <span><strong>Year & Section:</strong> {profile.yearAndSection}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-stone-400 shrink-0" />
                    <span><strong>Academic Focus:</strong> {profile.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-stone-400 shrink-0" />
                    <span><strong>Submission:</strong> {profile.submissionDate}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Required Essay Narratives (Intro, Interests, Expectations) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* 1. Brief Personal Introduction */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest font-bold text-stone-500 dark:text-stone-400 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  <span>Personal Introduction</span>
                </div>
                <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                  {profile.personalIntroduction}
                </p>
              </div>

              {/* 2. Personal Interests and Experiences Related to Reading & Literature */}
              <div className="space-y-3 pt-6 border-t border-stone-100 dark:border-stone-800">
                <div className="text-xs uppercase tracking-widest font-bold text-stone-500 dark:text-stone-400 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  <span>Interests & Experiences in Reading Literature</span>
                </div>
                <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                  {profile.readingInterestsAndExperiences}
                </p>
              </div>

              {/* 3. Expectations or Learning Experiences in Great Books */}
              <div className="p-6 rounded-xl bg-amber-50/70 dark:bg-stone-850 border border-amber-200/80 dark:border-stone-750 space-y-2">
                <div className="text-xs uppercase tracking-widest font-bold text-amber-900 dark:text-amber-400">
                  Expectations & Learning Journey in Great Books
                </div>
                <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed italic">
                  "{profile.expectationsAndLearningJourney}"
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
