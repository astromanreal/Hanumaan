// src/components/ui/devotional-card.tsx
import React, { type ReactNode } from 'react'; // Added React import
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface DevotionalCardProps {
  title: string;
  description?: string | ReactNode;
  content?: string | ReactNode;
  imageUrl?: string;
  imageHint?: string;
  imageClassName?: string;
  actions?: ReactNode;
  className?: string;
  titleClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

export function DevotionalCard({ 
  title, 
  description, 
  content, 
  imageUrl, 
  imageHint,
  imageClassName,
  actions, 
  className,
  titleClassName,
  headerClassName,
  contentClassName,
  footerClassName
}: DevotionalCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-card group", 
      className
    )}>
      {imageUrl && (
        <div className={cn("relative h-56 w-full", imageClassName)}>
          <Image 
            src={imageUrl} 
            alt={title} 
            fill // Changed layout="fill" to fill for Next.js 13+
            objectFit="cover" 
            data-ai-hint={imageHint || "spiritual theme"} 
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <CardHeader className={headerClassName}>
        <CardTitle className={cn("text-2xl text-primary font-semibold", titleClassName)}>{title}</CardTitle>
        {description && (
          typeof description === 'string' ? 
          <CardDescription className="text-base mt-1">{description}</CardDescription> :
          <div className="text-base mt-1 text-muted-foreground">{description}</div>
        )}
      </CardHeader>
      {content && (
        <CardContent className={contentClassName}>
          {typeof content === 'string' ? <p className="text-foreground/90 leading-relaxed">{content}</p> : content}
        </CardContent>
      )}
      {actions && (
        <CardFooter className={cn("mt-auto", footerClassName)}> 
          {/* Ensure actions is a single ReactNode or wrapped if it's multiple elements */}
          {React.Children.count(actions) > 1 ? <div>{actions}</div> : actions}
        </CardFooter>
      )}
    </Card>
  );
}
