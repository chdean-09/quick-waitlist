'use client';

import { LoaderCircle } from 'lucide-react';

// Add a size prop to make the loader size adjustable
export default function Loading({ size = 24 }) {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Use the size prop to adjust the LoaderCircle size */}
      <LoaderCircle className="animate-spin" size={size} />
    </div>
  );
}
