'use client';

import { useState, useId } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

interface BeforeAfterSliderProps {
  beforeImage: { src: string; alt: string, hint: string };
  afterImage: { src: string; alt: string, hint: string };
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const id = useId();

  return (
    <div className="relative w-full aspect-[4/5] max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl group">
      <Label htmlFor={id} className="sr-only">
        Before and after image comparison slider
      </Label>
      
      {/* Before Image */}
      <Image 
        src={beforeImage.src} 
        alt={beforeImage.alt} 
        data-ai-hint={beforeImage.hint}
        fill
        style={{ objectFit: 'cover' }}
        priority 
        className="select-none"
      />
      
      {/* After Image (clipped) */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 select-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image 
          src={afterImage.src} 
          alt={afterImage.alt}
          data-ai-hint={afterImage.hint}
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="select-none"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/70 cursor-ew-resize backdrop-blur-sm"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-white/90 text-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <ChevronsLeftRight className="w-5 h-5" />
        </div>
      </div>

      {/* Range Input */}
      <input
        id={id}
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full cursor-ew-resize opacity-0"
        aria-label="Percentage of after image shown"
      />
    </div>
  );
}
