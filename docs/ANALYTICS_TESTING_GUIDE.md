# Analytics Testing Guide - First Electric

## 🧪 Testing Your Analytics Setup

Now that you've added your Google Analytics 4 Measurement ID (`G-QD0KG6NZHP`), let's test the implementation to ensure everything is working correctly.

---

## 🚀 Quick Test Steps

### **Step 1: Start Development Server**
```bash
npm run dev
```

### **Step 2: Open Browser Developer Tools**
1. Open your website in Chrome/Firefox
2. Press `F12` or right-click → "Inspect"
3. Go to the **Console** tab

### **Step 3: Check Analytics Loading**
Look for these console messages:
- ✅ `Analytics: Google Analytics 4 initialized`
- ✅ `Analytics: Page view tracked`
- ❌ `Analytics: Development mode - tracking disabled` (should NOT appear)

### **Step 4: Test Conversion Tracking**
1. Click any booking button
2. Look for: `Analytics: Booking click tracked`
3. Click phone numbers
4. Look for: `Analytics: Phone call tracked`

---

## 🔍 Google Analytics DebugView

### **Enable Debug Mode**
1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
2. Enable it on your website
3. Go to GA4 → Configure → DebugView
4. You should see real-time events

### **Expected Events**
- `page_view` - Every page load
- `booking_click` - When booking buttons are clicked
- `phone_call` - When phone numbers are clicked
- `service_page_view` - On service pages
- `city_page_view` - On city pages

---

## 📊 Google Analytics Real-Time Reports

### **Check Real-Time Data**
1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property
3. Go to **Reports** → **Realtime**
4. You should see:
   - Active users
   - Page views
   - Events
   - Traffic sources

---

## 🧪 Manual Testing Checklist

### **Page View Tracking**
- [ ] Homepage loads and tracks
- [ ] Service pages track with service name
- [ ] City pages track with city name
- [ ] About/Contact pages track

### **Conversion Tracking**
- [ ] Booking buttons trigger `booking_click` events
- [ ] Phone numbers trigger `phone_call` events
- [ ] Emergency contact buttons work
- [ ] Quote request forms track

### **Event Parameters**
- [ ] Events include `business_type: electrical_services`
- [ ] Events include `service_area: la_mirada_whittier_cerritos`
- [ ] Service events include service name
- [ ] City events include city name

---

## 🚨 Troubleshooting

### **Analytics Not Loading**
**Symptoms:** No console messages, no GA4 initialization
**Solutions:**
1. Check Measurement ID format: `G-QD0KG6NZHP`
2. Verify environment is set to `'production'`
3. Check browser console for errors
4. Ensure no ad blockers are interfering

### **Events Not Tracking**
**Symptoms:** Page views work but conversions don't
**Solutions:**
1. Check if tracking functions are called
2. Verify global functions are available: `window.trackBookingClick`
3. Check for JavaScript errors
4. Test in incognito mode

### **No Data in GA4**
**Symptoms:** Console shows tracking but no data in GA4
**Solutions:**
1. Wait 24-48 hours for data to appear
2. Check DebugView for real-time data
3. Verify property is correctly configured
4. Check data filters in GA4

---

## 📈 Expected Results

### **Immediate (Real-Time)**
- Page views appear in GA4 Real-Time reports
- Events show in DebugView
- Console shows tracking messages

### **Within 24 Hours**
- Data appears in standard GA4 reports
- Conversion events are recorded
- User behavior data is available

### **Within 48 Hours**
- Complete data set available
- Conversion goals can be set up
- Performance insights available

---

## 🎯 Next Steps After Testing

### **If Everything Works:**
1. ✅ Analytics is ready for production
2. 🎯 Move to next priority (Performance Audit)
3. 📊 Set up conversion goals in GA4
4. 📈 Monitor performance metrics

### **If Issues Found:**
1. 🔧 Fix any tracking problems
2. 🧪 Re-test until working
3. 📋 Document any configuration changes
4. 🎯 Proceed to next priority

---

## 📊 Setting Up Conversion Goals

Once tracking is confirmed working:

### **In Google Analytics 4:**
1. Go to **Configure** → **Events**
2. Mark these as conversions:
   - `quote_request`
   - `emergency_contact`
   - `phone_call`
   - `booking_click`

### **Create Custom Reports:**
1. **Conversions Report** - Track all conversion events
2. **Service Performance** - Track service page engagement
3. **Local Traffic** - Track city-specific traffic
4. **Emergency Service** - Track emergency contact patterns

---

## 🎉 Success Criteria

Your analytics setup is successful when:
- ✅ Page views track in real-time
- ✅ Conversion events fire correctly
- ✅ Data appears in GA4 within 24 hours
- ✅ No console errors related to analytics
- ✅ All tracking functions work as expected

---

*Ready to test? Run `npm run dev` and follow the steps above!*
