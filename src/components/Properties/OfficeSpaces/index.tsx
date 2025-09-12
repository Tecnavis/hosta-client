"use client"

import PropertyCard from '@/components/Home/Properties/Card/Card'
import { propertyHomes } from '@/app/api/propertyhomes'
import { useRouter } from 'next/navigation';

const OfficeSpace: React.FC = () => {

          const router = useRouter();
    
    return (
        <section className='pt-0!'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {propertyHomes.slice(0, 3).map((item, index) => (
                        <div key={index} className=''>
                            <PropertyCard router={router} item={item} textColor = {"text-black"}  />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfficeSpace;