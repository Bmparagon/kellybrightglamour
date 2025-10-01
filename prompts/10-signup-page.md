# Sign Up Page Prompt

## Overview
Create a comprehensive signup page with multi-step form capability, matching the login page aesthetic with enhanced functionality for new user registration.

## Design Specifications

### Background
- **Identical to Login Page**:
  - Full-screen gradient: `#0a0a0a` (top) to `#1a1a1a` (bottom)
  - Same optional effects (particles, pattern, etc.)

---

## Signup Card

### Card Container
- **Dimensions**: Slightly larger than login card
  - Desktop: 550-600px width
  - Tablet: 480px width
  - Mobile: 90-95% viewport
- **Background**: Semi-transparent `rgba(26, 26, 26, 0.8)`
- **Backdrop Filter**: Blur 10px
- **Border**: `2px solid rgba(212, 175, 55, 0.3)`
- **Border Radius**: 16px
- **Shadow**: `0 8px 32px rgba(0, 0, 0, 0.5)`
- **Padding**: 48px 40px

### Logo & Header
- **Logo**: Same as login (80-100px height, centered)
- **Heading**: "Create Your Account" or "Join Us"
- **Heading Color**: `#f4e4c1`
- **Font Size**: 24-28px
- **Alignment**: Center
- **Margin Bottom**: 32px

---

## Form Structure

### Option 1: Single Page Form
All fields visible at once

### Option 2: Multi-Step Form (Recommended)
- **Step 1**: Personal Information
- **Step 2**: Account Security
- **Step 3**: Preferences (Optional)

#### Progress Indicator (if multi-step)
- Position: Top of card, below header
- Style: Horizontal progress bar or step dots
- Colors:
  - Complete: Gold `#d4af37`
  - Current: Gold outline
  - Incomplete: `#3a3a3a`
- Animation: Smooth transition between steps (400ms)

---

## Form Fields

### Step 1: Personal Information

#### 1. Full Name
- **Label**: "Full Name"
- **Type**: Text
- **Placeholder**: "John Doe"
- **Icon**: User icon
- **Required**: Yes
- **Validation**: Minimum 2 characters

#### 2. Email Address
- **Label**: "Email Address"
- **Type**: Email
- **Placeholder**: "your.email@example.com"
- **Icon**: Mail icon
- **Required**: Yes
- **Validation**: Email format, check if already exists

#### 3. Phone Number
- **Label**: "Phone Number"
- **Type**: Tel
- **Placeholder**: "+234 XXX XXX XXXX"
- **Icon**: Phone icon
- **Required**: Yes
- **Validation**: Phone format
- **Country Code**: Dropdown or auto-detect

---

### Step 2: Account Security

#### 4. Password
- **Label**: "Create Password"
- **Type**: Password
- **Placeholder**: "Create a strong password"
- **Icon**: Lock icon
- **Toggle**: Eye/EyeOff icon (show/hide)
- **Required**: Yes

#### Password Strength Indicator
- Position: Below password field
- Visual: Progress bar or color-coded text
- Levels:
  - Weak: Red
  - Medium: Yellow
  - Strong: Gold `#d4af37`
- Requirements shown:
  - ✓ At least 8 characters
  - ✓ One uppercase letter
  - ✓ One number
  - ✓ One special character

#### 5. Confirm Password
- **Label**: "Confirm Password"
- **Type**: Password
- **Placeholder**: "Re-enter your password"
- **Icon**: Lock icon
- **Required**: Yes
- **Validation**: Must match password field
- **Real-time Check**: Shows checkmark when matches

---

### Step 3: Preferences (Optional)

#### 6. Birthday (Optional)
- **Label**: "Birthday (Optional)"
- **Type**: Date picker
- **Placeholder**: "MM/DD/YYYY"
- **Icon**: Calendar icon
- **Purpose**: Birthday promotions/discounts
- **Note**: "We'll send you special birthday treats!"

#### 7. Profile Photo Upload (Optional)
- **Label**: "Profile Photo (Optional)"
- **Type**: File upload
- **Accept**: Image files (jpg, png, webp)
- **Max Size**: 5MB
- **Preview**: Circular thumbnail (100px diameter)
- **Styling**: Dashed border, upload icon
- **Hover**: Gold border highlight
- **Note**: "Add a photo to personalize your profile"

---

## Checkboxes & Consent

### Marketing Preferences
- **Checkbox**: Custom styled
- **Label**: "Send me promotions, special offers, and salon updates"
- **Default**: Unchecked
- **Colors**: Gold when checked

### Terms & Conditions
- **Checkbox**: Custom styled (required)
- **Label**: "I agree to the Terms of Service and Privacy Policy"
- **Required**: Yes
- **Links**: "Terms of Service" and "Privacy Policy" (gold, underline on hover)
- **Opens**: Modal or new tab

---

## Input Field Styling

### Default State
- Background: `#1f1f1f`
- Text Color: `#e0e0e0`
- Border: `1px solid #3a3a3a`
- Border Radius: 8px
- Padding: 14px 16px 14px 44px (with icon)
- Font Size: 16px

### Focus State
- Border: Gold `#d4af37`
- Glow: `0 0 0 3px rgba(212, 175, 55, 0.15)`
- Icon: Gold color
- Transition: 200ms

### Error State
- Border: Red `#ff4444`
- Glow: Red tint
- Error message below field
- Icon: Alert color

