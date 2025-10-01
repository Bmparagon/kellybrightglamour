# Services Section Prompt

## Overview
Build a services showcase section displaying all salon offerings in an organized, visually appealing layout.

## Design Specifications

### Background
- Dark charcoal: `#1a1a1a`

### Service Categories
Display the following categories in a grid layout:
- Hair Services
- Beauty Treatments
- Barbing
- Spa & Wellness

### Service Card Design

#### Card Structure
Each card should include:
- Service category name
- Brief description (2 lines maximum)
- Starting price (e.g., "From $50")
- Duration estimate (e.g., "45-60 min")
- "Learn More" link

#### Typography
- **Heading**: Cream-colored text (`#f4e4c1`)
- **Description**: Light gray (`#b0b0b0`)
- **Price**: Emphasized with gold accent

#### Styling
- Subtle card elevation/shadow
- Gold border glow on hover: `#d4af37`
- Rounded corners (8-12px radius)

### Animations

#### Scroll-Triggered Fade-In
- Sequential card appearance
- Stagger delay: 150ms between cards
- Fade + slight scale effect (0.95 to 1.0)
- Trigger: Intersection Observer at 20% visibility

#### Hover Effects
- Gold border glow transition (300ms)
- "Learn More" link underline animation
- Slight card lift (2-4px translateY)

## Layout
- **Desktop**: 4-column grid or 2x2 grid
- **Tablet**: 2-column grid
- **Mobile**: Single column stack

## Technical Requirements
- CSS Grid or Flexbox layout
- Smooth transitions for all interactions
- Accessible keyboard navigation
- Focus states with gold outline