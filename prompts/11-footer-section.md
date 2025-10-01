# Footer Section Prompt

## Overview
Design a comprehensive footer with organized navigation, contact information, and social links on the darkest background.

## Design Specifications

### Background
- Darkest background: `#000000`
- Provides maximum contrast separation from content above

---

## Footer Structure

### Layout
Multi-column layout with responsive behavior:
- **Desktop**: 4 columns
- **Tablet**: 2 columns (2x2 grid)
- **Mobile**: Single column stack

### Padding
- Top: 60-80px
- Bottom: 32px
- Horizontal: Match site container width

---

## Column 1: About/Brand

### Content

#### Salon Logo
- Same logo as header
- Height: 60-80px
- Color: Gold tint or white version
- Margin bottom: 16px

#### Brief Description
- 2-3 sentences about salon
- Font size: 14-15px
- Color: `#a0a0a0`
- Line height: 1.6
- Max width: 280px
- Example: "Your premier destination for hair, beauty, and wellness. Transforming looks and boosting confidence since 2015."

#### Tagline (Optional)
- Below description
- Italic or script font
- Color: `#d4af37` (gold)
- Font size: 13-14px
- Example: "Where Style Meets Excellence"

---

## Column 2: Quick Links

### Header
- **Text**: "Quick Links"
- **Color**: `#f4e4c1`
- **Font Size**: 18-20px
- **Font Weight**: Semi-bold
- **Margin Bottom**: 20px

### Links
Display in vertical list:
- Home
- Services
- Book Appointment
- Gallery
- Our Team
- About Us
- Contact
- Blog (if applicable)

### Link Styling
- **Color**: `#b0b0b0`
- **Font Size**: 15px
- **Line Height**: 2.0 (generous spacing)
- **Hover**: 
  - Color shifts to gold `#d4af37`
  - Slight left indent (2-4px translateX)
  - Transition: 250ms ease

---

## Column 3: Contact Info

### Header
- **Text**: "Contact Us"
- **Color**: `#f4e4c1`
- **Font Size**: 18-20px
- **Font Weight**: Semi-bold
- **Margin Bottom**: 20px

### Contact Details
Display with icons (left-aligned):

#### 1. Address
- **Icon**: MapPin (gold `#d4af37`)
- **Text**: Full salon address
- **Color**: `#b0b0b0`
- **Font Size**: 14-15px
- **Clickable**: Links to Google Maps

#### 2. Phone Number
- **Icon**: Phone (gold)
- **Text**: Phone number
- **Format**: +234 XXX XXX XXXX
- **Clickable**: tel: link
- **Hover**: Gold underline

#### 3. Email
- **Icon**: Mail (gold)
- **Text**: Email address
- **Clickable**: mailto: link
- **Hover**: Gold underline

#### 4. Business Hours
- **Icon**: Clock (gold)
- **Text**: 
  ```
  Mon-Fri: 9:00 AM - 8:00 PM
  Sat: 9:00 AM - 6:00 PM
  Sun: 10:00 AM - 5:00 PM
  ```
- **Color**: `#b0b0b0`
- **Font Size**: 14px
- **Line Height**: 1.8

### Icon Styling
- Size: 18-20px
- Color: Gold `#d4af37`
- Vertical alignment: Center with text
- Margin right: 12px

---

## Column 4: Newsletter & Social

### Newsletter Signup

#### Header
- **Text**: "Stay Updated"
- **Color**: `#f4e4c1`
- **Font Size**: 18-20px
- **Margin Bottom**: 12px

#### Subtext
- **Text**: "Subscribe for exclusive offers and tips"
- **Color**: `#8a8a8a`
- **Font Size**: 13-14px
- **Margin Bottom**: 16px

#### Form
Inline form layout:

##### Email Input
- **Placeholder**: "Your email"
- **Background**: `#1a1a1a`
- **Border**: `1px solid #3a3a3a`
- **Text Color**: `#e0e0e0`
- **Padding**: 12px 14px
- **Border Radius**: 6px 0 0 6px (left side only)
- **Width**: Flex-grow
- **Focus**: Gold border `#d4af37`

##### Submit Button
- **Text**: "→" or "Subscribe"
- **Background**: Gold `#d4af37`
- **Color**: `#000000`
- **Padding**: 12px 18px
- **Border Radius**: 0 6px 6px 0 (right side only)
- **Border**: None
- **Hover**: Darken, scale 1.02
- **Icon Option**: Right arrow or paper plane

### Social Media

#### Header
- **Text**: "Follow Us" or just icons
- **Color**: `#f4e4c1`
- **Font Size**: 16-18px
- **Margin**: 24px 0 16px

#### Social Icons
Display horizontally:
- Instagram
- Facebook
- TikTok
- Twitter/X
- YouTube (if applicable)
- Pinterest (if applicable)

#### Icon Styling
- **Size**: 36-40px
- **Color**: `#b0b0b0`
- **Spacing**: 12-16px between icons
- **Background**: Optional circular background `rgba(212, 175, 55, 0.1)`
- **Padding**: 8px (if background used)
- **Border Radius**: 50% (if background used)

