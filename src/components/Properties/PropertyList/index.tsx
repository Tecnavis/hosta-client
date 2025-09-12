"use client"

import PropertyCard from '@/components/Home/Properties/Card/Card'
import { propertyHomes } from '@/app/api/propertyhomes'
import { useEffect, useState } from 'react';
import { fetchHostelActive } from '@/api/Api';
import { useRouter } from 'next/navigation'

type PropertiesListingProps = {
  filter: string;
  search: string;
};

const PropertiesListing: React.FC<PropertiesListingProps> = ({ filter, search }) => {
  

  const [data, setData] = useState<any>(null);
  
      const router = useRouter();

  
    useEffect(() => {
      const loadData = async () => {
        try {
          const res = await fetchHostelActive();
          
          setData(res);
        } catch (err) {
          console.error("Failed to fetch hostels:", err);
        }
      };
  
      loadData();
    }, []); 
  
    if (!data) return <p>Loading...</p>;

    
// 1️⃣ Filter
let filterData = data.filter((hostel: any) => {
  // Handle "low" and "high" separately
  if (filter === "low" || filter === "high") {
    // For now, don't filter out anything by price — keep all
    return true;
  }

  // Normal filters
  const passesFilter =
    !filter ||
    hostel?.location?.place?.toLowerCase() === filter.toLowerCase() ||
    hostel?.accommodationType?.toLowerCase() === filter.toLowerCase() ||
    hostel?.category?.toLowerCase() === filter.toLowerCase();

  // Search filter
  const passesSearch =
    !search ||
    hostel?.name?.toLowerCase().includes(search.toLowerCase()) ||
    hostel?.location?.place?.toLowerCase().includes(search.toLowerCase()) ||
    hostel?.location?.street?.toLowerCase().includes(search.toLowerCase()) ||
    hostel?.accommodationType?.toLowerCase().includes(search.toLowerCase()) ||
    hostel?.category?.toLowerCase().includes(search.toLowerCase()) ||
    hostel?.search?.toLowerCase().includes(search.toLowerCase());

  return passesFilter && passesSearch;
});

// 2️⃣ Sort by price if needed
if (filter === "low") {
  filterData = [...filterData].sort(
    (a, b) => Number(a?.price) - Number(b?.price)
  );
} else if (filter === "high") {
  filterData = [...filterData].sort(
    (a, b) => Number(b?.price) - Number(a?.price)
  );
}

    

  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

          {filterData?.map((item: any) => (
            <div key={item?._id} className=''>
              <PropertyCard item={item} router={router}  textColor = {"text-black"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertiesListing
