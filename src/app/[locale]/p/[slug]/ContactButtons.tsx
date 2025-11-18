// ContactButtons.tsx
'use client';

import { useState, useEffect } from 'react';
import Image  from 'next/image';

// iMessage/SMS Icon
const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

type ContactButtonsProps = {
  productName: string;
};

export function ContactButtons({ productName }: ContactButtonsProps) {
  const [isIos, setIsIos] = useState(false);
  
  // This effect runs only on the client, after the component mounts
  useEffect(() => {
    // Check userAgent to see if it's an Apple mobile device
    const userAgent = window.navigator.userAgent;
    setIsIos(/iPhone|iPad|iPod/i.test(userAgent));
  }, []);

  // Use an environment variable for the phone number for flexibility
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '962788661142';
  // console.log('Using WhatsApp number:', WHATSAPP_NUMBER);
  
  const messageText = `Hello! I'm interested in buying the ${productName}.`;
  
  // Encode the message text so it can be safely used in a URL
  const encodedMessage = encodeURIComponent(messageText);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  const smsUrl = `sms:&body=${encodedMessage}`; // For iOS, no number is needed to open the app

  return (
    <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full text-lg md:text-xl items-center justify-center gap-2 md:gap-3 bg-green-600 px-4 md:px-6 py-2.5 md:py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <Image src="/images/icons/whatsapp.png" alt="WhatsApp" width={512} height={512} className="h-8 w-8 md:h-10 md:w-10" />
        Order Now on WhatsApp
      </a>

      {/* Conditionally render the iMessage/SMS link only if we detect an iOS device */}
      {isIos && (
        <a
          href={smsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full text-base md:text-lg items-center justify-center gap-2 md:gap-3 bg-blue-500 px-4 md:px-6 py-2.5 md:py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <MessageIcon className="h-5 w-5 md:h-6 md:w-6" />
          or Send an iMessage/SMS
        </a>
      )}
    </div>
  );
}