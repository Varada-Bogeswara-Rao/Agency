Agency Website Design & Development Prompt
Project Overview
Build a clean, professional MVP agency website for a tech startup development agency. The agency specializes in building and launching clean MVPs, websites, and apps for tech startups, with ongoing maintenance services.

Design Philosophy & Principles
Core Design Values

Minimalism: Clean, uncluttered layouts with purposeful negative space
Professionalism: No AI-generated aesthetic patterns, gradients, or trendy effects
Clarity: Clear visual hierarchy and intuitive user flow
Balance: Harmonious distribution of visual weight across all pages

Strict Design Restrictions

❌ NO gradients
❌ NO AI-style glossy effects or morphism trends
❌ NO excessive decorative elements
❌ NO colored backgrounds (except strategic accent uses)
✅ Focus on typography, contrast, and negative space


Typography System
Font Families

Instrument Serif - For headlines, hero text, and emphasis

Use for: H1, H2, catchy phrases, highlighted words, pull quotes
Weights: Regular (400), Medium (500), Semi-Bold (600)


Poppins - For body text and UI elements

Use for: Body copy, buttons, navigation, labels, captions
Weights: Light (300), Regular (400), Medium (500), Semi-Bold (600)



Type Scale & Hierarchy
H1 (Hero): 64px / 4rem - Instrument Serif Semi-Bold
H2 (Section): 48px / 3rem - Instrument Serif Medium
H3 (Subsection): 32px / 2rem - Instrument Serif Regular
H4 (Card Titles): 24px / 1.5rem - Poppins Semi-Bold
Body Large: 20px / 1.25rem - Poppins Regular
Body: 16px / 1rem - Poppins Regular
Small: 14px / 0.875rem - Poppins Light
Caption: 12px / 0.75rem - Poppins Light
Line Height & Spacing

Headings: 1.2x font size
Body text: 1.6x font size
Paragraph spacing: 1.5em
Letter spacing: Slightly increased for all-caps text (0.05em)


Color Palette
Primary Colors
css--primary-black: #0A0A0A
--primary-white: #FFFFFF
--off-white: #FAFAFA
Grayscale Spectrum
css--gray-900: #1A1A1A (Dark text)
--gray-800: #2D2D2D (Secondary text)
--gray-700: #4A4A4A (Tertiary text)
--gray-600: #6B6B6B (Muted text)
--gray-500: #8C8C8C (Disabled text)
--gray-400: #ADADAD (Borders - strong)
--gray-300: #CFCFCF (Borders - medium)
--gray-200: #E8E8E8 (Borders - light)
--gray-100: #F5F5F5 (Backgrounds - subtle)
--gray-50: #F9F9F9 (Backgrounds - lighter)
Accent (Strategic Use Only)
css--accent-dark: #1A1A1A (For hover states on light backgrounds)
--accent-light: #F5F5F5 (For hover states on dark backgrounds)
```

---

## Site Structure

### Pages

#### 1. **Home**
- Hero Section
- Services Overview
- Process/Approach
- Case Studies Preview
- Why Choose Us
- CTA Section
- Footer

#### 2. **Services**
- Services Hero
- MVP Development (detailed)
- Web Development (detailed)
- App Development (detailed)
- Maintenance & Support (detailed)
- Technology Stack
- CTA Section
- Footer

#### 3. **Work/Portfolio**
- Work Hero
- Project Grid/List
- Case Studies (expandable)
- Outcomes/Metrics
- CTA Section
- Footer

#### 4. **About**
- About Hero
- Our Story
- Team/Approach
- Values/Principles
- CTA Section
- Footer

#### 5. **Contact**
- Contact Hero
- Contact Form
- Contact Information
- FAQ Section
- Footer

---

## Section-by-Section Design Specifications

### HOME PAGE

#### Section 1: Hero
**Design Principles**: Contrast, Hierarchy, Negative Space

**Layout**:
- Full viewport height (100vh)
- Centered content with generous padding
- 60% negative space around content

**Content Structure**:
```
[Instrument Serif, 64px, Black]
We Build Clean MVPs
That Launch Fast

