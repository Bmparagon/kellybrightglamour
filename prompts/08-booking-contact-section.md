# Booking/Contact Section Prompt

## Overview
Build a dual-purpose section combining booking functionality with contact information and location details.

## Design Specifications

### Background
- Dark navy: `#0f1419`

### Layout Structure
Split-screen design (50/50 on desktop):

#### Left Side: Booking Form
Appointment booking interface

#### Right Side: Contact & Location
Contact details and embedded map

---

## Left Side: Booking Form

### Form Container
- Semi-transparent background: `rgba(20, 30, 40, 0.8)`
- Border: `1px solid rgba(212, 175, 55, 0.2)`
- Border radius: 12px
- Padding: 40px
- Backdrop blur effect (optional)

### Form Fields

#### 1. Service Selection
- **Type**: Dropdown/Select
- **Label**: "Select Service"
- **Options**: 
  - Hair Services
  - Beauty Treatments
  - Barbing
  - Spa Services
  - Consultation
- **Styling**: 
  - Background: `#2a2a2a`
  - Text color: `#e0e0e0`
  - Border: `1px solid #3a3a3a`
  - Focus border: Gold `#d4af37`

#### 2. Preferred Date
- **Type**: Date picker
- **Label**: "Preferred Date"
- **Min date**: Today
- **Calendar styling**: Dark theme with gold accents

#### 3. Preferred Time
- **Type**: Time slots or dropdown
- **Label**: "Preferred Time"
- **Options**: Available time slots (e.g., 9:00 AM, 10:00 AM, etc.)

#### 4. Stylist Preference (Optional)
- **Type**: Dropdown with photos
- **Label**: "Choose Stylist (Optional)"
- **Options**: 
  - Any Available
  - List of stylists with names
- **Styling**: Include small profile photo if "Any Available" not selected

#### 5. Full Name
- **Type**: Text input
- **Label**: "Full Name"
- **Placeholder**: "John Doe"
- **Required**: Yes

#### 6. Email Address
- **Type**: Email input
- **Label**: "Email"
- **Placeholder**: "john@example.com"
- **Required**: Yes
- **Validation**: Email format

#### 7. Phone Number
- **Type**: Tel input
- **Label**: "Phone Number"
- **Placeholder**: "+234 XXX XXX XXXX"
- **Required**: Yes
- **Validation**: Phone format

#### 8. Additional Notes (Optional)
- **Type**: Textarea
- **Label**: "Special Requests or Notes"
- **Placeholder**: "Any specific requirements..."
- **Rows**: 3-4

### Input Field Styling
- Background: `#2a2a2a`
- Text color: `#e0e0e0`
- Border: `1px solid #3a3a3a`
- Border radius: 6px
- Padding: 12px 16px
- Font size: 16px

#### Focus State
- Border color: Gold `#d4af37`
- Subtle glow: `0 0 0 3px rgba(212, 175, 55, 0.1)`
- Transition: 200ms ease

#### Error State
- Border color: `#ff4444`
- Error message below field in red
- Shake animation on invalid submit

### Labels
- Color: `#b0b0b0`
- Font size: 14px
- Margin bottom: 6px
- Required indicator (*) in gold

### Submit Button
- **Text**: "Book Appointment"
- **Background**: Gold `#d4af37`
- **Text color**: `#000000` (black for contrast)
- **Width**: Full width
- **Padding**: 16px
- **Font**: Bold, 16-18px
- **Border radius**: 6px

#### Button States
- **Hover**: Darken to `#c29a2f`, scale 1.02
- **Active**: Scale 0.98
- **Disabled**: `#5a5a5a` background, `#8a8a8a` text
- **Loading**: Spinner animation, "Booking..." text

---

## Right Side: Contact & Location

### Contact Information

#### Section Header
- "Get in Touch" or "Visit Us"
- Color: `#f4e4c1`
- Font size: 28-32px
- Margin bottom: 24px

#### Contact Details
Display with icons (use lucide-react or similar):

1. **Address**
   - Icon: MapPin
   - Text: Full salon address
   - Color: `#e0e0e0`
   - Font size: 16px

2. **Phone Number**
   - Icon: Phone
   - Text: Clickable tel: link
   - Color: `#e0e0e0`
   - Hover: Gold underline

3. **Email**
   - Icon: Mail
   - Text: Clickable mailto: link
   - Color: `#e0e0e0`
   - Hover: Gold underline

