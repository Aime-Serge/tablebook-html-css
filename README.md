# TableBook HTML/CSS

TableBook is a University of Rwanda Year 1 Web Design project transformed from a framework-based restaurant reservation prototype into a clean HTML, CSS, and JavaScript scaffold.

## Purpose

The project demonstrates how a restaurant reservation platform can be represented with semantic HTML, external CSS, accessible forms, responsive layouts, and light JavaScript without relying on Next.js, React, Tailwind, TypeScript, Supabase, Radix UI, or any external framework.

## Original Project Summary

The source project was a v0/Next.js app with Supabase integration. It included restaurant search, restaurant detail pages, a booking widget, login and sign-up flows, diner reservations, account settings, and a restaurant owner dashboard.

## Why It Was Transformed

The transformation keeps the same business purpose and user flows while matching a Web Design course scope. Backend logic, authentication, database persistence, and framework components are intentionally deferred so the submitted version focuses on HTML structure, CSS design, forms, links, tables, responsive design, and maintainable file organization.

## Curriculum Concepts Demonstrated

- Complete HTML5 page structure with `html`, `head`, `title`, and `body`
- Semantic sections using `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`
- Headings, paragraphs, links, images, lists, horizontal rules, and tables
- Accessible forms with `label`, `id`, required fields, input types, radio buttons, checkboxes, selects, textareas, submit buttons, and helper text
- External CSS files, custom properties, selectors, pseudo-classes, box model, spacing, colors, typography, Flexbox, Grid, and media queries
- Dashboard reservation data represented with a meaningful HTML table
- Modular JavaScript scaffolding for navigation, search, booking, auth placeholders, dashboard actions, and validation

## Folder Structure

```txt
tablebook-html-css/
├── index.html
├── search.html
├── restaurant-detail.html
├── reservations.html
├── account.html
├── dashboard.html
├── create-restaurant.html
├── login.html
├── sign-up.html
├── sign-up-success.html
├── assets/
│   ├── images/
│   └── icons/
├── css/
└── js/
```

## Pages Included

- `index.html`: home, hero search, how it works, cuisines, featured restaurants, owner CTA
- `search.html`: compact search, cuisine and price filters, active filters, sorting, result cards, empty state
- `restaurant-detail.html`: restaurant profile, contact details, hours, amenities, reviews, booking widget
- `reservations.html`: upcoming, past, and cancelled reservation groups
- `account.html`: account settings and profile details
- `dashboard.html`: owner stats, restaurant summary, reservations table, status placeholders
- `create-restaurant.html`: owner restaurant creation form
- `login.html`, `sign-up.html`, `sign-up-success.html`: authentication flow placeholders

## How To Run Locally

Open `index.html` in a browser. No build step, package install, server, database, or framework runtime is required.

## Current Limitations

This version uses static sample data and placeholder UI handlers. It does not perform real login, sign-up, authorization, restaurant creation, reservation persistence, email confirmation, or live search filtering.

## Next Phase Plan

- Connect forms to secure JavaScript/backend endpoints
- Add real validation and server-side checks
- Implement authenticated diner and owner roles
- Store restaurants, tables, reservations, reviews, and profiles in a database
- Replace placeholder dashboard actions with secure status updates
- Add real image upload and optimized restaurant media handling

## Security Notes

No API keys, Supabase URLs, tokens, secrets, or credentials are included. Sensitive forms use `method="post"` and avoid placing passwords or account data in query strings. Real security is intentionally deferred to a properly designed backend phase.

## Performance And Accessibility

The project uses lightweight local files, organized CSS, minimal JavaScript, local image placeholders, lazy loading for non-critical images, visible focus states, meaningful alt text, proper labels, and responsive breakpoints for mobile, tablet, and desktop layouts.