[Poppins, 20px, Gray-700, max-width: 600px]
From concept to deployment, we create functional,
scalable products for tech startups—and maintain
them as you grow.

[Button - Poppins Medium, 16px]
Start Your Project →
```

**Visual Weight**:
- Headline: Heavy (Instrument Serif creates visual anchor)
- Subtext: Medium-light (supports, doesn't compete)
- CTA: Strong contrast (black bg, white text OR outlined)

**Spacing**:
- 48px between headline and subtext
- 32px between subtext and CTA
- 120px top/bottom padding on container

---

#### Section 2: Services Overview
**Design Principles**: Balance, Proportion, Consistency

**Layout**:
- 3-column grid (desktop) / 1-column (mobile)
- Equal height cards
- Subtle border separation (gray-200)

**Card Structure**:
```
[Icon/Number - Instrument Serif, 48px, Black]
01

[Title - Instrument Serif, 32px, Black]
MVP Development

[Description - Poppins, 16px, Gray-700]
Launch-ready products built with clean
code and scalable architecture.

[Link - Poppins Medium, 14px, Gray-900]
Learn more →
```

**Proportions**:
- Icon/Number: 20% of card height
- Title: 15% of card height
- Description: 55% of card height
- Link: 10% of card height
- Card padding: 40px all sides
- Gap between cards: 32px

**Hover State**:
- Background shifts to gray-50
- Border darkens to gray-300
- Smooth transition (0.3s ease)

---

#### Section 3: Process/Approach
**Design Principles**: Flow, Hierarchy, Proportion

**Layout**:
- Horizontal timeline/flow (desktop)
- Vertical stack (mobile)
- Connecting lines in gray-300

**Step Structure**:
```
[Number - Instrument Serif, 96px, Gray-200 (background)]
1

[Title - Instrument Serif, 24px, Black]
Discovery & Planning

[Description - Poppins, 16px, Gray-700]
We start by understanding your vision,
market, and technical requirements.
```

**Flow Design**:
- Left-to-right reading pattern
- Numbers create visual rhythm
- Connecting line guides eye movement
- 80px spacing between steps

---

#### Section 4: Case Studies Preview
**Design Principles**: Contrast, Negative Space, Emphasis

**Layout**:
- Alternating left-right layout
- Image 50% / Text 50% split
- High contrast between sections

**Case Study Block**:
```
[IMAGE SIDE - Grayscale or monochrome screenshot]
- Full bleed to edge
- Subtle shadow or border

[TEXT SIDE]
[Label - Poppins, 12px, Gray-600, uppercase]
CASE STUDY

[Title - Instrument Serif, 40px, Black]
Product Name

[Description - Poppins, 18px, Gray-700]
Challenge, solution, outcome in 2-3 sentences.

[Metrics - Poppins Medium, 16px, Black]
- 50% faster launch
- 10k users in 3 months
- 99.9% uptime

[Link - Poppins Medium, 14px]
View case study →
```

**Spacing**:
- 120px vertical padding per case
- 80px horizontal padding within text container
- 24px between metrics

---

#### Section 5: Why Choose Us
**Design Principles**: Balance, Consistency, Hierarchy

**Layout**:
- 2x2 grid (desktop) / Stack (mobile)
- Centered content blocks

**Benefit Block**:
```
[Icon/Visual - Minimal line icon or number]

[Headline - Instrument Serif, 28px, Black]
Clean Code Standards

[Body - Poppins, 16px, Gray-700]
Every line follows best practices for
maintainability and scalability.
```

**Grid Specifications**:
- 2 columns, 2 rows
- 40px gap between items
- 60px padding per block
- Light border dividers (gray-200)

---

#### Section 6: CTA Section
**Design Principles**: Contrast, Emphasis, Negative Space

**Layout**:
- Full-width container
- Black background (inverted section)
- Centered content

**Content**:
```
[Headline - Instrument Serif, 48px, White]
Ready to Build Your MVP?

