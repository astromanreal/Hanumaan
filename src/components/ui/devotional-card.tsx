
// src/components/ui/devotional-card.tsx
import React, { type ReactNode } from 'react';
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
      "overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] bg-card group", 
      className
    )}>
      {imageUrl && (
        <div className={cn("relative aspect-video w-full overflow-hidden bg-muted", imageClassName)}>
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={imageHint || "spiritual theme"} 
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
          {React.Children.count(actions) > 1 ? <div className="w-full">{actions}</div> : actions}
        </CardFooter>
      )}
    </Card>
  );
}
