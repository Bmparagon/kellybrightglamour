# About Us Section Prompt

## Overview
Design an about section that tells the salon's story with visual appeal and credibility indicators.

## Design Specifications

### Background
- Deep brown: `#2b1810`
- Smooth gradient transition from previous section

### Layout Structure
Split layout design:

#### Left Side (50% width)
- Photo collage/grid of salon
- Images fade in from left
- 2-3 high-quality photos showing:
  - Salon interior
  - Team in action
  - Happy customers (if available)

#### Right Side (50% width)
- Text content fades in from right
- Content includes:
  - Salon founding year (large elegant numbers with gold accent)
  - Mission statement
  - Years of experience
  - Team size

### Statistics Section

#### Animated Counters
Three key metrics displayed prominently:
1. **Happy Clients**: e.g., "10,000+"
2. **Expert Stylists**: e.g., "15+"
3. **5-Star Reviews**: e.g., "500+"

#### Counter Animation
- Numbers count up from 0 when scrolled into view
- Duration: 2000ms
- Easing: ease-out
- Trigger once per page load

### Typography
- **Founding Year**: Display font, large size (72-96px), gold accent `#d4af37`
- **Headings**: Warm, elegant serif or sans-serif
- **Body Text**: `#e0e0e0`, line-height 1.6-1.8
- **Stats**: Bold, large numbers with descriptive labels

### Color Accents
- Gold highlights for key numbers/dates: `#d4af37`
- Warm cream for emphasis text: `#f4e4c1`

## Animations

### Image Animations
- Fade in from left with slide effect
- Stagger: 200ms between images
- Scale from 0.9 to 1.0

### Text Animations
- Fade in from right
- Slide distance: 50px
- Sections appear sequentially

### Counter Animations
- Trigger at 30% scroll into view
- Use requestAnimationFrame for smooth counting
- Format numbers with commas

## Technical Requirements
- Responsive: Stack vertically on mobile
- Lazy load images
- Optimize image sizes (WebP format)
- Accessible alt text for all images
- ARIA labels for animated counters