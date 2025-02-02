"use client"; // Mark the component as a client component

import React, { useState } from 'react';
import SearchSection from './_components/SearchSection';

import TemplateListSection from './_components/TemplateListSection';

function Dashboard() {
  // Correct usage of useState hook
  const [userSearchInput, setUserSearchInput] = useState<string>()

  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      
      {/* Template List Section */}
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  );
}

export default Dashboard;
