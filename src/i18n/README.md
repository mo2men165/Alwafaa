# Internationalization (i18n) Setup

This project uses **react-i18next** for internationalization with support for English (en) and Arabic (ar).

## 🌍 Features

- ✅ English and Arabic language support
- ✅ Automatic RTL/LTR text direction switching
- ✅ Language preference saved in localStorage
- ✅ TypeScript support
- ✅ Tailwind CSS RTL compatibility

## 📁 File Structure

```
src/
├── i18n/
│   └── config.ts          # i18n configuration
├── locales/
│   ├── en.json            # English translations
│   └── ar.json            # Arabic translations
├── contexts/
│   └── LanguageContext.tsx # Language state management
└── components/
    └── LanguageSwitcher.tsx # Language switcher component
```

## 🚀 Usage

### Basic Translation

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('app.title')}</h1>;
}
```

### Accessing Language State

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { language, changeLanguage, isRTL } = useLanguage();
  
  return (
    <div>
      <p>Current language: {language}</p>
      <p>Is RTL: {isRTL}</p>
      <button onClick={() => changeLanguage('ar')}>
        Switch to Arabic
      </button>
    </div>
  );
}
```

### Adding New Translations

1. Add the key-value pair to `src/locales/en.json`:
```json
{
  "myFeature": {
    "title": "My Feature Title"
  }
}
```

2. Add the Arabic translation to `src/locales/ar.json`:
```json
{
  "myFeature": {
    "title": "عنوان ميزتي"
  }
}
```

3. Use in your component:
```tsx
{t('myFeature.title')}
```

### RTL Styling with Tailwind

The `dir` attribute is automatically set on the `<html>` element. Use Tailwind's RTL modifiers:

```tsx
<div className="ml-4 rtl:mr-4 rtl:ml-0">
  Content with RTL-aware margins
</div>
```

Common RTL patterns:
- `ml-4 rtl:mr-4 rtl:ml-0` - Left margin that becomes right margin in RTL
- `text-left rtl:text-right` - Text alignment
- `float-left rtl:float-right` - Float direction
- `rounded-l rtl:rounded-r` - Border radius

## 🔧 Configuration

The default language is set based on:
1. User's saved preference in localStorage
2. Falls back to English if no preference is saved

Change the default language in `src/i18n/config.ts`:
```ts
lng: localStorage.getItem('language') || 'ar', // Change 'en' to 'ar' for Arabic default
```

## 📝 Translation File Structure

Organize translations by feature or domain:

```json
{
  "app": { /* App-level translations */ },
  "common": { /* Reusable common terms */ },
  "navigation": { /* Navigation items */ },
  "auth": { /* Authentication related */ },
  "errors": { /* Error messages */ }
}
```

## 🌐 Adding More Languages

1. Create a new locale file (e.g., `src/locales/fr.json`)
2. Add it to the i18n config:
```ts
import fr from '../locales/fr.json';

resources: {
  en: { translation: en },
  ar: { translation: ar },
  fr: { translation: fr }
}
```
3. Update the language switcher to include the new language

