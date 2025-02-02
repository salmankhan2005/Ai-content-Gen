import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug} className="w-full">
      <div className="w-full h-[300px] rounded-md border shadow-lg bg-gradient-to-br from-red-500 to-black text-white hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-between p-4">
        {/* Icon Section */}
        <div className="flex justify-center">
          <Image
            src={item.icon}
            alt={`${item.name} icon`}
            width={50}
            height={50}
            className="rounded-full border border-white"
          />
        </div>

        {/* Content Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-sm text-gray-300">{item.category}</p>
          <p className="text-gray-200 mt-2 line-clamp-3">{item.desc}</p>
        </div>

        {/* Button Section */}
        <div>
          <button className="px-4 py-2 bg-white text-red-700 rounded-md hover:bg-red-700 hover:text-white">
            Explore
          </button>
        </div>
      </div>
    </Link>
  );
}

export default TemplateCard;
