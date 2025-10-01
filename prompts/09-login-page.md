# Login Page Prompt

## Overview
Design a centered login page with elegant dark aesthetics and smooth animations for customer authentication.

## Design Specifications

### Background
- Full-screen gradient:
  - Top: `#0a0a0a`
  - Bottom: `#1a1a1a`
- Smooth vertical gradient transition

### Optional Background Effects
Choose one or combine:
- Subtle animated particles (gold dots drifting slowly)
- Gradient color shift animation (very subtle)
- Geometric pattern overlay at 3% opacity
- Blurred salon image overlay at 10-15% opacity

---

## Login Card

### Card Container
- **Position**: Centered (vertical & horizontal)
- **Width**: 
  - Desktop: 450-500px
  - Tablet: 400px
  - Mobile: 90% of viewport
- **Background**: Semi-transparent `rgba(26, 26, 26, 0.8)`
- **Backdrop Filter**: Blur 10px (glassmorphism effect)
- **Border**: `2px solid rgba(212, 175, 55, 0.3)`
- **Border Radius**: 16px
- **Shadow**: `0 8px 32px rgba(0, 0, 0, 0.5)`
- **Padding**: 48px 40px

### Logo Section
- **Position**: Top of card, centered
- **Logo Image**: Salon logo
- **Size**: 80-100px height
- **Margin Bottom**: 32px
- **Animation**: Fade in first (before card)
  - Delay: 0ms
  - Duration: 600ms
  - Effect: Fade + slight scale (0.8 to 1.0)

### Welcome Text (Optional)
- **Text**: "Welcome Back" or "Sign In to Your Account"
- **Color**: `#f4e4c1`
- **Font Size**: 24-28px
- **Alignment**: Center
- **Margin Bottom**: 24px
- **Animation**: Fade in after logo (200ms delay)

---

## Form Elements

### Email Field

#### Input Container
- **Label**: "Email Address"
- **Label Color**: `#b0b0b0`
- **Font Size**: 14px
- **Margin Bottom**: 6px

#### Input Field
- **Type**: Email
- **Placeholder**: "your.email@example.com"
- **Icon**: Mail icon (left side, inside input)
- **Icon Color**: `#8a8a8a`
- **Icon Size**: 18-20px
- **Background**: `#1f1f1f`
- **Text Color**: `#e0e0e0`
- **Border**: `1px solid #3a3a3a`
- **Border Radius**: 8px
- **Padding**: 14px 16px 14px 44px (space for icon)
- **Font Size**: 16px

#### Focus State
- Border Color: Gold `#d4af37`
- Glow: `0 0 0 3px rgba(212, 175, 55, 0.15)`
- Icon Color: Gold `#d4af37`
- Transition: 200ms ease

### Password Field

#### Input Container
- **Label**: "Password"
- **Label Color**: `#b0b0b0`
- **Font Size**: 14px
- **Margin Top**: 20px
- **Margin Bottom**: 6px

#### Input Field
- **Type**: Password (with toggle visibility)
- **Placeholder**: "Enter your password"
- **Icon**: Lock icon (left side)
- **Toggle Icon**: Eye/EyeOff icon (right side)
- **Styling**: Same as email field
- **Padding**: 14px 44px 14px 44px (icons on both sides)

#### Toggle Visibility
- Click eye icon to show/hide password
- Icon transition: 200ms
- Icon color: `#8a8a8a`, hover: `#d4af37`

### Remember Me & Forgot Password

#### Layout
- Single row with space-between alignment
- Margin: 20px 0

#### Remember Me Checkbox
- **Left Side**
- Custom styled checkbox
- Checked state: Gold `#d4af37`
- Label: "Remember me"
- Label Color: `#b0b0b0`
- Font Size: 14px

#### Forgot Password Link
- **Right Side**
- Text: "Forgot password?"
- Color: `#d4af37`
- Font Size: 14px
- Hover: Underline, brighter gold
- Links to password reset page

---

## Submit Button

