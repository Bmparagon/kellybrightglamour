
# Gallery/Portfolio Section Prompt

## Overview
Build a before/after gallery showcasing salon work with filtering capabilities and lightbox functionality.

## Design Specifications

### Background
- True black: `#000000`
- Purpose: Maximum contrast to make images pop dramatically

### Filter Navigation

#### Filter Buttons
Display at top of section:
- All (default)
- Hair
- Beauty
- Barbing
- Color

#### Button Styling
- Horizontal layout, centered
- Text color: `#b0b0b0`
- Active state: `#f4e4c1` with gold underline `#d4af37`
- Underline animation: Slide from left to right (300ms)
- Spacing: 24px between buttons
- Hover: Gold text color

### Gallery Layout

#### Layout Options
Choose one based on image variety:
- **Masonry Grid**: For varied image sizes
- **Standard Grid**: For uniform image sizes

#### Grid Specifications
- **Desktop**: 3-4 columns
- **Tablet**: 2-3 columns
- **Mobile**: 1-2 columns
- Gap between images: 16-24px

### Image Card Design

#### Default State
- Aspect ratio maintained
- Slight border: `1px solid rgba(212, 175, 55, 0.1)`
- Smooth edges: 4px border radius

#### Hover State
- Dark overlay appears: `rgba(0, 0, 0, 0.6)`
- Service type label fades in (centered)
- Image scales to 1.05 (zoom effect)
- Cursor: pointer
- Transition: 400ms ease-out

#### Overlay Content
- Service type (e.g., "Balayage Color", "Beard Trim")
- Optional: Stylist name
- Font: `#f4e4c1`
- Background: Semi-transparent dark with blur

### Lightbox Functionality

#### Trigger
- Click on any image opens lightbox

#### Lightbox Features
- Full-screen dark overlay: `rgba(0, 0, 0, 0.95)`
- Enlarged image (centered)
- Navigation arrows (previous/next)
- Close button (top-right)
- Image caption below
- Keyboard navigation (arrow keys, ESC)
- Click outside image to close

#### Lightbox Styling
- Gold accent for controls: `#d4af37`
- Smooth fade-in animation
- Image zoom animation (scale 0.9 to 1.0)

## Animations

### Image Load Animation
- Fade in + scale effect (0.95 to 1.0)
- Stagger: 100ms between images
- Trigger on scroll into view

### Filter Transition
- Filtered images fade out (200ms)
- New filtered images fade in (300ms)
- Slight position shift for smooth transition

### Hover Animation
- Overlay fade: 300ms
- Image zoom: 400ms
- Label slide up from bottom: 250ms

## Call-to-Action

### Instagram CTA Button
- Positioned below gallery
- Text: "View More on Instagram" or "Follow Us on Instagram"
- Gold button: `#d4af37`
- Instagram icon included
- Hover: Darken shade + scale 1.05
- Links to salon's Instagram profile

## Technical Requirements

### Performance
- Lazy loading for all images
- Progressive image loading (blur-up technique)
- WebP format with JPEG fallback
- Responsive image sizes (srcset)

### Accessibility
- Alt text describing each image
- Keyboard navigation for lightbox
- Focus trap in lightbox
- ARIA labels for buttons
- Reduced motion support

### Filtering Logic
- Smooth CSS transitions
- No page reload
- URL parameter for shareable filtered views (optional)

### Image Optimization
- Next.js Image component
- Automatic format detection
- Lazy loading with placeholder
- Priority loading for above-fold images