[Subtext - Poppins, 18px, Gray-400]
Let's turn your idea into a launched product.

[Button - White bg, Black text, Poppins Medium]
Get in touch →
```

**Spacing**:
- 100px vertical padding
- 40px between headline and subtext
- 32px between subtext and button

---

### SERVICES PAGE

#### Section 1: Services Hero
**Design Principles**: Hierarchy, Negative Space

**Layout**:
- 70vh height
- Centered text
- Minimal decoration

**Content**:
```
[Overline - Poppins, 14px, Gray-600, uppercase]
WHAT WE DO

[Headline - Instrument Serif, 56px, Black]
Build. Launch. Maintain.

[Subtext - Poppins, 20px, Gray-700, max-width: 700px]
End-to-end development services for tech
startups who need to move fast without
compromising quality.
```

---

#### Section 2-5: Service Details (MVP, Web, App, Maintenance)
**Design Principles**: Consistency, Proportion, Flow

**Repeating Layout** (with alternating image/text sides):

**Service Block**:
```
[LEFT: Content / RIGHT: Visual OR vice versa]

[Service Name - Instrument Serif, 40px, Black]
MVP Development

[Description - Poppins, 18px, Gray-700]
2-3 paragraph detailed explanation of service,
approach, and benefits.

[What's Included - Poppins Medium, 16px, Black]
- Feature list item
- Feature list item
- Feature list item

[Deliverables/Timeline - Poppins, 16px, Gray-700]
Timeline and deliverable expectations
```

**Visual Side**:
- Tech stack logos (grayscale)
- Process diagram (minimal line art)
- Or abstract geometric pattern (black/white only)

**Spacing**:
- 160px between service sections
- 32px between description paragraphs
- 16px between list items
- 60px internal padding

---

#### Section 6: Technology Stack
**Design Principles**: Balance, Consistency

**Layout**:
- Logo grid
- 6 columns (desktop) / 3 (tablet) / 2 (mobile)

**Logo Treatment**:
- All grayscale
- Equal sizing (80x80px containers)
- Subtle hover state (slight scale or opacity shift)
- Consistent spacing (40px gap)

---

### WORK/PORTFOLIO PAGE

#### Section 1: Work Hero
**Design Principles**: Contrast, Simplicity

**Content**:
```
[Headline - Instrument Serif, 56px, Black]
Our Work

[Subtext - Poppins, 20px, Gray-700]
Clean MVPs that launched successfully.
```

---

#### Section 2: Project Grid
**Design Principles**: Proportion, Balance, Flow

**Layout**:
- Masonry or equal-height grid
- 2 columns (desktop) / 1 column (mobile)
- Hover reveals project details

**Project Card**:
```
[Image - Grayscale or subtle color]
- 16:10 aspect ratio
- Subtle border or shadow

[On Hover Overlay - Black bg, 90% opacity]
[Project Name - Instrument Serif, 28px, White]
[Category - Poppins, 14px, Gray-400]
[Link - Poppins Medium, 14px, White]
View case study →
```

**Grid Specs**:
- 32px gap between cards
- Cards scale 1.02 on hover
- Smooth transitions (0.4s ease)

---

#### Section 3: Case Studies (Detailed)
**Design Principles**: Hierarchy, Flow, Proportion

**Case Study Layout**:
```
[Hero Image - Full-width]

[Content Container - Max-width: 1000px, Centered]

[Title - Instrument Serif, 48px, Black]
Project Name

[Meta - Poppins, 14px, Gray-600]
Client • Industry • Timeline

[Challenge - Section]
[Label - Poppins Medium, 12px, uppercase, Gray-600]
THE CHALLENGE

[Text - Poppins, 18px, Gray-700]
Problem statement...

[Solution - Section]
[Label - Poppins Medium, 12px, uppercase, Gray-600]
OUR SOLUTION

[Text - Poppins, 18px, Gray-700]
What we built...

[Outcome - Section]
[Label - Poppins Medium, 12px, uppercase, Gray-600]
OUTCOMES

[Metrics Grid - 3 columns]
[Number - Instrument Serif, 48px, Black]
150%

[Label - Poppins, 14px, Gray-700]
Increase in conversions
```

**Spacing**:
- 80px between sections
- 48px between label and content
- 120px vertical padding on container

---

### ABOUT PAGE

#### Section 1: About Hero
**Design Principles**: Negative Space, Emphasis

**Content**:
```
[Headline - Instrument Serif, 56px, Black]
We Build Products
That Matter

[Subtext - Poppins, 20px, Gray-700, max-width: 800px]
Founded by developers who were tired of
bloated codebases and missed deadlines.
We do things differently.
```

---

#### Section 2: Our Story
**Design Principles**: Flow, Readability, Balance

**Layout**:
- Single column, max-width: 800px
- Centered content
- Pull quotes to break up text

**Content Structure**:
```
[Body Text - Poppins, 18px, Gray-700]
Regular paragraphs with generous line-height

[Pull Quote - Instrument Serif, 32px, Black]
"Clean code isn't optional.
It's how we work."

[Continue Body Text...]
```

**Spacing**:
- 32px between paragraphs
- 80px above/below pull quotes
- Pull quotes indented 40px

---

#### Section 3: Values/Principles
**Design Principles**: Consistency, Proportion

**Layout**:
- Vertical list of values
- Large numbers or icons

**Value Block**:
```
[Number - Instrument Serif, 120px, Gray-100 (background number)]
01

[Value Name - Instrument Serif, 32px, Black]
Simplicity First

[Description - Poppins, 16px, Gray-700]
Explanation of value and how it guides work.
```

**Spacing**:
- 100px between value blocks
- Background numbers slightly offset (-20px left)

---

### CONTACT PAGE

#### Section 1: Contact Hero
**Design Principles**: Clarity, Negative Space

**Content**:
```
[Headline - Instrument Serif, 56px, Black]
Let's Talk

[Subtext - Poppins, 20px, Gray-700]
Tell us about your project and we'll get
back to you within 24 hours.
```

---

#### Section 2: Contact Form + Info
**Design Principles**: Balance, Proportion

**Layout**:
- 60% form / 40% info (desktop)
- Stacked (mobile)

**Form Design**:
```
[Label - Poppins Medium, 14px, Gray-900]
Your Name

[Input - Poppins, 16px]
- Border: 1px solid gray-300
- Padding: 16px
- Border-radius: 2px (minimal)
- Focus state: border gray-900

[Button - Black bg, White text, Poppins Medium]
- Full-width or right-aligned
- 48px height
- Hover: gray-900 background
```

**Info Side**:
```
[Email - Poppins, 16px, Black]
hello@agency.com

[Location - Poppins, 16px, Gray-700]
San Francisco, CA

[Response Time - Poppins, 14px, Gray-600]
We typically respond within 24 hours
```

**Form Fields**:
- Name
- Email
- Company (optional)
- Project Type (dropdown)
- Budget Range (dropdown)
- Message (textarea)

**Spacing**:
- 24px between fields
- 32px before submit button
- 60px gap between form and info

---

#### Section 3: FAQ
**Design Principles**: Hierarchy, Flow

**Layout**:
- Accordion-style expandable questions
- Clean expand/collapse animations

**Question Block**:
```
[Question - Poppins Medium, 18px, Black]
How long does an MVP take?  [+/-]

[Answer - Poppins, 16px, Gray-700 (when expanded)]
Detailed answer text...
```

**Interaction**:
- Click to expand/collapse
- Smooth height transition (0.3s)
- Only one open at a time OR multiple allowed
- Divider lines between questions (gray-200)

---

## Global Components

### Navigation
**Design Principles**: Clarity, Consistency, Hierarchy

**Desktop Nav**:
```
[Logo - Instrument Serif, 24px, Black]
Agency

[Menu Items - Poppins Medium, 14px, Gray-900]
Services  Work  About  Contact

[CTA Button - Black bg, White text OR Outlined]
Start Project
```

**Specifications**:
- Fixed/sticky on scroll
- 80px height
- 120px horizontal padding
- Subtle shadow on scroll (gray-200)
- Active page: underline OR heavier weight

**Mobile Nav**:
- Hamburger menu (simple lines, no animations)
- Full-screen overlay (white bg)
- Large text menu items (Poppins, 32px)
- Smooth slide-in (0.3s ease)

---

### Footer
**Design Principles**: Balance, Consistency

**Layout**:
- 4 columns (desktop) / Stack (mobile)
- Dark background (gray-900) OR light (gray-50)

**Content Columns**:
```
[Column 1: Branding]
Logo + Tagline

[Column 2: Quick Links]
Services, Work, About, Contact

[Column 3: Services]
MVP, Web, App, Maintenance

[Column 4: Contact]
Email, Social (if applicable)

[Bottom Bar]
© 2024 Agency • Privacy • Terms
Styling:

If dark bg: White/gray-400 text
If light bg: Black/gray-700 text
Poppins Regular, 14px
Headings: Poppins Medium, 12px, uppercase
80px vertical padding
120px horizontal padding


Buttons
Design Principles: Contrast, Consistency
Primary Button:
cssbackground: black
color: white
padding: 16px 32px
font: Poppins Medium, 16px
border-radius: 2px
transition: 0.3s ease

hover:
  background: gray-900
  transform: translateY(-2px)
Secondary Button (Outlined):
cssbackground: transparent
color: black
border: 1px solid black
padding: 16px 32px
font: Poppins Medium, 16px
border-radius: 2px

hover:
  background: black
  color: white
Text Link/Button:
csscolor: black
font: Poppins Medium, 14px
text-decoration: none
position: relative

after:
  content: "→"
  margin-left: 8px
  transition: 0.3s

hover:
  after: margin-left: 12px

Cards/Containers
Design Principles: Proportion, Negative Space
Standard Card:
cssbackground: white
border: 1px solid gray-200
padding: 40px
border-radius: 4px (minimal)

hover:
  border-color: gray-300
  box-shadow: 0 4px 16px rgba(0,0,0,0.04)
Specifications:

Minimum height: 300px
Consistent internal padding
Subtle hover transitions


Responsive Design
Breakpoints
cssmobile: 0-767px
tablet: 768-1023px
desktop: 1024-1439px
large: 1440px+
```

### Mobile-First Adjustments

**Typography Scale (Mobile)**:
```
H1: 40px / 2.5rem
H2: 32px / 2rem
H3: 24px / 1.5rem
H4: 20px / 1.25rem
Body: 16px / 1rem
Spacing Scale (Mobile):

Reduce all section padding by 40%
Container padding: 24px (instead of 120px)
Vertical spacing: 60px (instead of 120px)

Layout Changes:

All grids collapse to single column
Side-by-side layouts stack vertically
Navigation becomes hamburger menu
Footer columns stack


Interactions & Animations
Principles

Subtle: No flashy or distracting animations
Purposeful: Every animation serves a function
Fast: Transitions should be snappy (0.2-0.4s)
Smooth: Use ease-in-out timing functions

Standard Transitions
css/* Hover states */
transition: all 0.3s ease;

/* Page loads */
fade-in: 0.6s ease-out

/* Micro-interactions */
transform: 0.2s ease
```

### Interactive States
- **Hover**: Subtle color/size changes
- **Active**: Slight depression effect
- **Focus**: Clear outline (gray-900, 2px)
- **Disabled**: Reduced opacity (0.5)

---

## User Flow Optimization

### Flow Principle 1: Clear Entry Points
- Every page has one primary CTA above fold
- Secondary actions are visually subordinate
- Navigation is always accessible

### Flow Principle 2: Logical Progression
```
Homepage → Services → Work → Contact
         ↓
      Individual Service Page
         ↓
      Case Study
         ↓
      Contact
Flow Principle 3: Minimal Friction

Forms are concise (only essential fields)
CTAs are descriptive ("Start Your Project" not "Submit")
Loading states are indicated
Error messages are helpful

Flow Principle 4: Breadcrumb Logic

Users can always navigate back
Current page is indicated in navigation
Related content is suggested at page end


Accessibility Requirements
Color Contrast

Text on white: minimum 4.5:1 ratio
Large text (24px+): minimum 3:1 ratio
All interactive elements meet AA standards

Keyboard Navigation

All interactive elements are keyboard accessible
Focus states are clearly visible
Tab order is logical

Screen Readers

Semantic HTML structure
Alt text for all images
ARIA labels where needed
Heading hierarchy is logical (no skipped levels)

Touch Targets

Minimum 44x44px for all clickable elements
Adequate spacing between touch targets (8px minimum)


Performance Optimization
Loading Strategy

Above-the-fold content loads first
Images lazy load below fold
Fonts preloaded (Instrument Serif, Poppins)
Critical CSS inlined

Image Optimization

WebP format with fallbacks
Responsive images (srcset)
Proper sizing (no oversized images)
Compression without quality loss

Code Optimization

Minimal JavaScript
CSS organized by component
Remove unused styles
Minify production code


Content Guidelines
Tone of Voice

Clear: No jargon or fluff
Confident: Expertise without arrogance
Concise: Respect user's time
Action-oriented: Every section has a purpose

Copywriting Rules

Use active voice
Short sentences (15-20 words max)
Paragraphs: 3-4 sentences max
Bullet points for scannable lists
Headers that inform, not tease

Highlighting Strategy

Use Instrument Serif for emphasis
Limit to 1-2 highlighted phrases per section
Highlight outcome/benefit words
Examples: "Fast", "Clean", "Scalable", "Launch-ready"


Technical Implementation Notes
Framework Recommendations

Next.js or React (component-based)
Tailwind CSS (utility-first, custom config)
Framer Motion (subtle animations)
React Hook Form (contact form)

Custom Tailwind Config
javascripttheme: {
  colors: {
    black: '#0A0A0A',
    white: '#FFFFFF',
    gray: {
      50-900: [as specified above]
    }
  },
  fontFamily: {
    serif: ['Instrument Serif', 'serif'],
    sans: ['Poppins', 'sans-serif']
  },
  fontSize: [as specified in typography],
  spacing: [custom scale],
  borderRadius: {
    minimal: '2px',
    small: '4px'
  }
}
```

### Component Structure
```
/components
  /global
    - Navigation
    - Footer
    - Button
    - Card
  /sections
    - Hero
    - ServicesGrid
    - CaseStudyBlock
    - ContactForm
  /layout
    - Container
    - Grid
    - Section

Quality Checklist
Design Quality

 Consistent spacing system used throughout
 Typography hierarchy is clear
 Color usage follows palette restrictions
 Negative space is intentional and generous
 Visual balance on all pages
 No gradients or AI-style effects

User Experience

 Clear visual hierarchy on every page
 Primary CTAs are obvious
 Navigation is intuitive
 User flow is logical
 Forms are simple and clear
 Error states are helpful

Technical Quality

 Responsive on all breakpoints
 Accessible (WCAG AA)
 Fast loading (<3s)
 Cross-browser compatible
 SEO optimized
 Clean, maintainable code

Content Quality

 Copy is clear and concise
 No spelling/grammar errors
 Emphasis is strategic (Instrument Serif)
 CTAs are action-oriented
 Tone is consistent


Final Notes
This website should feel:

Professional without being corporate
Modern without being trendy
Simple without being basic
Confident without being arrogant

The design should let the work speak for itself. Every element serves a purpose. Every word earns its place. Nothing is decorative. Everything communicates.
Build something clients will trust and competitors will respect.