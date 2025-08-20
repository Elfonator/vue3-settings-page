# Settings Page — Vue 3 + TypeScript

A small Vue 3 app that implements a modern Settings UI with tabbed navigation, dynamic sections, reusable transitions/styles, and a notification toaster rendered with Teleport. Settings are persisted to localStorage via a typed useSettings() composable.

## Features

- Tabs + dynamic sections (General, Privacy, Notifications)
- Typed composable useSettings() with refs & deep watchers
  - general: username, email, about, gender, country
  - privacy: visibility, searchEngineIndexing
  - notifications: email, sms
- Persistence to localStorage with generic init<T>() and watcher<T>()
- Reusable transitions and shared styles for enter/leave animations
- Notification toaster using <Teleport to="body"> with “OK” acknowledge
- Responsive UI with Tailwind utilities

## Tech Stack

Vue 3 + TypeScript + Vite, Tailwind CSS

## Getting Started

1. **Install**

```bash
npm install
```

2. **Run the app**

```bash
npm run dev
```
