import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Promotion: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-20 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-primary/5 p-10 rounded-2xl">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-dark dark:text-white mb-4">
              Try the Hostay App
            </h2>
            <p className="text-lg text-dark/70 dark:text-white/70 mb-6 max-w-lg">
              Download Our App for Easy Booking & Real-time Updates
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full hover:bg-dark transition"
            >
              <Icon icon="ant-design:android-filled" width={24} height={24} />
              <span>Get it on Google Play</span>
            </Link>
          </div>

          {/* App Image Cards */}
          <div className="flex-1 flex justify-center md:justify-end gap-6">
            <div className="w-40 h-80 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/promo/promo.png"
                alt="Hostay App Screenshot 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-40 h-80 relative rounded-2xl overflow-hidden shadow-lg hidden md:block">
              <Image
                src="/images/promo/promo.png"
                alt="Hostay App Screenshot 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
