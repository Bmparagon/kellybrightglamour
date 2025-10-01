# Pricing Section Prompt

## Overview
Design a comprehensive pricing section organizing services into clear categories with transparent pricing and booking options.

## Design Specifications

### Background
- Gradient: From `#1a1a1a` (top) to `#0a0a0a` (bottom)
- Smooth vertical transition

### Layout Structure

#### Organization Options
Choose one:
1. **Collapsible Accordions**: Categories expand/collapse
2. **Tabs**: Switch between categories
3. **Single Page**: All visible with anchor links

### Service Categories
Organize into logical groups:
- Hair Services (cuts, styling, treatments)
- Color Services (highlights, balayage, full color)
- Barbing (cuts, shaves, beard grooming)
- Beauty (nails, makeup, skincare)
- Spa & Wellness (massage, treatments)

### Pricing Card/Row Design

#### Each Service Entry Contains:
1. **Service Name**
   - Bold, prominent
   - Color: `#f4e4c1`
   - Font size: 18-20px

2. **Description**
   - 1-2 lines explaining service
   - Color: `#a0a0a0`
   - Font size: 14-16px

3. **Duration**
   - Display with clock icon
   - Example: "45-60 min"
   - Color: `#b0b0b0`

4. **Price**
   - Emphasized with larger font
   - Color: `#d4af37` (gold)
   - Font size: 20-24px
   - Examples: "$50", "From $75", "$80-$120"

5. **Book Button**
   - "Book This Service" or "Book Now"
   - Gold background: `#d4af37`
   - White text
   - Hover: Darken slightly + scale 1.02

#### Card Styling
- Semi-transparent background: `rgba(26, 26, 26, 0.6)`
- Border: `1px solid rgba(212, 175, 55, 0.2)`
- Border radius: 8px
- Padding: 24px
- Margin bottom: 16px

### Special Highlighting

#### Popular/Premium Services
- Gold accent border: `2px solid #d4af37`
- "Popular" or "Premium" badge in top-right corner
- Slightly elevated with shadow
- Different background opacity for emphasis

### Tier Structure (If Applicable)
For services with levels (Junior/Senior/Master Stylist):
- Display as 3 columns or expandable options
- Price variation shown clearly
- Visual indicator of tier level

### Additional Elements

#### Consultation Note
- Prominent callout box
- Text: "Custom services available - Schedule a consultation"
- Icon: phone or calendar
- Link to booking or contact

#### Package Deals (Optional)
- Separate section for bundled services
- "Save X%" indicator
- Listed services included
- Total price vs. individual pricing

## Animations

### Category Reveal
- Fade in when category opened/selected
- Each service entry staggers in (100ms delay)
- Slide up + fade effect (translateY: 20px to 0)

### Accordion/Tab Transitions
- Smooth height transition: 400ms
- Content fade: 300ms
- Rotation of expand icon: 300ms

### Hover Effects
- Card subtle lift: 2px translateY
- Border color intensifies
- Book button color shift
- Transition: 250ms ease

## Typography Hierarchy
- **Category Headers**: 28-32px, `#f4e4c1`, bold
- **Service Names**: 18-20px, `#f4e4c1`, semi-bold
- **Descriptions**: 14-16px, `#a0a0a0`, regular
- **Prices**: 20-24px, `#d4af37`, bold
- **Duration**: 14px, `#b0b0b0`, regular

## Technical Requirements

### Functionality
- Search/filter functionality (optional)
- Price sorting (low to high, high to low)
- Category quick navigation with smooth scroll
- Sticky category navigation on scroll (optional)

### Accessibility
- Semantic HTML (proper heading hierarchy)
- Keyboard navigation for accordions/tabs
- ARIA labels for interactive elements
- Focus indicators with gold outline
- Screen reader announcements for price changes

### Responsive Design
- **Desktop**: Multi-column layout where appropriate
- **Tablet**: 2-column or single column
- **Mobile**: Single column, full-width cards

### Performance
- Lazy render collapsed categories
- Optimize re-renders on category switch
- Smooth transitions without layout shift