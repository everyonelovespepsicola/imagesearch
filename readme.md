# Universal Advanced Image Search App

A fast, responsive, and fully customizable frontend wrapper for Google Advanced Image Search. Designed to feel like a native mobile app on phones and tablets, while elegantly expanding for large desktop monitors.

## ✨ Features

* **Advanced Search Operators:** Easily find images using exact words, exclusions, or "any" combinations.
* **Powerful Filters:** Narrow down results by image size (up to 70MP!), aspect ratio, colors, image type, file type, usage rights, and publication time.
* **Smart Autocomplete History:** Text inputs automatically remember your last 10 searches and provide a drop-down history via native HTML `<datalist>` elements.
* **Persistent Preferences:** Dropdown filters automatically save your selections using the browser's `localStorage`, so your preferred settings (like searching only for transparent PNGs) remain active across sessions.
* **Responsive "Native" Design:** Built with a clean CSS Flexbox layout and viewport scaling to look and feel like a dedicated application across iOS, Android, and Desktop.
* **Theming Ready:** Cleanly organized CSS variables (`:root`) make it exceptionally easy to customize brand colors or implement a Dark Mode.
* **Zero Dependencies:** 100% Vanilla HTML, CSS, and JavaScript. No servers, build steps, or API keys required!

## 🚀 Getting Started

This application runs entirely locally in your web browser. There is no installation or backend setup required.

1. Download the project files.
2. Double-click `index.html` to open it in any modern web browser (Chrome, Firefox, Safari, Edge).
3. Enter your search criteria, configure your filters, and click **Search**.

## 🧠 How it Works

* **Search Construction:** The JavaScript engine takes your text inputs and safely constructs standard Google search operators (e.g., `site:`, `filetype:`).
* **Advanced Parameter Mapping:** Dropdown selections are mapped directly to Google Images' advanced `tbs` (To Be Searched) URL parameters, ensuring perfectly filtered results.
* **Local Storage Integration:** The `localStorage` API is utilized to securely save your recent search history arrays and filter preferences directly to your local device. 

## 🎨 Customizing the Theme

Open `index.html` and look for the `:root` pseudo-class at the top of the `<style>` block. 

```css
:root {
    --bg-color: #f1f3f4;
    --header-bg: #202124;
    --primary-color: #1a73e8;
    /* ... */
}
```

You can change any hex code here to instantly re-theme the entire application. Modifying these variables allows for easy implementation of dark/light mode toggles.

## 📄 License

This project is open-source and free to use, modify, and distribute.