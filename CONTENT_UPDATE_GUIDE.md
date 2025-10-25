# Content Update Guide

Complete guide for updating content on the Dr. Ramaswamy Hospitals website.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Updating Text Content](#updating-text-content)
3. [Updating Images](#updating-images)
4. [Adding/Editing Services](#addingediting-services)
5. [Managing Doctors](#managing-doctors)
6. [Updating Testimonials](#updating-testimonials)
7. [Editing Contact Information](#editing-contact-information)
8. [Adding Achievements](#adding-achievements)
9. [Deploying Changes](#deploying-changes)

---

## Quick Start

### Prerequisites

- Basic text editor (VS Code, Sublime, Notepad++)
- Git installed (for deploying changes)
- Access to project repository

### Basic Workflow

1. **Make Changes** - Edit the appropriate file
2. **Test Locally** - Run `npm run dev` to preview
3. **Commit Changes** - Save to Git
4. **Deploy** - Push to GitHub (auto-deploys to Render)

---

## Updating Text Content

All text content is managed through the **internationalization (i18n) system** to support both English and Telugu.

### Location

**File**: `src/i18n.jsx`

### Structure

```javascript
const translations = {
  en: {
    // English translations
  },
  te: {
    // Telugu translations
  }
}
```

### Example: Change Tagline

**Before:**
```javascript
tagline: 'Care you can trust, comfort you can feel.'
```

**After:**
```javascript
tagline: 'Your health, our priority.'
```

**Remember**: Update BOTH English (`en`) and Telugu (`te`) sections!

### Common Text Updates

#### 1. Navigation Menu

```javascript
nav: {
  home: 'Home',
  about: 'About',
  services: 'Services',
  // ... etc
}
```

#### 2. Top Bar

```javascript
topbar: {
  location: 'Kavali, Nellore',
  feedback: 'Feedback'
}
```

#### 3. Emergency Bar

```javascript
emergencyBar: {
  text: '24/7 Emergency',
  callNow: 'Call Now',
  whatsapp: 'WhatsApp',
  or: 'or'
}
```

#### 4. Footer

```javascript
footer: {
  maps: 'Maps',
  linktree: 'Linktree',
  instagram: 'Instagram'
}
```

### Step-by-Step Example

Let's change the hospital tagline:

1. **Open** `src/i18n.jsx` in your text editor

2. **Find** the tagline (usually near the top):
```javascript
const translations = {
  en: {
    tagline: 'Care you can trust, comfort you can feel.',
```

3. **Edit** both English and Telugu:
```javascript
en: {
  tagline: 'Your health is our priority.',
},
te: {
  tagline: 'మీ ఆరోగ్యం మా ప్రాధాన్యత.',
}
```

4. **Save** the file

5. **Test** locally: `npm run dev`

6. **Deploy** (see [Deploying Changes](#deploying-changes))

---

## Updating Images

### Types of Images

1. **Logos** - Hospital logo, crest, banner
2. **Doctor Photos** - Individual doctor images
3. **Facility Photos** - Hospital facilities, equipment
4. **Gallery Images** - Hospital building, rooms, etc.

### Location

**Directory**: `src/assets/`

### Step-by-Step: Replace an Image

#### 1. Prepare Your Image

**Best Practices:**
- **Format**: JPG for photos, PNG for logos with transparency
- **Size**: 
  - Logos: 200-500px width
  - Doctor photos: 400x400px (square)
  - Facility photos: 800-1200px width
  - Gallery images: 1200-1600px width
- **File Size**: Compress to < 500KB per image
- **Naming**: Use descriptive names (e.g., `dr-sharma.jpg`, not `img123.jpg`)

**Recommended Tools:**
- [TinyPNG](https://tinypng.com/) - Free image compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization

#### 2. Add Image to Project

- Copy your image to `src/assets/` folder
- Or replace existing image with same filename

#### 3. Update Image Reference

**If replacing with SAME filename**: No code changes needed!

**If using NEW filename**: Update the import in the component.

**Example - Updating Doctor Photo:**

**File**: `src/pages/Doctors.jsx`

**Find the doctor's image import:**
```javascript
import drRamaswamy from '../assets/Dr. Ramaswamy 1.jpg'
```

**Change to your new image:**
```javascript
import drRamaswamy from '../assets/dr-ramaswamy-new.jpg'
```

#### 4. Update Alt Text (Accessibility)

**Find the image tag:**
```jsx
<img src={drRamaswamy} alt="Dr. Ramaswamy" />
```

**Update alt text if needed:**
```jsx
<img src={drRamaswamy} alt="Dr. Ramaswamy, Chief Surgeon" />
```

### Common Image Updates

#### Update Logo

**Files**: 
- Banner logo: `src/assets/WhatsApp Image 2025-10-24 at 17.45.03.jpeg`
- Crest logo: `src/assets/crest-logo.jpg`
- Favicon: `public/favicon.jpg`

**Used in**: `src/App.jsx`

#### Update Doctor Photo

**Files**: `src/assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/`

**Used in**: `src/pages/Doctors.jsx`

#### Update Facility Photos

**Files**: Various in `src/assets/`

**Used in**: `src/pages/Facilities.jsx`

---

## Adding/Editing Services

### Location

**File**: `src/pages/Services.jsx`

### Structure

Services are defined as an array of objects:

```javascript
const services = [
  {
    icon: '🏥',
    titleKey: 'Emergency Care',
    descKey: 'Description here',
  },
  // ... more services
]
```

### Add a New Service

1. **Open** `src/pages/Services.jsx`

2. **Find** the `services` array

3. **Add** a new service object:
```javascript
{
  icon: '🩺', // Choose an emoji or icon
  titleKey: 'Cardiology',
  descKey: 'Advanced cardiac care and treatment',
}
```

4. **Update translations** in `src/i18n.jsx`:

```javascript
en: {
  services: {
    // ... existing services
    cardiology: {
      title: 'Cardiology',
      desc: 'Advanced cardiac care with modern equipment'
    }
  }
}
```

### Edit Existing Service

1. **Open** `src/pages/Services.jsx`

2. **Find** the service in the array

3. **Update** the title or description keys

4. **Update** corresponding translations in `src/i18n.jsx`

### Remove a Service

1. **Open** `src/pages/Services.jsx`

2. **Find** and **delete** the service object from array

3. **Optional**: Clean up translations in `src/i18n.jsx`

---

## Managing Doctors

### Location

**File**: `src/pages/Doctors.jsx`

### Structure

Doctors are defined in an array with their information:

```javascript
const doctorsData = [
  {
    name: 'Dr. Name',
    specialty: 'Specialty',
    education: 'Qualifications',
    experience: 'Years of experience',
    image: importedImage,
  },
  // ... more doctors
]
```

### Add a New Doctor

1. **Add doctor's photo** to `src/assets/`

2. **Import** the photo at the top of `Doctors.jsx`:
```javascript
import drNewDoctor from '../assets/dr-new-doctor.jpg'
```

3. **Add doctor to array**:
```javascript
{
  name: 'Dr. Priya Sharma',
  specialty: 'Cardiologist',
  education: 'MBBS, MD (Cardiology)',
  experience: '12 years of experience',
  image: drNewDoctor,
}
```

4. **Save and test**

### Edit Doctor Information

1. **Open** `src/pages/Doctors.jsx`

2. **Find** the doctor's object

3. **Update** any field:
```javascript
{
  name: 'Dr. Updated Name', // Change name
  specialty: 'New Specialty', // Change specialty
  education: 'Updated Qualifications', // Update education
  experience: '15 years', // Update experience
  image: drPhoto, // Keep same
}
```

### Remove a Doctor

1. **Open** `src/pages/Doctors.jsx`

2. **Find** and **delete** the entire doctor object

3. **Remove** the image import if not used elsewhere

---

## Updating Testimonials

### Location

**File**: `src/pages/Testimonials.jsx`

### Structure

```javascript
const testimonials = [
  {
    text: 'Patient testimonial text here...',
    author: 'Patient Name',
    location: 'Location',
    date: 'Month Year',
  },
  // ... more testimonials
]
```

### Add a New Testimonial

1. **Open** `src/pages/Testimonials.jsx`

2. **Find** the `testimonials` array

3. **Add** new testimonial (at the beginning for most recent):
```javascript
{
  text: 'Excellent care and treatment. The doctors were very attentive.',
  author: 'Ramesh Kumar',
  location: 'Kavali',
  date: 'January 2025',
}
```

4. **Save and deploy**

### Edit Existing Testimonial

Simply find and update the text, author, location, or date.

### Remove a Testimonial

Find and delete the entire testimonial object from the array.

### Best Practices

- ✅ Keep testimonials concise (2-4 sentences)
- ✅ Include patient name (with permission)
- ✅ Add location for authenticity
- ✅ Include date
- ❌ Don't include medical details (privacy)
- ❌ Don't use last names if privacy concern

---

## Editing Contact Information

### Locations

**Primary**: `src/i18n.jsx` (for translated content)
**Secondary**: `src/App.jsx` (for links in header/footer)

### Update Phone Number

#### In Content (i18n.jsx)

```javascript
contact: {
  phone: '+91 99127 57854', // Update here
}
```

#### In Links (App.jsx)

**Find all phone links:**
```javascript
<a href="tel:+919912757854">
```

**Update to:**
```javascript
<a href="tel:+919876543210"> // New number
```

**Update in multiple places:**
- Top bar emergency call
- Floating WhatsApp button
- Quick actions bar
- Footer

### Update Address

**File**: `src/i18n.jsx`

```javascript
contact: {
  address: 'New Address Here',
}
```

### Update Google Maps Link

**File**: `src/App.jsx`

**Find:**
```javascript
https://www.google.com/maps/dir//14.916762299999998,79.9951669
```

**Replace with your new coordinates:**
```javascript
https://www.google.com/maps/dir//NEW_LATITUDE,NEW_LONGITUDE
```

**How to get coordinates:**
1. Go to [Google Maps](https://maps.google.com)
2. Right-click your location
3. Click on the coordinates to copy
4. Replace in the code

### Update Social Media Links

**File**: `src/App.jsx`

**Instagram:**
```javascript
<a href="https://www.instagram.com/drramaswamyhospitals/">
```

**Linktree:**
```javascript
<a href="https://linktr.ee/drramaswamyhospitals">
```

---

## Adding Achievements

### Location

**File**: `src/pages/Achievements.jsx`

### Structure

```javascript
const achievements = [
  {
    year: '2024',
    title: 'Achievement Title',
    description: 'Description of achievement',
    icon: '🏆',
  },
  // ... more achievements
]
```

### Add New Achievement

1. **Open** `src/pages/Achievements.jsx`

2. **Add** to array (most recent first):
```javascript
{
  year: '2025',
  title: 'Best Hospital Award',
  description: 'Recognized for excellence in patient care',
  icon: '🏆',
}
```

3. **Save and deploy**

### Edit Achievement

Find the achievement and update year, title, description, or icon.

### Choose Icons

Use emojis or you can integrate icon libraries:
- 🏆 Awards
- 🎖️ Certifications  
- 👨‍⚕️ Medical milestones
- 🏥 Facility upgrades
- ⭐ Recognition

---

## Deploying Changes

### Current Setup: Render + GitHub

**Your workflow:**
1. Make changes locally
2. Test with `npm run dev`
3. Commit to Git
4. Push to GitHub
5. Render auto-deploys

### Step-by-Step Deployment

#### 1. Test Locally

```bash
cd hospital-frontend
npm run dev
```

Open http://localhost:5173 and verify changes.

#### 2. Build Test

```bash
npm run build
```

Ensure no errors.

#### 3. Commit Changes

```bash
git add .
git commit -m "Update: Brief description of changes"
```

#### 4. Push to GitHub

```bash
git push origin main
```

#### 5. Auto-Deploy

Render automatically detects the push and deploys. Check:
- Render dashboard for build status
- Visit https://www.ramaswamyhospitals.com/ after 2-3 minutes

### Troubleshooting Deployment

**Build fails on Render:**
- Check Render logs for errors
- Ensure `npm run build` works locally
- Verify all image paths are correct

**Changes not showing:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes for deployment
- Check Render dashboard for deployment status

**Images not loading:**
- Verify images are in `src/assets/`
- Check image imports are correct
- Ensure image paths are relative

---

## Quick Reference Cheat Sheet

| What to Update | File | Section |
|----------------|------|---------|
| Text content | `src/i18n.jsx` | Translations object |
| Images | `src/assets/` | Add/replace files |
| Services | `src/pages/Services.jsx` | services array |
| Doctors | `src/pages/Doctors.jsx` | doctorsData array |
| Testimonials | `src/pages/Testimonials.jsx` | testimonials array |
| Achievements | `src/pages/Achievements.jsx` | achievements array |
| Phone number | `src/App.jsx` | All `tel:` links |
| Address | `src/i18n.jsx` | contact section |
| Maps link | `src/App.jsx` | Google Maps URLs |
| Social links | `src/App.jsx` | Instagram, Linktree |

---

## Need Help?

### Common Questions

**Q: I updated text but it's not changing on the website**
- A: Make sure you updated both English (`en`) and Telugu (`te`) in `i18n.jsx`
- Clear browser cache

**Q: Images are not showing after update**
- A: Check image paths and imports
- Ensure images are in `src/assets/`
- Rebuild with `npm run build`

**Q: How do I add a new page?**
- A: This requires development knowledge. Contact the developer.

**Q: Can I update content without coding?**
- A: For text and images, yes (follow this guide). For structural changes, you'll need a developer.

### Contact Developer

For complex updates or technical issues:
- **Developer**: Sai Sharan V
- **Email**: [saisharanvishnu@gmail.com](mailto:saisharanvishnu@gmail.com)
- **Phone/WhatsApp**: [+91 63839 91383](tel:+916383991383)
- **LinkedIn**: [linkedin.com/in/sai-sharan-vishnu](https://www.linkedin.com/in/sai-sharan-vishnu/)
- **Rate**: ₹1,000/hour for ad-hoc updates

See [SUPPORT.md](./SUPPORT.md) for full contact information.

---

**Last Updated**: January 2025  
**Version**: 1.0

