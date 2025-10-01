# Team/Stylists Section Prompt

## Overview
Create a team showcase featuring individual stylist profiles with professional presentation and interactive elements.

## Design Specifications

### Background
- Dark navy: `#0f1419`

### Layout Options
Choose one:
- **Carousel**: Horizontal scrolling with navigation arrows
- **Grid**: 3-4 columns on desktop, responsive on smaller screens

### Profile Card Design

#### Card Structure
Each card contains:
1. **Professional Photo**
   - High-quality headshot or action shot
   - Grayscale filter by default
   - Full color on hover
   - Aspect ratio: 3:4 or 1:1
   - Border radius: 8px

2. **Stylist Name**
   - Fades in from bottom
   - Delay: 200ms after image load
   - Font: Bold, medium-large size
   - Color: `#f4e4c1`

3. **Specialty/Title**
   - Fades in after name (100ms delay)
   - Examples: "Senior Hair Stylist", "Color Specialist", "Master Barber"
   - Color: `#a0a0a0`

4. **Bio Section**
   - Brief description (3-4 lines)
   - Years of experience
   - Key specializations
   - Color: `#b0b0b0`

5. **Specialization Icons**
   - Small icon indicators for services
   - Examples: scissors (cutting), palette (coloring), razor (shaving)
   - Gold accent: `#d4af37`

6. **Social Media Link**
   - Instagram icon/link
   - Positioned bottom of card
   - Gold hover effect

### Card Styling
- Background: Semi-transparent `#1a2a3a` with 60% opacity
- Soft shadow: `0 4px 20px rgba(0,0,0,0.3)`
- Hover effect: Lift 8px with smooth transition (300ms)
- Border: 1px solid `rgba(212, 175, 55, 0.2)`

## Animations

### Card Entrance
- Fade in with scale (0.95 to 1.0)
- Stagger: 150ms between cards
- Trigger: Intersection Observer

### Image Hover
- Grayscale to color transition: 400ms
- Subtle zoom (1.0 to 1.05 scale)

### Text Animations
- Name: Slide up + fade (translateY: 20px to 0)
- Title: Slide up + fade (translateY: 15px to 0)
- Bio: Fade in (no movement)

### Hover State
- Card lifts with shadow increase
- Social icon scales to 1.1
- Border becomes more visible (opacity increase)

## Navigation (if Carousel)
- Arrow buttons on sides
- Dot indicators below
- Swipe gesture support on touch devices
- Auto-advance: 5 seconds (pausable)

## Technical Requirements
- Lazy load images outside viewport
- Smooth transitions for all states
- Keyboard navigation support
- Focus indicators with gold outline
- Alt text for all images
- ARIA labels for interactive elements
- Responsive design:
  - Desktop: 3-4 cards visible
  - Tablet: 2 cards visible
  - Mobile: 1 card visible