#### Hover State
- **Color**: Gold `#d4af37`
- **Background**: `rgba(212, 175, 55, 0.2)`
- **Transform**: Scale 1.1
- **Transition**: 250ms ease
- **Optional**: Rotate slightly (5deg)

---

## Bottom Bar

### Divider Line
- Position: Above bottom bar
- Color: `#2a2a2a`
- Height: 1px
- Margin: 40px 0 24px
- Full width

### Layout
- Flex layout: space-between
- Align items: center
- Responsive: Stack on mobile

### Left Side: Copyright

#### Copyright Text
- **Text**: "© 2025 [Salon Name]. All rights reserved."
- **Color**: `#6a6a6a`
- **Font Size**: 14px

### Right Side: Legal Links

#### Links
Horizontal list with separators:
- Privacy Policy
- Terms of Service
- Cookie Policy (if applicable)

#### Link Styling
- **Color**: `#8a8a8a`
- **Font Size**: 14px
- **Separator**: " | " or " · "
- **Hover**: Gold `#d4af37`
- **Transition**: 200ms

---

## Back to Top Button

### Position
- Fixed position
- Bottom right corner
- Right: 24-32px
- Bottom: 24-32px
- Z-index: 1000

### Button Design
- **Shape**: Circular
- **Size**: 48-52px diameter
- **Background**: `rgba(212, 175, 55, 0.9)`
- **Icon**: Chevron up or arrow up
- **Icon Color**: `#000000`
- **Icon Size**: 24px
- **Shadow**: `0 4px 12px rgba(0, 0, 0, 0.3)`

### States
- **Hidden**: When at top of page (opacity: 0, pointer-events: none)
- **Visible**: When scrolled down (opacity: 1)
- **Hover**: 
  - Background: Brighter gold `#e0c050`
  - Scale: 1.1
  - Shadow increases
- **Active**: Scale 0.95

### Functionality
- Appears after scrolling 300-400px
- Smooth scroll to top on click
- Fade in/out transition: 300ms
- Scroll duration: 800ms ease-in-out

---

## Animations

### On Scroll Into View
- Each column fades in sequentially
- Stagger delay: 150ms between columns
- Slide up effect: 30px translateY
- Duration: 500ms
- Trigger: When footer 20% visible

### Link Hover Animations
- Color transition: 200ms
- Transform (indent/scale): 250ms
- Icon rotation (social): 300ms

### Newsletter Form
- Input focus: Border color 200ms
- Button hover: 250ms all properties
- Success submission: Checkmark animation + message fade

---

## Responsive Breakpoints

### Desktop (1024px+)
- 4-column layout
- All elements side-by-side
- Bottom bar: Flex space-between

### Tablet (768px - 1023px)
- 2x2 grid layout
- About & Quick Links (row 1)
- Contact & Newsletter (row 2)
- Bottom bar: Flex space-between

### Mobile (< 768px)
- Single column stack
- Order: About → Quick Links → Contact → Newsletter
- Each column full width
- Center-align headings (optional)
- Bottom bar: Stack vertically, center-align
- Copyright above legal links
- Social icons: Center-aligned
- Back to Top: Smaller (40px), adjust position

---

## Additional Features

### Newsletter Success State
After successful subscription:
- Input replaced with success message
- Message: "✓ Thanks for subscribing!"
- Color: Gold `#d4af37`
- Duration: 3 seconds
- Then fades back to form

### Newsletter Error State
If submission fails:
- Error message below form
- Color: `#ff4444`
- Message: "Please enter a valid email"
- Shake animation on input

### Payment/Security Badges (Optional)
If e-commerce features:
- Display payment method icons
- SSL secure badge
- Position: Bottom bar or separate row
- Grayscale with subtle hover color

### Awards/Certifications (Optional)
If applicable:
- Small badge images
- "Best Salon 2024" type awards
- Position: Below about section
- Grayscale with gold tint on hover

---

## Technical Requirements

### Newsletter Functionality
- Email validation
- API integration for mailing list
- GDPR compliance checkbox (if EU users)
- Unsubscribe link in confirmation email
- Double opt-in (recommended)

### Accessibility
- Semantic HTML (footer, nav elements)
- ARIA labels for icon-only links
- Keyboard navigation
- Focus indicators (gold outline)
- Sufficient color contrast
- Screen reader friendly
- Skip to content link

### Performance
- Lazy load social media embeds (if any)
- Optimize icon SVGs
- Defer non-critical scripts
- Intersection Observer for animations

### SEO
- Structured data for organization
- Proper heading hierarchy
- Alt text for logo
- Descriptive link text

---

## Color Reference Summary
- **Background**: `#000000`
- **Headings**: `#f4e4c1`
- **Body Text**: `#b0b0b0`
- **Secondary Text**: `#8a8a8a`
- **Muted Text**: `#6a6a6a`
- **Accent/Links**: `#d4af37` (gold)
- **Borders/Dividers**: `#2a2a2a` or `#3a3a3a`
- **Input Backgrounds**: `#1a1a1a`

---

## Spacing Guide
- **Section Padding**: 60-80px top, 32px bottom
- **Column Gap**: 40-60px
- **Heading Margin**: 20px bottom
- **List Item Spacing**: line-height 2.0
- **Icon-Text Gap**: 12px
- **Social Icon Gap**: 12-16px