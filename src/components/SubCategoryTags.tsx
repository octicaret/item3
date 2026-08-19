import React from 'react';
import { subTagsData } from '../data/mockData';
import { PlatformIcon } from './PlatformIcon';

interface SubCategoryTagsProps {
  selectedTag: string;
  setSelectedTag: (tagId: string) => void;
}

export const SubCategoryTags: React.FC<SubCategoryTagsProps> = ({
  selectedTag,
  setSelectedTag,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-4">
      <div className="bg-[#181b2a]/90 backdrop-blur-md border border-white/5 rounded-2xl p-4 shadow-lg">
        <div className="flex flex-wrap gap-2.5 items-center">
          {subTagsData.map((tag) => {
            const isSelected = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-5 py-2.5 md:px-6 md:py-3 rounded-2xl text-sm md:text-base font-extrabold transition-all flex items-center space-x-2.5 border shadow-md hover:scale-105 active:scale-95 ${
                  isSelected
                    ? 'bg-[#667AFA] text-white border-[#667AFA] shadow-lg shadow-[#667AFA]/35 font-bold scale-105'
                    : 'bg-[#1c2033]/90 hover:bg-[#252b45] text-gray-200 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {/* Popular Tag indicator */}
                {tag.isPopular && !isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#667AFA] animate-pulse"></span>
                )}
                {tag.id !== 'all' && (
                  <PlatformIcon name={tag.name} className="w-5 h-5 md:w-5 md:h-5 shrink-0" />
                )}
                <span>{tag.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
