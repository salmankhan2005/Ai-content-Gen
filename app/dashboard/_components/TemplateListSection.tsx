import Templates from '@/app/(data)/Templates'; // Ensure the path to your data is correct
import React, { useEffect, useState } from 'react';

// Import or define your TemplateCard component
import TemplateCard from './TemplateCard'; // Adjust the path to where TemplateCard is located

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({userSearchInput}:any) {

    const [templateList,setTemplateList]=useState(Templates)
    useEffect(()=>{
        if(userSearchInput)
            {
            const filterData=Templates.filter(item=>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setTemplateList(filterData);
        }
        else{
            setTemplateList(Templates);
        }

},[userSearchInput]);

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid gap-5 mt-5 p-10'>
        {templateList.map((item: TEMPLATE, index: number) => (
          <TemplateCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default TemplateListSection;
