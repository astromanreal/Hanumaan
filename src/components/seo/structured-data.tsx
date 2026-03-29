
import React from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

/**
 * Component to inject JSON-LD structured data into the page.
 */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
