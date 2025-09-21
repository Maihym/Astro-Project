# shadcn/ui Components Overview

## 🎉 Successfully Installed Components

Your Astro project now has access to a comprehensive set of shadcn/ui components! Here's what's available:

### 📋 Core Components
- **Button** - Various button styles and sizes
- **Card** - Container component with header, content, and footer
- **Input** - Text input field
- **Label** - Form labels
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection component

### 🎨 Layout & Display
- **Badge** - Small status indicators
- **Avatar** - User profile images
- **Separator** - Visual dividers
- **Skeleton** - Loading placeholders
- **Progress** - Progress bars
- **Calendar** - Date picker component

### 📝 Form Components
- **Form** - Form wrapper with validation
- **Checkbox** - Checkbox inputs
- **Radio Group** - Radio button groups
- **Switch** - Toggle switches
- **Slider** - Range sliders

### 🔄 Interactive Components
- **Dialog** - Modal dialogs
- **Alert Dialog** - Confirmation dialogs
- **Dropdown Menu** - Context menus
- **Popover** - Floating content
- **Tooltip** - Hover information
- **Sheet** - Slide-out panels
- **Sidebar** - Navigation sidebar

### 📊 Data Display
- **Table** - Data tables
- **Tabs** - Tabbed content
- **Accordion** - Collapsible content
- **Command** - Command palette
- **Navigation Menu** - Complex navigation
- **Breadcrumb** - Navigation breadcrumbs
- **Pagination** - Page navigation

### 🔔 Feedback
- **Sonner** - Toast notifications (replaces deprecated toast)

### 🛠️ Utilities
- **use-mobile** - Hook for mobile detection

## 🚀 How to Use

### 1. Import Components
```tsx
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
```

### 2. Use in React Components
```tsx
export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
```

### 3. Use in Astro Pages
```astro
---
import MyComponent from '../components/MyComponent.tsx'
---

<MyComponent client:load />
```

## 🎨 Styling

All components use the CSS variables defined in your `src/styles/global.css`:
- Light and dark mode support
- Consistent color scheme
- Customizable via CSS variables

## 📚 Documentation

- **Official docs**: [ui.shadcn.com](https://ui.shadcn.com)
- **Component examples**: Each component page has usage examples
- **Customization**: All components are fully customizable

## 🔧 Adding More Components

To add additional components:
```bash
npx shadcn@latest add [component-name]
```

Popular additional components you might want:
- `carousel` - Image/content carousels
- `drawer` - Mobile-friendly drawers
- `hover-card` - Hover-triggered content
- `menubar` - Menu bars
- `resizable` - Resizable panels
- `scroll-area` - Custom scrollbars
- `toggle` - Toggle buttons
- `toggle-group` - Toggle button groups

## 🎯 Next Steps

1. **Explore components**: Try different components in your project
2. **Customize themes**: Modify CSS variables for your brand
3. **Add blocks**: Use `npx shadcn@latest add [block-name]` for complete UI sections
4. **Build your app**: Start building your application with these components!

Happy coding! 🎉
