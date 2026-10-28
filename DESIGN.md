---
version: alpha
name: "Proof First: Cobalt Editorial"
description: >-
  A crisp, high-trust editorial design system for consumer rights guides, investigative
  case files, open letters, and evidence-backed explainers. Re-engineered with an authoritative
  Cobalt Blue and Midnight Slate palette that reads like a precision dossier.
colors:
  primary: "#1D4ED8"
  primary-strong: "#1E40AF"
  primary-ink: "#1E3A8A"
  primary-soft: "#EFF6FF"
  primary-soft-2: "#DBEAFE"
  primary-border: "#BFDBFE"
  on-primary: "#FFFFFF"
  primary-bright: "#60A5FA"
  secondary: "#0F172A"
  on-secondary: "#FFFFFF"
  neutral: "#FFFFFF"
  surface: "#FFFFFF"
  surface-2: "#F8FAFC"
  surface-muted: "#F1F5F9"
  surface-sunken: "#E2E8F0"
  on-surface: "#334155"
  on-surface-strong: "#0F172A"
  on-surface-variant: "#475569"
  on-surface-muted: "#64748B"
  outline: "#E2E8F0"
  outline-strong: "#CBD5E1"
  error: "#DC2626"
  on-error: "#FFFFFF"
typography:
  headline-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 47px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 29px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  stat-number:
    fontFamily: Plus Jakarta Sans
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1
    letterSpacing: -0.035em
    fontFeature: '"tnum" 1'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.72
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.72
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13.5px
    fontWeight: 500
    lineHeight: 1.5
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.16em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.16em
rounded:
  sm: 12px
  md: 18px
  lg: 26px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 148px
  section-min: 84px
  shell: 1180px
  shell-narrow: 880px
  gutter: 40px
  gutter-min: 20px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  text-selection:
    backgroundColor: "{colors.primary-soft-2}"
    textColor: "{colors.primary-ink}"
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  divider-strong:
    backgroundColor: "{colors.outline-strong}"
    height: 1px
  divider-accent:
    backgroundColor: "{colors.primary-border}"
    height: 1px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  button-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  button-dark-hover:
    backgroundColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-ghost-hover:
    backgroundColor: "{colors.surface-muted}"
  pill-label:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 32px
  card-nested:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 20px
  card-callout:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.md}"
    padding: 28px
  stat-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.stat-number}"
    padding: 28px
  stat-cell-hot:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.stat-number}"
  section-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    padding: 148px
  headline-card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary-bright}"
    rounded: "{rounded.lg}"
    padding: 48px
  ticker:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label-sm}"
    padding: 12px
  header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    height: 72px
  input:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0px 14px
  footer:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    padding: 64px
---

# Proof First: Cobalt Editorial

## Overview

A crisp, authoritative, editorial look for websites built around consumer documentation: a warranty field guide, an open dossier, a case file, a petition, or an investigative explainer. It feels structured and evidentiary without being intimidating, so the reader stays calm, follows each step, and trusts the guidance.

White pages, deep midnight-slate headlines in a heavy geometric sans, one cobalt blue accent, small uppercase monospace labels, soft rounded cards, and generous breathing room. Every section follows the same stack: a mono pill label, a heavy headline, one lead paragraph, then evidence (numbers, dates, documents) in cards. Sections alternate pure white, cool slate mist, and midnight slate to give a long read a clear rhythm without adding extra hues. Light theme by default.

## Colors

One high-clarity cobalt accent, while midnight slate and crisp white do the heavy lifting.

- **Cobalt (`#1D4ED8`), `primary`:** the sole brand color. Used for primary buttons, links, pill labels, the focus ring, and the single stat that matters most. It easily clears WCAG AA 4.5:1 on white and on slate mist, so even 10px mono labels stay sharp. Hover deepens it to `primary-strong` (`#1E40AF`).
- **Ice Blue wash (`#EFF6FF`) with Navy Ink text (`#1E3A8A`):** pill labels, callout cards, and the top ticker strip. `primary-border` (`#BFDBFE`) outlines them; `primary-soft-2` (`#DBEAFE`) is the text selection highlight.
- **Sky Blue (`#60A5FA`), `primary-bright`:** the accent used ON dark midnight-slate sections only, where standard cobalt would lack contrast.
- **Midnight Slate (`#0F172A`), `secondary`:** headlines, dark callout sections, and the dark header button.
- **Body text (`#334155`), captions (`#475569`), meta (`#64748B`):** a balanced three-step cool slate ramp.
- **White (`#FFFFFF`), Slate Mist (`#F1F5F9`), Sunken (`#E2E8F0`):** page, alternate section, and input backgrounds. Hairlines are `#E2E8F0`, stronger borders `#CBD5E1`.
- **Crimson Alert (`#DC2626`), `error`:** small live badges and rejection warnings only, never large surfaces.

On dark sections, body text is white at 75–80% opacity and captions at 60%.

## Typography

**Plus Jakarta Sans** carries everything a person reads; **JetBrains Mono** carries labels, ticket numbers, dates, and sources so facts read like verified records.

- **Headlines:** Plus Jakarta Sans ExtraBold (800), tight tracking (-0.035em) and leading 1.06. Sizes are fluid: display 36 to 60px, section headline 31 to 47px, card headline 23 to 29px.
- **Lead paragraph:** 17.5 to 20px, line height 1.72, in caption slate.
- **Body:** 17px, line height 1.72, in body slate.
- **Mono labels:** JetBrains Mono 500, 11px (10px inside pills), uppercase, 0.16em tracking.
- **Big numbers:** 800 weight with tabular figures (`"tnum" 1`), 44 to 56px, in midnight slate or cobalt.

## Layout & Elevation

Retains the centered **1180px** shell (and **880px** narrow reading shell) with 84–148px vertical section rhythm, soft slate-tinted shadows (`rgba(15, 23, 42, ...)`), and friendly 12px / 18px / 26px border radii.