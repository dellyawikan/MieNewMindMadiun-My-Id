// Dashboard JavaScript - Simple and reliable
// Handles navigation, active state, and button animations

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication first
    checkAuthentication();
    
    setActiveMenuItemByCurrentPage();
    initializeButtonAnimations();
    addLogoutFunctionality();
    console.log('Dashboard initialized');
});

/**
 * Check if user is authenticated - redirect to login if not
 */
function checkAuthentication() {
    if (sessionStorage.getItem('dashboardAuth') !== 'true') {
        // Not authenticated, redirect to login
        window.location.href = 'login.html';
    }
}

/**
 * Add logout functionality to all pages
 */
function addLogoutFunctionality() {
    // Create logout button in sidebar menu at the bottom
    const sidebarMenu = document.querySelector('.sidebar-menu');
    if (sidebarMenu) {
        const logoutBtn = document.createElement('a');
        logoutBtn.href = '#';
        logoutBtn.className = 'menu-item logout-menu-item';
        logoutBtn.innerHTML = '<span class="menu-icon">▌</span> LOGOUT';
        logoutBtn.style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 20px;
            color: #e74c3c;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
            cursor: pointer;
            user-select: none;
            margin-top: auto;
            border-top: 1px solid #f5f5f7;
            margin-top: 20px;
            padding-top: 20px;
        `;

        logoutBtn.addEventListener('mouseover', function() {
            this.style.background = '#ffebee';
            this.style.color = '#c0392b';
            this.style.borderLeftColor = '#e74c3c';
        });

        logoutBtn.addEventListener('mouseout', function() {
            this.style.background = '';
            this.style.color = '#e74c3c';
            this.style.borderLeftColor = 'transparent';
        });

        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });

        sidebarMenu.appendChild(logoutBtn);
    }

    // Also add keyboard shortcut: Ctrl+L or Cmd+L for logout
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            logout();
        }
    });
}

/**
 * Logout function - clear session and redirect to login
 */
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('dashboardAuth');
        sessionStorage.clear();
        window.location.href = 'login.html';
    }
}

/**
 * Set active menu item based on current page
 */
function setActiveMenuItemByCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
    
    menuItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'dashboard.html')) {
            item.classList.add('active');
            console.log('Active menu:', href);
        }
    });
}

/**
 * Initialize button animations and click handlers
 */
function initializeButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove ripple if exists
            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) {
                existingRipple.remove();
            }
            
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
        });
        
        // Add click feedback
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

/**
 * Add ripple effect CSS
 */
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/**
 * Add smooth scroll behavior
 */
document.documentElement.style.scrollBehavior = 'smooth';