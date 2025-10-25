# Component Documentation

Complete documentation for all reusable components in the Dr. Ramaswamy Hospitals website.

## Table of Contents

1. [Toast Notifications](#toast-notifications)
2. [Page Transitions](#page-transitions)
3. [Parallax Section](#parallax-section)
4. [Photo Gallery](#photo-gallery)
5. [Loading Components](#loading-components)
6. [Navigation Components](#navigation-components)
7. [Animation Components](#animation-components)
8. [Utility Components](#utility-components)

---

## Toast Notifications

**File**: `src/components/Toast.jsx`

A modern notification system for displaying success, error, warning, and info messages.

### Usage

```jsx
import { useToast } from '../components/Toast'

function MyComponent() {
  const toast = useToast()
  
  // Success notification
  toast.success('Operation completed successfully!', 5000)
  
  // Error notification
  toast.error('Something went wrong!', 4000)
  
  // Warning notification
  toast.warning('Please check your input', 3000)
  
  // Info notification
  toast.info('Processing your request...', 2000)
  
  return <button onClick={() => toast.success('Clicked!')}>Click me</button>
}
```

### Props

The toast functions accept:
- `message` (string, required): The message to display
- `duration` (number, optional): Duration in milliseconds (default: 3000)

### Features

- ✅ 4 types: success, error, warning, info
- ✅ Auto-dismiss with configurable duration
- ✅ Manual close button
- ✅ Smooth slide-in animation
- ✅ Stacked multiple toasts
- ✅ Mobile responsive
- ✅ Accessible (ARIA labels)

### Styling

Customize colors in `src/styles/toast.css`:

```css
.toast-success { border-left-color: #10b981; }
.toast-error { border-left-color: #ef4444; }
.toast-warning { border-left-color: #f59e0b; }
.toast-info { border-left-color: var(--brand); }
```

---

## Page Transitions

**File**: `src/components/PageTransition.jsx`

Smooth fade animations between page navigations.

### Usage

Wrap your route content in `PageTransition`:

```jsx
import PageTransition from './components/PageTransition'

<PageTransition>
  <Outlet />
</PageTransition>
```

### Features

- ✅ Automatic fade-out/fade-in on route change
- ✅ Subtle overlay during transition
- ✅ Smooth, professional UX
- ✅ No configuration needed
- ✅ Works with React Router

### Customization

Edit animation speed in `src/styles/pageTransition.css`:

```css
.page-transition {
  animation-duration: 0.3s; /* Change to 0.5s for slower */
}
```

---

## Parallax Section

**File**: `src/components/ParallaxSection.jsx`

Beautiful depth effects with parallax scrolling.

### Components

#### ParallaxSection

Basic parallax container for elements:

```jsx
import { ParallaxSection } from '../components/ParallaxSection'

<ParallaxSection speed={0.5}>
  <div>Your content here</div>
</ParallaxSection>
```

#### ParallaxBackground

Parallax effect for background elements:

```jsx
import { ParallaxBackground } from '../components/ParallaxSection'

<ParallaxBackground speed={0.3}>
  <div>Background content</div>
</ParallaxBackground>
```

#### ParallaxHero

Hero section with parallax background image:

```jsx
import { ParallaxHero } from '../components/ParallaxSection'

<ParallaxHero backgroundImage="/path/to/image.jpg">
  <h1>Hero Content</h1>
</ParallaxHero>
```

### Props

**ParallaxSection & ParallaxBackground:**
- `speed` (number): Parallax intensity (0.1 - 1.0+)
- `children` (ReactNode): Content to display

**ParallaxHero:**
- `backgroundImage` (string): URL or path to background image
- `children` (ReactNode): Hero content
- `speed` (number, optional): Parallax intensity (default: 0.5)

### Speed Guidelines

- `0.1` - Very subtle parallax
- `0.3` - Light parallax (recommended for backgrounds)
- `0.5` - Medium parallax (recommended for elements)
- `0.7` - Strong parallax
- `1.0+` - Extreme parallax (use sparingly)

### Features

- ✅ Smooth 60fps animations
- ✅ Performance optimized (passive scroll listeners)
- ✅ Automatically disabled on mobile
- ✅ Respects prefers-reduced-motion
- ✅ Multiple parallax components

### Best Practices

- ✅ Use sparingly - not every section needs parallax
- ✅ Lower speeds (0.2-0.4) for subtle effects
- ✅ Test on mobile devices
- ❌ Don't use on text content
- ❌ Don't overload pages

---

## Photo Gallery

**File**: `src/components/PhotoGallery.jsx`

Interactive photo gallery with lightbox functionality.

### Usage

```jsx
import PhotoGallery from '../components/PhotoGallery'

const images = [
  { src: '/path/to/image1.jpg', alt: 'Description 1' },
  { src: '/path/to/image2.jpg', alt: 'Description 2' },
]

<PhotoGallery images={images} />
```

### Props

- `images` (array, required): Array of image objects
  - `src` (string): Image URL or path
  - `alt` (string): Alt text for accessibility

### Features

- ✅ Grid layout (responsive)
- ✅ Lightbox overlay on click
- ✅ Navigation (next/previous)
- ✅ Keyboard navigation (arrow keys, Esc)
- ✅ Click outside to close
- ✅ Mobile-friendly swipe gestures
- ✅ Smooth animations
- ✅ Accessible

### Customization

Edit grid layout in `src/styles/photoGallery.css`:

```css
.photo-gallery-grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
```

---

## Loading Components

### LoadingScreen

**File**: `src/components/LoadingScreen.jsx`

Full-screen loading spinner for initial page load.

```jsx
import LoadingScreen from '../components/LoadingScreen'

<LoadingScreen />
```

**Features:**
- Centered spinner
- Brand colors
- Smooth animation
- Accessible

### LoadingSkeleton

**File**: `src/components/LoadingSkeleton.jsx`

Skeleton screens for better perceived performance.

```jsx
import LoadingSkeleton from '../components/LoadingSkeleton'

<LoadingSkeleton type="text" />
<LoadingSkeleton type="card" />
<LoadingSkeleton type="image" />
```

**Props:**
- `type` (string): 'text', 'card', 'image', or 'circle'
- `width` (string, optional): Custom width
- `height` (string, optional): Custom height

**Features:**
- Multiple skeleton types
- Shimmer animation
- Customizable dimensions
- Responsive

---

## Navigation Components

### Breadcrumbs

**File**: `src/components/Breadcrumbs.jsx`

Breadcrumb navigation for page hierarchy.

```jsx
import Breadcrumbs from '../components/Breadcrumbs'

<Breadcrumbs />
```

**Features:**
- Automatic breadcrumb generation from route
- Home link always present
- Current page highlighted
- Mobile responsive
- Accessible with ARIA labels

**Customization:**
Breadcrumbs automatically use translations from i18n system.

### ScrollToTop

**File**: `src/components/ScrollToTop.jsx`

Automatically scrolls to top on route change.

```jsx
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Your routes */}
    </>
  )
}
```

**Features:**
- Automatic scroll on navigation
- Smooth scroll behavior
- Works with React Router

### ScrollProgress

**File**: `src/components/ScrollProgress.jsx`

Visual scroll progress indicator.

```jsx
import ScrollProgress from './components/ScrollProgress'

<ScrollProgress />
```

**Features:**
- Fixed top bar showing scroll progress
- Smooth animation
- Brand colored
- Lightweight and performant

---

## Animation Components

### AnimatedSection

**File**: `src/components/AnimatedSection.jsx`

Fade-in animation when scrolling into view.

```jsx
import AnimatedSection from '../components/AnimatedSection'

<AnimatedSection>
  <div>Content that animates on scroll</div>
</AnimatedSection>
```

**Props:**
- `children` (ReactNode): Content to animate
- `delay` (number, optional): Animation delay in milliseconds
- `threshold` (number, optional): Intersection threshold (0-1)

**Features:**
- Fade-in and slide-up animation
- Intersection Observer API
- Configurable delay
- Respects prefers-reduced-motion
- Mobile optimized

### CountUp

**File**: `src/components/CountUp.jsx`

Animated number counter (used for statistics).

```jsx
import CountUp from '../components/CountUp'

<CountUp end={25} duration={2000} suffix="+" />
```

**Props:**
- `end` (number, required): Final number to count to
- `duration` (number, optional): Animation duration in ms (default: 2000)
- `suffix` (string, optional): Text to append (e.g., "+", "%")
- `prefix` (string, optional): Text to prepend (e.g., "$")

**Features:**
- Smooth counting animation
- Starts when scrolled into view
- Configurable duration
- Prefix/suffix support
- Intersection Observer based

---

## Utility Components

### LanguageModal

**File**: `src/components/LanguageModal.jsx`

Welcome modal for language selection (shown on first visit).

```jsx
import LanguageModal from './components/LanguageModal'

<LanguageModal onSelectLanguage={setLang} />
```

**Props:**
- `onSelectLanguage` (function): Callback when language is selected

**Features:**
- Shows only on first visit (localStorage)
- English and Telugu options
- Dismissible
- Overlay
- Accessible

**Behavior:**
- Shows once per browser/device
- Stores preference in localStorage
- User can still change language via top bar

---

## Component Best Practices

### Performance

1. **Lazy Loading**: Use React.lazy() for pages
2. **Memoization**: Use React.memo() for expensive components
3. **Image Optimization**: Compress images before using
4. **Conditional Rendering**: Load components only when needed

### Accessibility

1. **ARIA Labels**: All interactive components have aria-labels
2. **Keyboard Navigation**: All components support keyboard
3. **Focus Management**: Proper focus states
4. **Screen Readers**: Semantic HTML and ARIA attributes

### Responsive Design

1. **Mobile First**: Components designed mobile-first
2. **Breakpoints**: Standard breakpoints (768px, 1024px)
3. **Touch Friendly**: Large touch targets on mobile
4. **Fluid Layouts**: Flexible layouts that adapt

### Code Quality

1. **PropTypes**: Define expected props (add if needed)
2. **Error Boundaries**: Handle errors gracefully
3. **Clean Code**: Follow React best practices
4. **Comments**: Document complex logic

---

## Creating New Components

### Template

```jsx
// src/components/MyComponent.jsx

import { useState, useEffect } from 'react'
import './myComponent.css' // If component-specific styles needed

/**
 * MyComponent - Brief description
 * 
 * @param {string} prop1 - Description
 * @param {function} prop2 - Description
 */
function MyComponent({ prop1, prop2 }) {
  // Component logic
  
  return (
    <div className="my-component">
      {/* Component JSX */}
    </div>
  )
}

export default MyComponent
```

### Guidelines

1. **Single Responsibility**: One component, one purpose
2. **Reusability**: Make components reusable when possible
3. **Props Validation**: Document expected props
4. **Accessibility**: Include ARIA labels
5. **Responsive**: Test on all screen sizes
6. **Performance**: Optimize re-renders

---

## Troubleshooting

### Common Issues

**Component not rendering:**
- Check import path
- Verify component is exported
- Check console for errors

**Styles not applying:**
- Ensure CSS file is imported
- Check CSS class names match
- Verify CSS specificity

**Animation not working:**
- Check if `prefers-reduced-motion` is enabled
- Verify IntersectionObserver support
- Check browser console

**Toast not showing:**
- Ensure ToastProvider wraps app
- Check if toast function is called correctly
- Verify no z-index conflicts

---

## Additional Resources

- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Last Updated**: January 2025  
**Maintained By**: Sai Sharan V  
**Contact**: [saisharanvishnu@gmail.com](mailto:saisharanvishnu@gmail.com) | [LinkedIn](https://www.linkedin.com/in/sai-sharan-vishnu/)

