# New Features Documentation

## 🎉 Recently Added Features

### 1. Toast Notifications 🔔

A modern notification system for displaying success, error, warning, and info messages.

#### Usage:

```jsx
import { useToast } from '../components/Toast'

function MyComponent() {
  const toast = useToast()
  
  // Success notification
  toast.success('Operation completed successfully!', 5000) // 5000ms duration
  
  // Error notification
  toast.error('Something went wrong!', 4000)
  
  // Warning notification
  toast.warning('Please check your input', 3000)
  
  // Info notification
  toast.info('Processing your request...', 2000)
  
  return <button onClick={() => toast.success('Clicked!')}>Click me</button>
}
```

#### Features:
- ✅ 4 types: success, error, warning, info
- ✅ Auto-dismiss with configurable duration
- ✅ Manual close button
- ✅ Smooth slide-in animation
- ✅ Stacked multiple toasts
- ✅ Mobile responsive
- ✅ Accessible (ARIA labels)

---

### 2. Page Transitions 🌊

Smooth fade animations between page navigations.

#### Features:
- ✅ Automatic fade-out/fade-in on route change
- ✅ Subtle overlay during transition
- ✅ Smooth, professional UX
- ✅ No configuration needed - works automatically!

#### How it works:
The `PageTransition` component wraps the main `<Outlet />` in `App.jsx`:

```jsx
<PageTransition>
  <Outlet />
</PageTransition>
```

Customize animation in `/src/styles/pageTransition.css` if needed.

---

### 3. Parallax Scrolling ✨

Beautiful depth effects with parallax scrolling on hero sections and backgrounds.

#### Usage:

**Basic Parallax Section:**
```jsx
import { ParallaxSection } from '../components/ParallaxSection'

<ParallaxSection speed={0.5}>
  <div>Your content here</div>
</ParallaxSection>
```

**Parallax Background:**
```jsx
import { ParallaxBackground } from '../components/ParallaxSection'

<ParallaxBackground speed={0.3}>
  <div>Background content</div>
</ParallaxBackground>
```

**Parallax Hero:**
```jsx
import { ParallaxHero } from '../components/ParallaxSection'

<ParallaxHero backgroundImage="/path/to/image.jpg">
  <h1>Hero Content</h1>
</ParallaxHero>
```

#### Speed Parameter:
- `0.1` - Very subtle parallax
- `0.3` - Light parallax (recommended for backgrounds)
- `0.5` - Medium parallax (recommended for elements)
- `0.7` - Strong parallax
- `1.0+` - Extreme parallax (use sparingly)

#### Features:
- ✅ Smooth 60fps animations
- ✅ Performance optimized (passive scroll listeners)
- ✅ Automatically disabled on mobile (performance)
- ✅ Respects prefers-reduced-motion
- ✅ Multiple parallax components available

#### Example Implementation:

See `Home.jsx` for live examples:
```jsx
<section className="hero-section-new hero-parallax">
  <ParallaxSection speed={0.3}>
    <div className="hero-shape hero-shape-1"></div>
  </ParallaxSection>
  <ParallaxSection speed={0.5}>
    <div className="hero-shape hero-shape-2"></div>
  </ParallaxSection>
</section>
```

---

## 📁 File Structure

```
src/
├── components/
│   ├── Toast.jsx                  # Toast notification system
│   ├── PageTransition.jsx         # Page transition wrapper
│   ├── ParallaxSection.jsx        # Parallax components
│   └── ...
├── styles/
│   ├── toast.css                  # Toast styles
│   ├── pageTransition.css         # Page transition animations
│   ├── parallax.css               # Parallax effects
│   └── ...
└── pages/
    ├── Home.jsx                   # Uses parallax
    ├── Contact.jsx                # Uses toast (example)
    └── ...
```

---

## 🎨 Customization

### Toast Colors:
Edit `/src/styles/toast.css` to change colors:
```css
.toast-success { border-left-color: #10b981; }
.toast-error { border-left-color: #ef4444; }
.toast-warning { border-left-color: #f59e0b; }
.toast-info { border-left-color: var(--brand); }
```

### Page Transition Speed:
Edit `/src/styles/pageTransition.css`:
```css
.page-transition {
  animation-duration: 0.3s; /* Change to 0.5s for slower */
}
```

### Parallax Effects:
Edit `/src/styles/parallax.css` for custom effects.

---

## 🚀 Best Practices

### Toast Notifications:
- ✅ Use success for completed actions
- ✅ Use error for failures that need attention
- ✅ Use warning for important non-critical messages
- ✅ Use info for general updates
- ✅ Keep messages concise (1-2 sentences)
- ✅ Set appropriate durations (3-5 seconds typical)

### Parallax:
- ✅ Use sparingly - not every section needs parallax
- ✅ Lower speeds (0.2-0.4) for subtle effects
- ✅ Test on mobile devices
- ✅ Ensure content remains readable during scroll
- ❌ Don't use on text content
- ❌ Don't overload pages with too many parallax elements

### Page Transitions:
- ✅ Works automatically - no action needed
- ✅ Provides visual feedback during navigation
- ✅ Improves perceived performance

---

## 🐛 Troubleshooting

**Toasts not showing:**
- Ensure `<ToastProvider>` wraps your app in `main.jsx`
- Check browser console for errors

**Parallax not working:**
- Check if element is in viewport
- Verify speed value is between 0 and 1
- On mobile, parallax is disabled for performance

**Page transitions laggy:**
- Reduce animation duration in CSS
- Check for other heavy animations running simultaneously

---

## 📱 Mobile Support

All features are fully responsive:
- ✅ Toast notifications stack properly on mobile
- ✅ Page transitions work smoothly
- ✅ Parallax automatically disabled on mobile for performance
- ✅ Touch-friendly interactions

---

## ♿ Accessibility

All features follow WCAG guidelines:
- ✅ Toast notifications use ARIA labels
- ✅ Keyboard navigation support
- ✅ Respects prefers-reduced-motion
- ✅ Semantic HTML
- ✅ Screen reader compatible

---

## 🎯 Examples

Check these files for live implementation examples:
- `src/pages/Home.jsx` - Parallax scrolling
- `src/pages/Contact.jsx` - Toast notifications
- `src/App.jsx` - Page transitions

---

Enjoy your new features! 🎉


