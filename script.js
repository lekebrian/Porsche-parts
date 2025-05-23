// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    const dropdown = document.getElementById('productDropdown');
    const newdropdown = document.getElementById('newproductDropdown');

    // Hamburger menu toggle
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }

    // Mobile dropdown toggles
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;
            const menu = parent.querySelector('.mobile-dropdown-menu');
            
            // Close other open dropdowns
            mobileDropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherParent = otherToggle.parentElement;
                    const otherMenu = otherParent.querySelector('.mobile-dropdown-menu');
                    otherMenu.classList.remove('active');
                }
            });

            // Toggle current dropdown
            menu.classList.toggle('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav && hamburger && !mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
            mobileNav.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    });

    // Desktop dropdowns
    if (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.addEventListener('mouseover', () => {
            dropdown.classList.add('open');
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('open');
        });
    }

    if (newdropdown) {
        const newtoggle = newdropdown.querySelector('.dropdown-toggle');
        newtoggle.addEventListener('mouseover', () => {
            newdropdown.classList.add('open');
        });
        newdropdown.addEventListener('mouseleave', () => {
            newdropdown.classList.remove('open');
        });
    }

    // Scroll Animations
    const fadeElements = document.querySelectorAll('.search-bar, .search1, .search2, .special, .product');
    
    // Add fade-in class to elements
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all fade elements
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}); 