// src/app/[locale]/[slug]/components.tsx
import type { Product } from '@/app/data/products'; // Assuming you have a Product type
import { ContactButtons } from './ContactButtons';

// Star rating component
export const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${Math.floor(rating) > i ? 'text-yellow-400' : 'text-slate-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <span className="text-sm text-slate-500">({reviews} reviews)</span>
  </div>
);

// Product Information section
export function ProductInfo({ product }: { product: Product }) {

  return (
    <div className="flex h-full flex-col">
      <h1 className="text-4xl text-gray-900 leading-tight mb-4">{product.name}</h1>
      
      <div className="mb-8 py-2 border-b border-gray-100">
        <p className="text-4xl font-medium text-gray-900 mb-3">{`${product.price?.toFixed(2) ?? '0.00'} JOD `}</p>
        <div className="inline-flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${product.inStock !== false ? 'bg-green-500 ring-2 ring-gray-200 ' : 'bg-red-500'}`} />
          <span className="text-xl text-gray-700 font-medium">
            {product.inStock !== false ? 'In stock' : 'Out of stock'}
          </span>
        </div>
      </div>f

      <div className="mb-8">
        <div className="flex items-center gap-3">
            <ShieldCheckIcon className="h-5 w-5 text-gray-400" />
            <span className="text-base text-gray-700">Guaranteed authentic</span>
        </div>
        <div className="flex items-center gap-3">
            <TruckIcon className="h-5 w-5 text-gray-400" />
            <span className="text-base text-gray-700">Free shipping nationwide</span>
        </div>
      </div>

      <ContactButtons productName={product.name} />
      
    </div>
  );
}

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

const TruckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 003.375-3.375h9.75a3.375 3.375 0 003.375 3.375v1.875M16.5 12h-9m9 0a1.5 1.5 0 00-1.5-1.5h-6a1.5 1.5 0 00-1.5 1.5m9 0a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5m0 0V5.625c0-.621.504-1.125 1.125-1.125h12.75c.621 0 1.125.504 1.125 1.125v6.75" />
    </svg>
);

// Info Section (Features, Specs, etc.)
export function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}