### Button Design
- **Text**: "Sign In" or "Login"
- **Width**: Full width (100%)
- **Background**: Gold gradient `linear-gradient(135deg, #d4af37 0%, #c29a2f 100%)`
- **Text Color**: `#000000` (black for contrast)
- **Font**: Bold, 16-18px
- **Padding**: 16px
- **Border Radius**: 8px
- **Border**: None
- **Margin Top**: 24px

### Button States

#### Hover
- Background: Darker gradient
- Transform: Scale 1.02
- Shadow: `0 6px 20px rgba(212, 175, 55, 0.3)`
- Transition: 250ms ease

#### Active
- Transform: Scale 0.98

#### Loading
- Spinner animation (rotating circle)
- Text: "Signing in..."
- Cursor: not-allowed
- Opacity: 0.8

#### Disabled
- Background: `#4a4a4a`
- Text Color: `#8a8a8a`
- Cursor: not-allowed

---

## Sign Up Link

### Design
- **Position**: Below submit button
- **Margin Top**: 24px
- **Alignment**: Center
- **Text**: "Don't have an account? "
- **Text Color**: `#b0b0b0`
- **Link Text**: "Sign up"
- **Link Color**: `#d4af37`
- **Font Size**: 14-16px

### Link Hover
- Underline
- Brighter gold: `#e0c050`
- Transition: 200ms

---

## Animations

### Page Load Sequence
1. **Background**: Fade in (0-400ms)
2. **Logo**: Fade + scale (200-800ms)
3. **Card**: Fade + scale 0.95 to 1.0 (400-1000ms)
4. **Welcome Text**: Fade (600-1000ms)
5. **Form Fields**: Sequential fade + slide up (800-1400ms)
   - Email: 800ms
   - Password: 900ms
   - Remember/Forgot: 1000ms
   - Submit Button: 1100ms
   - Sign Up Link: 1200ms
6. **Stagger Delay**: 100ms between elements

### Field Interactions
- Focus glow: 200ms ease-in
- Icon color shift: 200ms
- Error shake: 400ms (5px horizontal oscillation)

### Button Interactions
- Hover effects: 250ms ease
- Click feedback: 150ms
- Loading spinner: Continuous rotation

---

## Error Handling

### Validation Errors
- **Display**: Below relevant field
- **Color**: `#ff4444`
- **Font Size**: 13px
- **Animation**: Slide down + fade in (200ms)
- **Icon**: Alert circle icon

### Error Messages
- "Please enter a valid email address"
- "Password is required"
- "Invalid email or password"

### Error State Styling
- Field border: Red `#ff4444`
- Field glow: Red tint
- Shake animation on submit failure

---

## Success State

### After Successful Login
- Success checkmark animation
- Brief delay (500ms)
- Redirect to dashboard with fade transition
- Optional: Success toast notification

---

## Additional Features

### Social Login (Optional)
Positioned above or below main form:

#### OAuth Buttons
- "Continue with Google"
- "Continue with Facebook"

#### Button Styling
- Background: `#2a2a2a`
- Border: `1px solid #3a3a3a`
- Text: `#e0e0e0`
- Icon: Platform brand color
- Hover: Slight lift + border gold tint
- Full width
- Margin: 8px 0

#### Divider
- "Or continue with email"
- Horizontal lines with text centered
- Line color: `#3a3a3a`
- Text color: `#8a8a8a`

---

## Responsive Design

### Desktop (1024px+)
- Card: 450-500px width
- Full animations

### Tablet (768px - 1023px)
- Card: 400px width
- Slightly reduced padding

### Mobile (< 768px)
- Card: 90% viewport width
- Padding: 32px 24px
- Reduce animation complexity
- Larger touch targets (min 44px)

---

## Technical Requirements

### Functionality
- Form validation on submit and field blur
- Remember me: Store token/session
- Secure password handling
- Rate limiting for login attempts
- CSRF protection

### Accessibility
- Semantic form elements
- Proper label associations
- ARIA labels for icons
- Keyboard navigation
- Focus visible indicators
- Screen reader announcements
- Error announcements

### Security
- Password masking
- No password in URL/logs
- Secure token storage
- HTTPS only
- Input sanitization

### Performance
- Optimize animation performance (GPU acceleration)
- Preload assets
- Fast page load time
- Smooth 60fps animations