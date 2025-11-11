import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navbar
    'nav.services': 'الخدمات',
    'nav.whyUs': 'لماذا نحن',
    'nav.platforms': 'المنصات',
    'nav.callNow': 'اتصل الآن',
    
    // Hero
    'hero.title': 'خلي عملاءك يرد عليهم الشات',
    'hero.titleHighlight': 'أسرع من البشر!',
    'hero.subtitle': 'Auto Boom هتخلي البراند بتاعك يرد في أقل من 30 ثانية على واتساب وإنستا وفيسبوك',
    'hero.cta': 'ابدأ دلوقتي',
    'hero.imageAlt': 'Auto Boom - رد تلقائي ذكي',
    
    // Benefits
    'benefits.title': 'ليه تختار Auto Boom؟',
    'benefits.subtitle': 'الحل الذكي اللي هيغير طريقة تعاملك مع عملائك',
    'benefits.speed.title': 'سرعة الرد = رضا العميل',
    'benefits.speed.desc': 'رد تلقائي في أقل من 30 ثانية على كل الاستفسارات، عميلك مش هيستنى ولا ثانية زيادة',
    'benefits.saving.title': 'توفير 3 موظفين خدمة عملاء',
    'benefits.saving.desc': 'وفر آلاف الجنيهات شهرياً، Auto Boom بيشتغل 24/7 من غير إجازات ولا تأخير',
    'benefits.sales.title': 'زيادة المبيعات 24/7',
    'benefits.sales.desc': 'مفيش عميل هيفوتك تاني، البوت بيرد حتى لو إنت نايم والمبيعات بتزيد على طول',
    
    // Proof
    'proof.title': 'نتائج حقيقية من عملائنا',
    'proof.subtitle': 'أكتر من 100 براند اعتمد على Auto Boom وزود مبيعاته في أول أسبوع',
    'proof.brands': 'براند واثق فينا',
    'proof.growth': 'زيادة في المبيعات',
    'proof.support': 'خدمة مستمرة',
    
    // Platforms
    'platforms.title': 'نشتغل على كل المنصات',
    'platforms.subtitle': 'AI Agent واحد يرد على كل المنصات في نفس اللحظة!',
    
    // Contact
    'contact.title': 'يلا نبدأ النهاردة!',
    'contact.subtitle': 'املى البيانات دي وهنتواصل معاك على طول',
    'contact.name': 'اسمك',
    'contact.brandName': 'اسم البراند',
    'contact.whatsapp': 'رقم الواتساب',
    'contact.reason': 'سبب اهتمامك بالخدمة',
    'contact.submit': 'يلا نتواصل',
    'contact.namePlaceholder': 'أحمد محمد',
    'contact.brandPlaceholder': 'براند شوب',
    'contact.whatsappPlaceholder': '01012345678',
    'contact.reasonPlaceholder': 'عايز أحسن خدمة العملاء وأزود المبيعات...',
    
    // Pricing
    'pricing.title': 'الباقات والأسعار',
    'pricing.subtitle': 'اختر الباقة المناسبة لأهدافك',
    'pricing.duration.1day': 'يوم واحد',
    'pricing.duration.5days': '5 أيام',
    'pricing.duration.10days': '10 أيام',
    'pricing.duration.30days': '30 يوم',
    'pricing.plan.basic': 'الباقة الأساسية',
    'pricing.plan.professional': 'الباقة الاحترافية',
    'pricing.plan.business': 'باقة الأعمال',
    'pricing.plan.enterprise': 'الباقة المتقدمة',
    'pricing.feature.service': 'خدمة 24/7',
    'pricing.feature.response': 'رد في أقل من 30 ثانية',
    'pricing.feature.messages': 'رسالة',
    'pricing.feature.messagesPerPlatform': 'رسالة لكل منصة',
    'pricing.feature.supports1Platform': 'تدعم منصة واحدة (واتساب، إنستجرام، فيسبوك)',
    'pricing.feature.supports3Platforms': 'تدعم 3 منصات (واتساب، إنستجرام، فيسبوك)',
    
    // Footer
    'footer.tagline': 'خدمة مقدمة بواسطة AI in N8N',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Messages
    'message.fillRequired': 'من فضلك املى كل الحقول المطلوبة',
    'message.openingWhatsapp': 'جاري فتح الواتساب...',
  },
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.whyUs': 'Why Us',
    'nav.platforms': 'Platforms',
    'nav.callNow': 'Contact Us',
    
    // Hero
    'hero.title': 'Let your customers get replies from chat',
    'hero.titleHighlight': 'Faster than humans!',
    'hero.subtitle': 'Auto Boom will make your brand respond in less than 30 seconds on WhatsApp, Instagram and Facebook',
    'hero.cta': 'Start Now',
    'hero.imageAlt': 'Auto Boom - Smart Auto Reply',
    
    // Benefits
    'benefits.title': 'Why Choose Auto Boom?',
    'benefits.subtitle': 'The smart solution that will change how you deal with your customers',
    'benefits.speed.title': 'Response Speed = Customer Satisfaction',
    'benefits.speed.desc': 'Automatic reply in less than 30 seconds to all inquiries, your customer won\'t wait a second more',
    'benefits.saving.title': 'Save 3 Customer Service Employees',
    'benefits.saving.desc': 'Save thousands monthly, Auto Boom works 24/7 without vacations or delays',
    'benefits.sales.title': 'Increase Sales 24/7',
    'benefits.sales.desc': 'No customer will slip away, the bot responds even while you sleep and sales keep growing',
    
    // Proof
    'proof.title': 'Real Results From Our Clients',
    'proof.subtitle': 'More than 100 brands trusted Auto Boom and increased their sales in the first week',
    'proof.brands': 'Trusted Brands',
    'proof.growth': 'Sales Increase',
    'proof.support': 'Continuous Service',
    
    // Platforms
    'platforms.title': 'We Work On All Platforms',
    'platforms.subtitle': 'One AI Agent responds on all platforms at the same moment!',
    
    // Contact
    'contact.title': 'Let\'s Start Today!',
    'contact.subtitle': 'Fill in these details and we\'ll contact you right away',
    'contact.name': 'Your Name',
    'contact.brandName': 'Brand Name',
    'contact.whatsapp': 'WhatsApp Number',
    'contact.reason': 'Reason for Interest',
    'contact.submit': 'Let\'s Connect',
    'contact.namePlaceholder': 'John Doe',
    'contact.brandPlaceholder': 'Brand Shop',
    'contact.whatsappPlaceholder': '01012345678',
    'contact.reasonPlaceholder': 'I want to improve customer service and increase sales...',
    
    // Pricing
    'pricing.title': 'Plans & Pricing',
    'pricing.subtitle': 'Choose the plan that fits your goals',
    'pricing.duration.1day': '1 Day',
    'pricing.duration.5days': '5 Days',
    'pricing.duration.10days': '10 Days',
    'pricing.duration.30days': '30 Days',
    'pricing.plan.basic': 'Basic',
    'pricing.plan.professional': 'Professional',
    'pricing.plan.business': 'Business',
    'pricing.plan.enterprise': 'Enterprise',
    'pricing.feature.service': '24/7 Service',
    'pricing.feature.response': 'Under 30 sec response',
    'pricing.feature.messages': 'Messages',
    'pricing.feature.messagesPerPlatform': 'Messages per platform',
    'pricing.feature.supports1Platform': 'Supports 1 Platform (WhatsApp, Instagram, Facebook)',
    'pricing.feature.supports3Platforms': 'Supports 3 platforms (WhatsApp, Instagram, Facebook)',
    
    // Footer
    'footer.tagline': 'Service provided by AI in N8N',
    'footer.rights': 'All Rights Reserved',
    
    // Messages
    'message.fillRequired': 'Please fill in all required fields',
    'message.openingWhatsapp': 'Opening WhatsApp...',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
