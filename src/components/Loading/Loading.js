import React from 'react';
import SkeletonLoader from 'emerald-ui/lib/SkeletonLoader';

export const Loading = () => {
  return (
    <div aria-hidden className="ml-5 mr-5 mt-2 mb-2">
      <SkeletonLoader height="190px" width="320px" loading highContrast />
      <SkeletonLoader height="40px" width="320px" loading highContrast />
      <SkeletonLoader height="80px" width="320px" loading highContrast />
    </div>
  );
};
