const fs = require('fs');

// Navigation template
const navTemplate = `
    <div class="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
    </div>
`;

// Mobile navigation template
const mobileNavTemplate = `
    <nav class="mobile-nav">
        <div class="mobile-nav-content">
            <a class="mobile-link" href="homepage.html">Home</a>
            <div class="mobile-dropdown">
                <button class="mobile-dropdown-toggle">Parts</button>
                <div class="mobile-dropdown-menu">
                    <a href="Engine.html">Engine Components</a>
                    <a href="brake.html">Brake System</a>
                    <a href="suspension.html">Suspension & Steering</a>
                    <a href="transmission.html">Transmission & Drivetrain</a>
                    <a href="exhaust.html">Exhaust System</a>
                    <a href="electrical.html">Electrical & Lighting</a>
                    <a href="interior.html">Interior Parts</a>
                    <a href="exterior.html">Exterior & Body Parts</a>
                    <a href="fuel.html">Fuel System</a>
                    <a href="cooling.html">Cooling System</a>
                </div>
            </div>
            <div class="mobile-dropdown">
                <button class="mobile-dropdown-toggle">Accessories</button>
                <div class="mobile-dropdown-menu">
                    <a href="performance.html">Performance Accessories</a>
                    <a href="intacc.html">Interior Accessories</a>
                    <a href="extacc.html">Exterior Accessories</a>
                    <a href="tech.html">Tech & Convenience Accessories</a>
                    <a href="wheels.html">Wheels & Tire Accessories</a>
                    <a href="lifestyle.html">Lifestyle & Brand Gear</a>
                </div>
            </div>
            <a class="mobile-link" href="about.html">About Us</a>
            <a class="mobile-link" href="review.html">Reviews</a>
        </div>
    </nav>
`;

// JavaScript for mobile functionality
const mobileScript = `
    <script>
        // Mobile Menu Functionality
        const hamburger = document.querySelector('.hamburger-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const dropdownMenu = e.target.nextElementSibling;
                dropdownMenu.classList.toggle('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
                mobileNav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Desktop Dropdowns
        const dropdown = document.getElementById('productDropdown');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        toggle.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        });
        
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        const newdropdown = document.getElementById('newproductDropdown');
        const newtoggle = newdropdown.querySelector('.dropdown-toggle');
        
        newtoggle.addEventListener('click', () => {
            newdropdown.classList.toggle('open');
        });
        
        document.addEventListener('click', function(e) {
            if (!newdropdown.contains(e.target)) {
                newdropdown.classList.remove('open');
            }
        });
    </script>
`;

// List of files to update
const files = [
    'tech.html', 'about.html', 'extacc.html', 'suspension.html',
    'transmission.html', 'exhaust.html', 'electrical.html', 'interior.html',
    'exterior.html', 'cooling.html', 'performance.html', 'intacc.html',
    'wheels.html', 'lifestyle.html', 'review.html', 'terms.html', 
    'shippolicy.html', 'returnpolicy.html'
];

// Update each file
files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Add hamburger menu if not present
        if (!content.includes('hamburger-menu')) {
            content = content.replace('<header class="head-2">', '<header class="head-2">\n' + navTemplate);
        }
        
        // Add mobile navigation if not present
        if (!content.includes('mobile-nav')) {
            content = content.replace('</header>', '</header>\n' + mobileNavTemplate);
        }
        
        // Add mobile functionality script if not present
        if (!content.includes('Mobile Menu Functionality')) {
            content = content.replace('</body>', mobileScript + '\n</body>');
        }
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Successfully updated ${file}`);
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
}); 