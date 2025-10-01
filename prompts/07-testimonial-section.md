# Testimonials Section Prompt

## Overview
Create a testimonials carousel showcasing customer reviews with credibility indicators and smooth animations.

## Design Specifications

### Background
- Deep charcoal: `#1a1a1a`
- Subtle texture or pattern overlay (optional)
- Alternative: Diagonal lines pattern at 5% opacity

### Overall Rating Display

#### Aggregate Score
Positioned at top of section:
- Large rating number: "4.9/5.0"
- Font size: 48-56px
- Color: `#d4af37` (gold)
- Animated star display below
- Total review count: "Based on 200+ reviews"
- Star animation on scroll into view

#### Star Display
- 5 stars with partial fill for decimal ratings
- Gold stars: `#d4af37`
- Empty stars: `#3a3a3a`
- Animation: Stars fill from left to right sequentially

### Review Card Design

#### Card Structure
Each testimonial card contains:

1. **Star Rating**
   - 5-star display at top
   - Gold filled stars
   - Positioned prominently

2. **Quote Text**
   - Customer review content
   - 3-5 lines maximum (truncate if longer)
   - Elegant serif or readable sans-serif font
   - Color: `#e0e0e0`
   - Line height: 1.6-1.8
   - Gold quotation marks: Large decorative quotes
   - Quote marks color: `#d4af37`
   - Position: Top-left of text block

3. **Customer Information**
   - Customer name
   - Optional: Customer photo (circular, small)
   - Photo size: 48-56px diameter
   - Photo position: Left of name
   - Verification badge (if from Google/Yelp)

4. **Source Badge**
   - "Verified Google Review" or "Yelp Review"
   - Small badge with platform icon
   - Position: Below customer info
   - Color: `#8a8a8a`

#### Card Styling
- Background: Semi-transparent `rgba(30, 30, 30, 0.6)`
- Border: `1px solid rgba(212, 175, 55, 0.15)`
- Border radius: 12px
- Padding: 32px
- Max width: 600-700px (centered)
- Soft shadow: `0 8px 32px rgba(0, 0, 0, 0.4)`

### Carousel Features

#### Navigation
- **Arrow Buttons**: Left and right
  - Position: Sides of carousel (absolute positioning)
  - Gold color: `#d4af37`
  - Hover: Scale 1.1 + brighter gold
  - Circular background: `rgba(212, 175, 55, 0.1)`
  - Size: 48px diameter

- **Dot Indicators**: Below carousel
  - Gold active dot: `#d4af37`
  - Inactive dots: `#3a3a3a`
  - Dot size: 10-12px diameter
  - Active dot slightly larger or pill-shaped

#### Auto-Advance
- Automatically advance every 6 seconds
- Pause on hover
- Pause on focus (keyboard navigation)
- Resume after user interaction ends

#### Transition Animation
- Slide + fade transition
- Duration: 600ms
- Easing: ease-in-out
- Current slide fades out + slides left
- Next slide fades in + slides in from right

### Review Card Animations

#### Initial Load
- Fade in with scale effect (0.95 to 1.0)
- Duration: 500ms
- Delay: 300ms after section enters viewport

#### Carousel Transition
- Quote text: Fade + slight scale (0.98 to 1.0)
- Customer info: Fade in with 100ms delay after quote
- Stars: Animate fill from left to right
- Total animation duration: 600ms

## Typography

### Hierarchy
- **Aggregate Rating**: 48-56px, bold, `#d4af37`
- **Quote Text**: 18-20px, `#e0e0e0`, serif or elegant sans
- **Customer Name**: 16-18px, `#f4e4c1`, semi-bold
- **Review Source**: 14px, `#8a8a8a`, regular
- **Review Count**: 16px, `#b0b0b0`, regular

### Quotation Marks
- Font: Decorative serif
- Size: 80-100px
- Opacity: 20-30%
- Position: Absolute, top-left of quote block

## Additional Features

### Multiple Reviews Display (Optional)
- Show 3 reviews in grid on desktop
- Highlight center review with larger size
- Side reviews slightly faded (70% opacity)
- Clicking side reviews brings them to center

### Review Categories
- Optional filter tabs:
  - All Reviews
  - Hair Services
  - Beauty Services
  - Barbing
- Smooth transition when switching categories

### Call-to-Action
- "Leave a Review" button below carousel
- Gold outline button style
- Links to Google/Yelp review page
- Hover: Solid gold background

## Technical Requirements

### Functionality
- Touch/swipe gesture support on mobile
- Keyboard navigation (arrow keys)
- Infinite loop (seamless)
- Preload adjacent slides
- Lazy load images

### Accessibility
- ARIA labels for carousel controls
- ARIA live region for slide changes
- Keyboard focus management
- Pause button for auto-advance (WCAG compliance)
- Alt text for customer photos
- Screen reader announcements

### Performance
- Smooth 60fps transitions
- Optimize for touch devices
- Debounce auto-advance on interaction
- Efficient re-renders

### Responsive Design
- **Desktop**: Full-width carousel, large cards
- **Tablet**: Slightly smaller cards
- **Mobile**: Full-screen slides, swipe-friendly
- Arrow buttons: Hide on mobile, swipe only