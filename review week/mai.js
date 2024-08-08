document.addEventListener("DOMContentLoaded", function() {
    // Create and insert the header
    const header = document.createElement('header');
    header.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>`;
    document.body.prepend(header);

    // Create and insert the footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2024 Semester Review Project. All rights reserved.</p>`;
    document.body.appendChild(footer);
});
