# Indonesian Paradise - Tour & Travel Website


[Banaspati Indonesian Paradise](https://module-1-haydar-dam.vercel.app/)

This website promotes **Banaspati Indonesian Paradise**, a tour and travel agency specializing in Indonesian adventures.

## Contents
1. **Home**: Introduction to Banaspati Indonesian Paradise, highlighting the beauty of Indonesia.
2. **Header:** Introduces the company name "Banaspati Indonesian Paradise" with a subtitle "Tour & Travel".
3. **Navigation:** Provides a clear menu for users to explore different sections like "Home", "Destinations", "Tours", "About Us", and "Contact".
4. **Main Content:**
    **Introduction:** Features a captivating image showcasing Indonesian beauty and a description inviting users to explore the country's landscapes, culture, and adventures. A call-to- action button "Explore Our Destinations - Package Tour" tempts visitors to delve deeper.
    **Why Choose Us:** Highlights the company's strengths with a bulleted list mentioning curated tours, experienced guides, unforgettable experiences, and exceptional customer service.
5. **Popular Destinations:** Showcases three destinations with captivating images and descriptions:
        * Tonya Dewata - Bali: Emphasizes stunning beaches, vibrant culture, ancient temples, and lush rice paddies.
        * Reptilian District - Komodo National Park: Entices with encounters with majestic Komodo dragons and breathtaking landscapes.
        * Altaria Vista - Borobudur Temple: Unveils the mysteries of the ancient Borobudur Temple, a UNESCO World Heritage Site.
6. **Contact Form:** Encourages users to "Take Your Seat!"  This section includes a form for visitors to provide their name, email, message, gender (radio buttons: Male/Female), preferred travel package (checkboxes for Bali, Komodo National Park, and Borobudur Temple), travel date, and travel time. Finally, a "Send Message" button allows them to submit their inquiries.

* **Footer:** Displays the company's copyright information and a "Contact Us" button styled with blue background and white text for easy access.

**Overall, this website provides a visually appealing and informative platform for potential travelers seeking an unforgettable Indonesian adventure with Banaspati Indonesian Paradise.**

---

**Structure and Content:**
![alt text](<foto/foto 1 head.png>)
* **Document type declaration (DOCTYPE):** `<!DOCTYPE html>` -  This line specifies the document type as HTML5.
* **Head section (`<head>`):** Contains metadata about the document, including:
    * **Character encoding (`<meta charset="UTF-8">`):** Defines the character encoding used for the text content (UTF-8 for handling various languages).
    * **Viewport (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`):** Controls how the document is displayed on different devices by ensuring proper scaling.
    * **Page title (`<title>Indonesian Paradise - Tour & Travel</title>`):**  Sets the title displayed in the browser tab.
    * **Favicon (`<link rel="icon" href="favicon.ico">`):**  Specifies the icon for the webpage displayed in the browser tab or address bar (if available).
    * **Stylesheet link (`<link rel="stylesheet" href="style.css">`):**  Links an external stylesheet file (`style.css`) that likely defines the visual appearance of the elements.

**Body Section (`<body>`):** Contains the visible content of the webpage:
![alt text](<foto/foto 2 navigasi.png>)

![alt text](<foto/foto 3 main & section pengenalan travel.png>)

![alt text](<foto/foto 4 destinasi.png>)
* **Header (`<header>`):**  Introduces the webpage with:
    * **Heading 1 (`<h1>`)** - Displays the main website title (`Banaspati Indonesian Paradise`).
    * **Heading 2 (`<h2>`)** - Provides a subheading (`Tour & Travel`).
* **Navigation (`<nav>`):**  Creates a navigation bar with a list of links (`<ul>`) for different sections of the webpage (`Home`, `Destinations`, `Tours`, `About Us`, and `Contact`).
* **Main Content (`<main>`):**  Contains the primary content of the webpage:
    * **Sections (`<section>`):**  Divides the content into logical sections:
        * **Introduction (`<section class="Introduction">`):**  Showcases a banner image with a description about Indonesian Paradise and a call to action button.
        * **Why Choose Us (`<section class="why choose us">`):**  Highlights the company's strengths using a list.
        * **Popular Destinations (`<section class="popular-destinations">`):**  Displays three destination cards, each containing an image, title, and description.
        * **Contact Form (`<section class="contact-form">`):**  Provides a form for visitors to contact the company. It includes various form elements for collecting user information, interests, travel preferences, and excitement level.
* **Footer (`<footer>`):**  Displays the website's copyright information and a "Contact Us" button.

**Form Functionality:**
![alt text](<foto/foto 5 text, email, text area.png>)

![alt text](<foto/foto 6 radio.png>)

![alt text](<foto/foto 7 checkbox.png>)

![alt text](<foto/foto 8 date, time, range, submit button.png>)

![alt text](<foto/foto 9 button.png>)


* **Form (`<form>`):**  Creates a form for user interaction.
    * **Form action (`action="contactForm"`):**  Specifies the action to be performed when the form is submitted (likely directed to a script named "contactForm" to process the data).
    * **Form method (`method="post"`):**  Defines how form data is sent to the server (POST method is commonly used for sending form data).
* **Form elements:**  Various input elements are used to collect user data:
    * Text input (`<input type="text">`) - For name and email.
    * Text area (`<textarea>`) - For message.
    * Radio buttons (`<input type="radio">`) - For gender selection (Male/Female).
    * Checkbox (`<input type="checkbox">`) - For selecting package interests (Adventure, Culture, Relaxation).
    * Date input (`<input type="date">`) - To choose a preferred travel date.
    * Time input (`<input type="time">`) - To choose a preferred travel time.
    * Range input (`<input type="range">`) - For an excitement level (0-10).
* **Submit button (`<button type="submit">`):**  Triggers the form submission process when clicked.