### Success State (after validation)
- Border: Green `#44ff44` (brief flash)
- Checkmark icon appears briefly
- Transition to default state

---

## Navigation Buttons (Multi-Step)

### Next/Continue Button
- **Text**: "Continue" or "Next"
- **Style**: Gold gradient background
- **Position**: Bottom right of form
- **Width**: Auto or 150px
- **Disabled**: If current step invalid

### Back Button
- **Text**: "Back"
- **Style**: Outlined, ghost button
- **Position**: Bottom left of form
- **Color**: `#b0b0b0`
- **Hover**: Gold tint

---

## Submit Button

### Final Submit (Last Step)
- **Text**: "Create Account"
- **Width**: Full width
- **Background**: Gold gradient `linear-gradient(135deg, #d4af37 0%, #c29a2f 100%)`
- **Text Color**: `#000000`
- **Font**: Bold, 16-18px
- **Padding**: 16px
- **Border Radius**: 8px
- **Margin Top**: 24px

### Button States
- **Hover**: Darker gradient, scale 1.02, shadow
- **Loading**: Spinner + "Creating account..."
- **Disabled**: Gray background if terms not accepted

---

## OAuth Options

### Social Signup
Positioned at top of form or above form:

#### "Sign up with" Buttons
- Google
- Facebook
- Apple (optional)

#### Button Styling
- Full width or side-by-side
- Background: `#2a2a2a`
- Border: `1px solid #3a3a3a`
- Platform logo + text
- Hover: Gold border tint + lift

#### Divider
- Text: "Or sign up with email"
- Horizontal lines
- Line color: `#3a3a3a`
- Text color: `#8a8a8a`

---

## Login Link

### Existing Account Link
- **Position**: Below submit button
- **Margin Top**: 24px
- **Alignment**: Center
- **Text**: "Already have an account? "
- **Text Color**: `#b0b0b0`
- **Link Text**: "Log in"
- **Link Color**: `#d4af37`
- **Font Size**: 14-16px
- **Hover**: Underline, brighter gold

---

## Animations

### Page Load Sequence
1. Background fade in (0-400ms)
2. Logo fade + scale (200-800ms)
3. Card fade + scale (400-1000ms)
4. Header text fade (600-1000ms)
5. Progress indicator (if multi-step) (700ms)
6. Form fields sequential fade + slide up (800-1600ms)
7. Stagger: 80-100ms between fields

### Step Transitions (Multi-Step)
- Current step slides out left + fades (300ms)
- Next step slides in from right + fades (300ms)
- Progress bar fills smoothly (400ms)
- Total transition: 600ms

### Field Interactions
- Focus glow: 200ms
- Validation feedback: 250ms
- Password strength: Real-time, smooth transitions
- Success checkmark: Pop animation (scale 0 to 1.2 to 1.0)

---

## Validation & Error Handling

### Real-Time Validation
- On field blur (after first interaction)
- Show errors immediately
- Show success briefly

### Error Messages
- "Please enter your full name"
- "Please enter a valid email address"
- "This email is already registered"
- "Please enter a valid phone number"
- "Password must be at least 8 characters"
- "Passwords do not match"
- "Please accept the terms and conditions"

### Error Display
- Color: `#ff4444`
- Font Size: 13px
- Icon: Alert circle
- Animation: Slide down + fade (200ms)
- Position: Below field

---

## Success State

### After Successful Registration
- Success modal or overlay
- Checkmark animation (circular reveal)
- Message: "Account Created Successfully!"
- Sub-message: "Redirecting to your dashboard..."
- Auto-redirect after 2 seconds
- Optional: Welcome email notification

---

## Additional Features

### Password Requirements Tooltip
- Appears on password field focus
- Lists all requirements
- Updates in real-time (checkmarks appear)
- Styled card with dark background
- Position: Adjacent to field

### Email Verification
- After signup, show verification notice
- "Please check your email to verify your account"
- Resend verification link option
- Timer: "Resend in 60 seconds"

### Referral Code (Optional)
- Field: "Referral Code (Optional)"
- Collapsible or always visible
- Validates code on blur
- Shows discount/benefit if valid

---

## Responsive Design

### Desktop (1024px+)
- Card: 550-600px width
- All animations active
- Side-by-side OAuth buttons

### Tablet (768px - 1023px)
- Card: 480px width
- Slightly reduced padding
- Stacked OAuth buttons

### Mobile (< 768px)
- Card: 90-95% viewport
- Padding: 32px 24px
- Larger touch targets (min 44px)
- Simplified animations
- Single-column layout
- Sticky submit button (optional)

---

## Technical Requirements

### Functionality
- Multi-step form state management
- Progressive validation
- Password strength calculation
- Email uniqueness check (API call)
- Profile photo upload with preview
- Secure data transmission
- CSRF protection

### Accessibility
- Semantic HTML
- Proper form labels
- ARIA labels for custom elements
- Keyboard navigation between steps
- Focus management on step transitions
- Screen reader announcements
- Error announcements
- Progress indicator accessible

### Security
- Password hashing (backend)
- Input sanitization
- Rate limiting
- Email verification
- Secure file upload
- No sensitive data in localStorage

### Performance
- Optimize animations (60fps)
- Lazy load steps (multi-step)
- Image compression for uploads
- Debounce validation API calls
- Fast page load
- Smooth transitions