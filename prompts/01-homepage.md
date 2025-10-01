# Homepage Hero Section Prompt

## Overview
Create a Next.js homepage hero section for a modern barbing and beauty salon.

## Design Specifications

### Background
- Dark background: `#0a0a0a`
- Full-width video or high-quality image of salon interior with mood lighting

### Typography & Content
- **Main Headline**: Bold, elegant typography
  - Text: "Transform Your Look, Elevate Your Confidence"
  - Animation: Word-by-word fade-in with subtle upward drift
  
- **Subtitle**: Lighter gray (`#a0a0a0`)
  - Fades in 300ms after headline completion

### Call-to-Action Buttons
1. **Primary CTA**: "Book Appointment"
   - Gold accent background: `#d4af37`
   - Solid button style

2. **Secondary CTA**: "View Services"
   - Outlined/ghost button style
   - Gold border on hover

### Additional Elements
- Scroll indicator at bottom of hero
- Subtle parallax effect on background (optional)

## Animation Details
- Text fade-in duration: 400-600ms per word
- Upward drift: 20-30px translate-y
- Stagger delay: 150ms between words
- Button fade-in: 200ms after subtitle

## Technical Requirements
- Responsive design (mobile, tablet, desktop)
- Video optimization for performance
- Fallback image for video
- Lazy loading for assets
- Accessible animation controls (prefers-reduced-motion)