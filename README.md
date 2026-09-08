# Skyone Studio Builder - Scaffold

This folder contains the default app scaffold used by **Skyone Studio Builder** to start, evolve, and publish modern web apps.

Think of this scaffold as your launchpad: you can go from idea to production with AI-assisted development, live preview, code control, and deployment workflows in one place.

## Skyone Studio narrative

Skyone Studio Builder is designed for a full product journey:

1. **Start with an idea** in chat.
2. **Plan and generate** features, pages, and flows.
3. **Iterate with confidence** using preview, console, and version history.
4. **Integrate services** like GitHub, database tools, and backend providers.
5. **Ship fast** to web, and upgrade to hybrid mobile when needed.

This scaffold is the technical baseline that makes that journey reliable and repeatable.

## What you can do with Studio Builder

With Skyone Studio Builder, you can:

- Create and evolve complete React + TypeScript apps from prompts.
- Use AI chat modes for building, asking, planning, and local agent tasks.
- Generate, edit, refactor, and review code in project context.
- Run and validate apps with live preview and runtime output.
- Inspect and fix issues with problem checks and type checks.
- Work with file trees and editors directly in the app experience.
- Import existing applications and continue development in Studio.
- Connect repositories and publish code to GitHub.
- Upgrade eligible apps to Capacitor for hybrid mobile targets.
- Configure model providers and runtime capabilities by environment.
- Use voice-to-text input and productivity features while building.
- Manage settings, chat history, and project context in one workspace.

## About this scaffold

This scaffold is a Vite React TypeScript app template used as the default base for generated projects.

### Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- UI components and utility primitives

### Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production bundle
- `npm run build:github` - Build for GitHub Pages (relative base path)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run lint checks

## Publish on GitHub Pages

If you want to host this scaffold output on GitHub Pages:

1. Build with:

```bash
npm run build:github
```

2. Publish the generated `dist` folder to your Pages target (branch or artifact workflow).

`build:github` uses a relative base path so assets load correctly under repository subpaths.

## Recommended workflow in Skyone Studio Builder

1. Define your app goal and core user flow in chat.
2. Generate an initial version from scaffold.
3. Iterate feature by feature with preview always visible.
4. Validate with checks (lint/type/build) before release.
5. Connect GitHub and publish.
6. Add deployment and optional mobile upgrade.

## Notes

- This README documents the scaffold role in the Skyone Studio Builder ecosystem.
- Product capabilities evolve over time; keep this document updated as Studio adds new workflows.
