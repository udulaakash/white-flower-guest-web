# White Flower Guest Website - Setup Instructions

## Image Setup

To add your room and service images, place them in the following directories:

### Room Images
Place room photos in `public/images/rooms/` with the following naming convention:
- `budget-double-1.jpg`, `budget-double-2.jpg`
- `standard-double-1.jpg`, `standard-double-2.jpg`, `standard-double-3.jpg`
- `deluxe-double-1.jpg`, `deluxe-double-2.jpg`, `deluxe-double-3.jpg`
- `modern-deluxe-1.jpg`, `modern-deluxe-2.jpg`, `modern-deluxe-3.jpg`

### Service Images
Place service photos in `public/images/services/`:
- `airport-transfer.jpg`
- `one-day-tour.jpg`
- `multi-day-tour.jpg`
- `diving.jpg`
- `boat-safari.jpg`

### Hero Image
Place the main hero/beach image as:
- `public/images/hero-beach.jpg` (or `.png`)

### Open Graph Image
For social media sharing:
- `public/images/og-image.jpg` (recommended size: 1200x630px)

## Contact Information

Update the following in `src/config/contact.ts`:

1. **WhatsApp Number**: Replace `+94XXXXXXXXX` with your actual WhatsApp number (include country code)
2. **Booking.com URL**: Update with your actual Booking.com property URL
3. **Email**: Update with your actual email address
4. **Phone**: Add your phone number if available

## Running the Website

### Development
```bash
bun dev
# or
npm run dev
```

### Production Build
```bash
bun build
# or
npm run build
```

### Preview Production Build
```bash
bun preview
# or
npm run preview
```

## Features Implemented

✅ Responsive design (mobile-first)
✅ Room gallery with individual room pages
✅ Services pages with emphasis on airport transfers and tours
✅ Booking.com integration links
✅ WhatsApp click-to-chat functionality
✅ SEO optimization with meta tags and structured data
✅ Open Graph tags for social media sharing
✅ Tropical aesthetic design aligned with guest house branding

## Next Steps

1. Add your actual images to the directories mentioned above
2. Update contact information in `src/config/contact.ts`
3. Update room descriptions and features if needed in `src/config/rooms.ts`
4. Update service descriptions and pricing in `src/config/services.ts`
5. Test all booking links (Booking.com and WhatsApp)
6. Deploy to your hosting provider

## Deployment

This is a Qwik application that can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- Any Node.js hosting provider

Use `bun qwik add` to add deployment adapters if needed.