4. **Business Hours**
   - Icon: Clock
   - Text: 
     - Mon-Fri: 9:00 AM - 8:00 PM
     - Sat: 9:00 AM - 6:00 PM
     - Sun: 10:00 AM - 5:00 PM
   - Color: `#e0e0e0`

#### Icon Styling
- Size: 20-24px
- Color: Gold `#d4af37`
- Margin right: 12px
- Aligned with text

### Embedded Map

#### Map Container
- Google Maps embed
- Height: 300-400px
- Width: 100%
- Border radius: 8px
- Margin top: 32px

#### Map Styling
- Custom dark theme for Google Maps
- Gold marker for salon location
- Zoom level: 15-16

#### Map Features
- Interactive (zoomable, draggable)
- "View larger map" link
- Directions button

### Social Media Links

#### Social Icons Section
Positioned below contact details or map:
- **Label**: "Follow Us"
- **Platforms**: Instagram, Facebook, TikTok, Twitter
- **Icon styling**:
  - Size: 32-36px
  - Color: `#b0b0b0`
  - Hover: Gold `#d4af37` + scale 1.1
  - Spacing: 16px between icons
  - Circular background on hover: `rgba(212, 175, 55, 0.1)`

---

## Animations

### Form Animations

#### Field Focus
- Border color transition: 200ms
- Glow effect fade in: 150ms
- Label color shift to gold: 200ms

#### Form Submission
- Button loading spinner: Rotate 360deg infinite
- Success: Checkmark animation + green flash
- Error: Shake animation (5px horizontal) + red flash
- Duration: 400ms

#### Validation Feedback
- Real-time validation on blur
- Error message slide down: 200ms
- Success indicator (checkmark icon): Fade in

### Contact Section Animations

#### Initial Load
- Contact details fade in sequentially
- Stagger: 100ms between items
- Slide in from right: 30px translateX

#### Map Load
- Fade in after contact details
- Delay: 400ms
- Skeleton loader while loading

#### Social Icons
- Fade in together after map
- Hover: Smooth scale + color transition (250ms)

---

## Responsive Design

### Desktop (1024px+)
- 50/50 split layout
- Form on left, contact on right
- Both sections equal height

### Tablet (768px - 1023px)
- Stack vertically or maintain split
- Reduce padding in form
- Smaller map height (250px)

### Mobile (< 768px)
- Full vertical stack
- Form first, then contact section
- Full-width inputs
- Sticky submit button (optional)
- Map height: 200-250px
- Touch-optimized input sizes (min 44px height)

---

## Technical Requirements

### Form Functionality
- Client-side validation before submission
- Real-time validation on field blur
- Clear error messages
- Success confirmation modal/toast
- Email confirmation after booking
- Calendar integration (optional)

### Date/Time Availability
- Check availability from backend/API
- Disable unavailable dates/times
- Show next available slot if selected time is taken
- Real-time updates

### Map Integration
- Google Maps API
- Custom dark theme JSON
- Lazy loading
- Fallback: Static map image if API fails
- Privacy-friendly (user consent for cookies)

### Accessibility
- Semantic HTML form elements
- Proper label associations
- ARIA labels for complex inputs
- Keyboard navigation
- Focus management
- Error announcements for screen readers
- Color contrast compliance (WCAG AA)

### Performance
- Debounce validation checks
- Optimize map loading
- Lazy load components below fold
- Form state management (React Hook Form or similar)
- Prevent double submission

### Security
- CSRF protection
- Input sanitization
- Rate limiting
- Honeypot field for spam prevention
- ReCAPTCHA integration (optional)

---

## Success/Error States

### Success Confirmation
After successful booking submission:
- Success modal/toast appears
- Message: "Booking Confirmed! Check your email for details."
- Confirmation number displayed
- Options: 
  - "Add to Calendar" button
  - "Back to Home" button
- Auto-dismiss after 5 seconds (modal) or 3 seconds (toast)

### Error Handling
- Network error: "Unable to connect. Please try again."
- Validation error: Specific field feedback
- Server error: "Something went wrong. Please contact us directly."
- Provide fallback: Phone number to call

---

## Additional Features

### Booking Preferences Saved (Optional)
- Remember stylist preference for logged-in users
- Pre-fill contact details for returning customers
- Show booking history

### Estimated Price Display
- Show estimated price based on selected service
- Update dynamically when service changes
- Disclaimer: "Final price may vary based on consultation"

### Waitlist Option
- If preferred time unavailable
- "Join waitlist" button appears
- Notification when slot becomes available