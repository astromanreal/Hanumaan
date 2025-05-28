// src/components/ui/page-header.tsx
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string | ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function PageHeader({ title, description, className, titleClassName, descriptionClassName }: PageHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h1 className={cn("text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl drop-shadow-sm", titleClassName)}>
        {title}
      </h1>
      {description && (
        <p className={cn("mt-6 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
