# Background Image Implementation Guide

## Overview
This guide explains two approaches for implementing background images in the React + Tailwind login page.

## Current Implementation (Recommended)

### Approach 1: Imported Image Variable (Production-Ready)
```tsx
import loginBg from '@/assets/login-bg.png';

// In JSX
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ 
    backgroundImage: `url(${loginBg})`,
    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
  }}
/>
```

**Advantages:**
- ✅ TypeScript support and type safety
- ✅ Automatic asset optimization by Vite
- ✅ Better bundling and tree-shaking
- ✅ Asset fingerprinting for cache busting
- ✅ Works with all build tools and environments

**How it works:**
1. Vite imports the image and returns a URL string
2. The URL is dynamically generated and includes a hash for cache busting
3. TypeScript recognizes the import as a valid asset

## Alternative Approach

### Approach 2: Tailwind Arbitrary Values
```tsx
// In JSX
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/src/assets/login-bg.png')]"
  style={{ 
    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
  }}
/>
```

**Advantages:**
- ✅ Pure Tailwind approach
- ✅ No additional imports needed
- ✅ Works well with Tailwind's arbitrary value system

**Disadvantages:**
- ❌ No TypeScript support
- ❌ No automatic asset optimization
- ❌ Path may break in different environments
- ❌ No cache busting

## File Structure
```
src/
├── assets/
│   ├── login-bg.png          # Background image
│   └── tru-jobs-logo.svg     # Logo
└── pages/
    └── LoginPage.tsx         # Main component
```

## Troubleshooting

### Image Not Loading
1. **Check file path**: Ensure `login-bg.png` exists in `src/assets/`
2. **Check import**: Verify the import statement is correct
3. **Check build**: Run `npm run build` to ensure no build errors
4. **Check console**: Look for 404 errors in browser console

### Build Errors
1. **TypeScript errors**: Ensure `vite-env.d.ts` includes image declarations
2. **Path errors**: Use relative paths from `src/` directory
3. **Import errors**: Check that the file extension matches exactly

### Performance Optimization
1. **Image format**: Use WebP or optimized PNG for better performance
2. **Image size**: Compress images to reduce bundle size
3. **Lazy loading**: Consider lazy loading for non-critical images

## Production Checklist
- [ ] Image is optimized and compressed
- [ ] Fallback background is implemented
- [ ] Error handling is in place
- [ ] Build completes without errors
- [ ] Image loads correctly in production environment
- [ ] Responsive design works on all screen sizes

## Example Usage in LoginPage.tsx
```tsx
import loginBg from '@/assets/login-bg.png';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="relative hidden md:flex md:w-1/2 lg:w-[60%] bg-primary">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${loginBg})`,
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
          }}
        />
        
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/80 to-primary/60" />
        
        {/* Content */}
        <div className="absolute bottom-32 left-12 text-text-light z-10 max-w-xl">
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
}
```
