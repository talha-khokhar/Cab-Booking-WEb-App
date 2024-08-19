# CabHub - Cab Booking Web App

CabHub is a modern, responsive cab booking web application built with Next.js and styled using Tailwind CSS. The app offers various features including dark mode support, smooth animations, and a responsive carousel. It includes several essential components such as a hero section, contact form, cab listings, about section, app store links, and testimonials to provide a seamless user experience.


![CabHub Web App Layout](https://github.com/talha-khokhar/Cab-Booking-WEb-App/blob/master/public/layout.png?raw=true)



## Features

- **Responsive Design**: The application is optimized for different screen sizes and devices, ensuring a smooth experience on both mobile and desktop platforms.

- **Dark Mode**: Users can switch between light and dark modes for a better user experience in different lighting environments. The selected theme is saved in `localStorage` and persists across sessions.

- **Animations**: Smooth animations are implemented using the AOS (Animate On Scroll) library, enhancing the visual appeal as users scroll through the site.

- **Carousel**: Integrated with slick-carousel, the app provides a smooth and responsive image slider, particularly in the testimonials section.

## Tech Stack

- **Next.js**: The React framework for production, offering server-side rendering and easy routing.

- **React**: A JavaScript library for building user interfaces.

- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

- **AOS**: A library used to animate elements on scroll.

- **Slick Carousel**: A responsive carousel plugin used for sliding content.

## Project Structure

- **`/src/pages`**: Contains the main application pages.

- **`/src/components`**: Includes reusable components like Navbar, Footer, Hero, Contact, BestCab, About, AppStore, Testimonial, etc.

- **`/src/app`**: Contains application-level components and layouts.

## Tailwind Customizations

- **Dark Mode**: Enabled with the "class" strategy for easy theme switching.

- **Custom Colors**: Added primary and dark colors to match the branding.

- **Extended Backgrounds**: Added `gradient-radial` and `gradient-conic` for enhanced background effects.

- **Custom Utilities**: Defined reusable classes like `.inputField` for consistent form styling.

## Global Styles

Basic resets and custom settings include:

- No margin and padding on `html` and `body`.
- Hidden horizontal overflow to prevent accidental scrolling.

## Components Overview

### 1. DarkMode Component

- **Purpose**: Manages the theme (light/dark) for the web application.
- **Implementation**:
  - Uses `useState` to track the current theme.
  - Utilizes `useEffect` to store the theme in `localStorage` and apply it to the document.
  - Toggles between a sun icon (for dark mode) and a moon icon (for light mode).

### 2. Navbar Component

- **Purpose**: Renders the main navigation bar with links and a dark mode toggle.
- **Key Features**:
  - Displays the app logo and navigation links.
  - Includes a hamburger menu for mobile views, which toggles the visibility of the `ResponsiveMenu`.
  - Dynamically highlights the active link based on the current page.

### 3. ResponsiveMenu Component

- **Purpose**: Provides a mobile-friendly side-drawer menu.
- **Implementation**:
  - Receives a `showMenu` prop to control visibility.
  - Renders navigation links and a footer section with an animated slide-in effect.

### 4. Hero Component

- **Purpose**: Acts as the main banner section with a prominent call-to-action.
- **Key Features**:
  - Utilizes a background image to promote cab booking.
  - Includes a headline, a call-to-action phone number, and an image of a yellow cab.

### 5. BestCab Component

- **Purpose**: Highlights the top cab services.
- **Key Features**:
  - Displays a selection of cab services (Economy, Standard, Business) in a grid format.
  - Includes titles, images, descriptions, prices, and a "Read More" button.

### 6. Contact Component

- **Purpose**: Provides a form for users to book a cab or get in touch.
- **Key Features**:
  - Contains input fields for name, phone number, start and end locations, and vehicle selection.

### 7. Testimonial Component

- **Purpose**: Showcases customer feedback.
- **Key Features**:
  - Includes a slider that displays customer testimonials with names, feedback, and images.

### 8. Footer Component

- **Purpose**: Provides essential links and contact information at the bottom of the page.
- **Key Features**:
  - Includes sections for "About CabHub," "Download," and "Contact."
  - Displays social media icons and a call-to-action for contacting the service.

## Suggestions for Improvement

- **Hero Section**: Improve accessibility by adding `aria-labels` to important elements and ensuring sufficient text contrast.

- **Footer Section**: Make social media icons clickable by wrapping them in anchor (`<a>`) tags.

- **Testimonials**: Ensure the slider is accessible to keyboard users and provides alternative text for images.

## How to Use

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cabhub-web-app.git
2. Navigate to the project directory:
   ```bash
   cd cabhub-web-app
3. Install the dependencies:
   ```bash
   npm install
