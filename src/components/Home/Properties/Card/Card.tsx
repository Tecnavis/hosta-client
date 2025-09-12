import { Icon } from "@iconify/react";
import Image from "next/image";

import * as Icons from "lucide-react";

const PropertyCard: React.FC<{ item: any; textColor: string, router: any }> = ({
  item,
  textColor,
  router
}) => {
  const { amenities, name, photos, description, price, _id } = item;
    

  const handleNavigate = () => {
const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user && user?._id) {
      router.push(`/properties/${_id}`);
    } else {
      router.push("/signin");
    }
  };

  return (
    <div>
      <div className="relative rounded-xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20">
        <div className="overflow-hidden rounded-t-xl">
             <span  onClick={handleNavigate} className="cursor-pointer group" >

            <Image
              src={photos[0]}
              alt={name}
              width={440}
              height={250}
              className="w-full rounded-t-xl group-hover:brightness-50 group-hover:scale-110 transition duration-300"
              unoptimized
            />
          </span>
          <div className="absolute top-3 right-3 p-2 bg-white rounded-full hidden group-hover:block">
            <Icon
              icon="solar:arrow-right-linear"
              width={18}
              height={18}
              className="text-black"
            />
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col gap-3 justify-between mb-4">
            <div>
                <h3
                onClick={handleNavigate} 
                  className={`text-base font-semibold cursor-pointer ${textColor}   dark:text-white group-hover:text-primary`}
                >
                  {name}
                </h3>
              <p
                className={`text-xs font-normal ${textColor}  dark:text-white/50`}
              >
                {description}
              </p>
            </div>
            <div>
              <button className="text-xs font-medium text-primary px-3 py-1 rounded-full bg-primary/10">
                ₹{price}
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            {amenities.slice(0, 2).map((amenity: any) => {
              const LucideIcon: any = Icons[amenity.icon as keyof typeof Icons];
              return (
                <div
                  key={amenity._id}
                  className="flex flex-col gap-1 border-r border-black/10 dark:border-white/20 px-2"
                >
                  {LucideIcon && (
                    <LucideIcon
                      className={`${textColor}`}
                      width={16}
                      height={16}
                    />
                  )}
                  <p
                    className={`text-xs font-normal ${textColor} dark:text-white`}
                  >
                    {amenity.name}
                  </p>
                </div>
              );
            })}

            <div className="flex flex-col gap-1 pl-2">
              <Icon
                icon="lineicons:arrow-all-direction"
                className={`${textColor}`}
                width={16}
                height={16}
              />

              {/* <p className={`text-xs font-normal ${textColor} dark:text-white`}>
                {"more"}
              </p> */}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
