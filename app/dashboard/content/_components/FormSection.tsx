"use client"; // Add this line at the top

import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (formData: any) => void;
  loading:boolean // Correctly defining userFormInput prop
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>({}); // Correctly initializing formData state

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // Correctly updating formData
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData); // Correctly calling userFormInput with formData
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-gradient-to-br from-red-500 to-black text-white">
      {/* Template Header */}
      {selectedTemplate?.icon && (
        <Image
          src={selectedTemplate.icon}
          alt="icon"
          width={70}
          height={70}
          className="mb-4"
        />
      )}
      <h2 className="font-bold text-2xl mb-2">{selectedTemplate?.name}</h2>
      <p>{selectedTemplate?.desc}</p>

      {/* Form */}
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label htmlFor={item.name} className="font-bold">{item.label}</label>
            {item.field === 'input' ? (
              <Input
                id={item.name}
                name={item.name} 
                required={item?.required}
                onChange={handleInputChange}
                placeholder={`Enter ${item.label}`}
                className="text-white"
              />
            ) : item.field === 'textarea' ? (
              <Textarea
                id={item.name}
                name={item.name} 
                required={item?.required}
                onChange={handleInputChange}
                placeholder={`Enter ${item.label}`}
                rows={4}
                className="text-white"
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6 bg-red-700 hover:bg-red-600"
        disabled={loading}>
            {loading &&<Loader2Icon className='animate-bounce'/>}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
