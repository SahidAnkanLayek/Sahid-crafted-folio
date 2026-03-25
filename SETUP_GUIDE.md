# Setup Guide for Fixed Portfolio

This guide will help you complete the setup after the recent fixes and improvements.

## 1. Install Dependencies (Using NPM)

```bash
npm install
```

This will install all required packages including the new `@emailjs/browser` package for email functionality.

> **Note**: We've changed from using `bun` to `npm`. All the fixes are compatible with npm.

---

## 2. Configure Environment Variables

Copy the `.env.example` file to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values.

### 2.1 Supabase Configuration (Optional)

If you're using Supabase features in the future:

1. Go to [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Add to `.env.local`:
   ```
   VITE_SUPABASE_URL=your_url_here
   VITE_SUPABASE_ANON_KEY=your_key_here
   ```

### 2.2 EmailJS Configuration (Required for Contact Form)

The contact form now uses **EmailJS** to send emails directly to your Gmail inbox.

#### Steps to Set Up EmailJS:

1. **Sign up for EmailJS** (free tier available):
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Click "Start Free"
   - Sign up with Google or email

2. **Create an Email Service**:
   - In the Dashboard, go to "Email Services"
   - Click "Add Service"
   - Select "Gmail"
   - Click "Connect Account"
   - Sign in with your Gmail account: `sahid.ankan.layek2020@gmail.com`
   - Authorize EmailJS access
   - Click "Create Service"
   - Copy the **Service ID** (format: `service_xxxxx`)
   - Save it to `.env.local` as `VITE_EMAILJS_SERVICE_ID`

3. **Create an Email Template**:
   - Go to "Email Templates" in the Dashboard
   - Click "Create New Template"
   - Set template name: `contact_form`
   - In the email template, use these variables:
     ```
     From: {{from_email}}
     Name: {{from_name}}
     Subject: New Portfolio Contact

     Message:
     {{message}}
     ```
   - Save the template
   - Copy the **Template ID** (format: `template_xxxxx`)
   - Save it to `.env.local` as `VITE_EMAILJS_TEMPLATE_ID`

4. **Get Your Public Key**:
   - Go to "Account" > "API Keys"
   - Copy the **Public Key**
   - Save it to `.env.local` as `VITE_EMAILJS_PUBLIC_KEY`

5. **Final `.env.local` should look like**:
   ```
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyxxxxx
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxx
   ```

---

## 3. What Was Fixed

### ✅ Critical Issues Fixed:

1. **Removed hardcoded Supabase credentials** - Now uses environment variables
2. **Removed dead code** from Projects.tsx (unused `cardTilt`, `carouselRef`, mouse handlers)
3. **Removed dead code** from Achievements.tsx (unused `carouselRef`, carousel functions)
4. **Email service upgraded** - From mailto fallback to real EmailJS service
5. **TypeScript strict mode enabled** - Better type safety and error catching
   - `strict: true`
   - `noUnusedLocals: true`
   - `noUnusedParameters: true`
   - `noImplicitAny: true`

### 📧 Email Service Changes:

**Before**: Contact form opened user's email client (mailto:)
```javascript
window.location.href = mailtoLink  // Opens email client
```

**After**: Sends email directly to your Gmail inbox via EmailJS
```javascript
await emailjs.send(serviceId, templateId, {
  from_name: formData.name,
  from_email: formData.email,
  to_email: 'sahid.ankan.layek2020@gmail.com',
  message: formData.message,
  reply_to: formData.email
})
```

---

## 4. Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 5. Verification Checklist

After setup, verify everything works:

- [ ] Run `npm install` successfully
- [ ] Create `.env.local` with all required variables
- [ ] Test EmailJS by submitting the contact form
- [ ] Verify email arrives in your Gmail inbox
- [ ] No TypeScript errors when running `npm run build`
- [ ] Development server starts with `npm run dev`

---

## 6. Troubleshooting

### "Cannot find module '@emailjs/browser'"
**Solution**: Run `npm install` to install all dependencies

### "Supabase credentials not configured" warning
**Solution**: This is just a warning. Add credentials to `.env.local` if you plan to use Supabase features.

### Emails not sending
**Checklist**:
1. Verify all EmailJS env vars are correct (copy exactly from EmailJS dashboard)
2. Check EmailJS dashboard for sending logs
3. Make sure template ID and service ID match what's in `.env.local`
4. Check spam/promotions folder in Gmail
5. Verify Gmail account permissions are granted to EmailJS

### TypeScript errors in IDE
**Solution**: 
- Ensure dependencies are installed: `npm install`
- Restart VS Code
- If errors persist, run: `npm run build` to see actual compilation errors

---

## 7. Security Notes

- ✅ `.env.local` is in `.gitignore` - won't be committed
- ✅ EmailJS public key is safe to expose in frontend
- ✅ No secrets are hardcoded in source files
- ✅ Environment variables are used consistently

---

## 8. What's Included

The portfolio now has:
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Real email service for contact form
- ✅ TypeScript strict mode enabled
- ✅ No dead code
- ✅ Proper environment configuration
- ✅ Dark mode support
- ✅ Smooth animations and transitions

Enjoy your fully functional portfolio! 🚀