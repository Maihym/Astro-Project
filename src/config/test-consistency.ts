/**
 * Test script to verify business information consistency across the website
 * This file can be run to check that all components are using the centralized config
 */

import { getBusinessInfo, getContactInfo, getCompanyInfo, getHoursInfo } from './business';
import { getAllCities } from '../lib/data';

export function testBusinessConsistency() {
  const businessInfo = getBusinessInfo();
  const contactInfo = getContactInfo();
  const companyInfo = getCompanyInfo();
  const hoursInfo = getHoursInfo();
  const cities = getAllCities();

  console.log('=== Business Information Consistency Test ===\n');

  // Test 1: Company Information
  console.log('1. Company Information:');
  console.log(`   Name: ${companyInfo.name}`);
  console.log(`   Tagline: ${companyInfo.tagline}`);
  console.log(`   Description: ${companyInfo.description}`);
  console.log(`   Founded: ${businessInfo.company.founded}`);
  console.log(`   License: ${businessInfo.company.license}\n`);

  // Test 2: Contact Information
  console.log('2. Contact Information:');
  console.log(`   Main Phone: ${contactInfo.main.phone}`);
  console.log(`   Main Email: ${contactInfo.main.email}`);
  console.log(`   Address: ${contactInfo.main.address.full}`);
  console.log(`   Emergency Phone: ${contactInfo.emergency.phone}`);
  console.log(`   Emergency Email: ${contactInfo.emergency.email}\n`);

  // Test 3: Business Hours
  console.log('3. Business Hours:');
  console.log(`   Weekdays: ${hoursInfo.regular.weekdays}`);
  console.log(`   Saturday: ${hoursInfo.regular.saturday}`);
  console.log(`   Sunday: ${hoursInfo.regular.sunday}`);
  console.log(`   Emergency: ${hoursInfo.emergency}\n`);

  // Test 4: City Contact Consistency
  console.log('4. City Contact Information:');
  cities.forEach(city => {
    console.log(`   ${city.name}:`);
    console.log(`     Phone: ${city.contact.phone}`);
    console.log(`     Email: ${city.contact.email}`);
    console.log(`     Address: ${city.contact.address}`);
    
    // Verify consistency
    const isPhoneConsistent = city.contact.phone === contactInfo.main.phone;
    const isEmailConsistent = city.contact.email === contactInfo.main.email;
    const isAddressConsistent = city.contact.address === contactInfo.main.address.full;
    
    console.log(`     Phone Consistent: ${isPhoneConsistent ? '✅' : '❌'}`);
    console.log(`     Email Consistent: ${isEmailConsistent ? '✅' : '❌'}`);
    console.log(`     Address Consistent: ${isAddressConsistent ? '✅' : '❌'}`);
    console.log('');
  });

  // Test 5: Social Links
  console.log('5. Social Links:');
  console.log(`   Website: ${businessInfo.social.website}`);
  console.log(`   Facebook: ${businessInfo.social.facebook || 'Not set'}`);
  console.log(`   Instagram: ${businessInfo.social.instagram || 'Not set'}`);
  console.log(`   LinkedIn: ${businessInfo.social.linkedin || 'Not set'}\n`);

  // Test 6: SEO Information
  console.log('6. SEO Information:');
  console.log(`   Default Title: ${businessInfo.seo.defaultTitle}`);
  console.log(`   Default Description: ${businessInfo.seo.defaultDescription}`);
  console.log(`   Keywords Count: ${businessInfo.seo.defaultKeywords.length}\n`);

  // Test 7: Branding
  console.log('7. Branding:');
  console.log(`   Primary Color: ${businessInfo.branding.primaryColor}`);
  console.log(`   Secondary Color: ${businessInfo.branding.secondaryColor}`);
  console.log(`   Accent Color: ${businessInfo.branding.accentColor}`);
  console.log(`   Logo: ${businessInfo.branding.logo}`);
  console.log(`   Favicon: ${businessInfo.branding.favicon}\n`);

  console.log('=== Consistency Test Complete ===');
  
  return {
    companyInfo,
    contactInfo,
    hoursInfo,
    cities,
    businessInfo
  };
}

// Export for use in other files
export default testBusinessConsistency;
