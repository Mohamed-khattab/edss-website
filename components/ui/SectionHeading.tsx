import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ 
  label, 
  title, 
  description, 
  centered = true,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "max-w-3xl mb-12 md:mb-16",
      centered && "mx-auto text-center",
      className
    )}>
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
