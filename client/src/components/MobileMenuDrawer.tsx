import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileMenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Treatments', href: '/treatments' },
    { label: 'About', href: '/about' },
    { label: 'Success Stories', href: '/testimonials' },
    { label: 'Videos', href: '/video-testimonials' },
  ];

  const learnSubmenu = [
    { label: 'Ayurveda Cures', href: '/ayurveda-cures' },
    { label: 'Ayurveda Basics', href: '/ayurveda-basics' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Email Automation', href: '/email-automation' },
  ];

  return (
    <>
      {/* Hamburger Button - Visible only on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 md:hidden overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-white shadow-lg max-h-screen overflow-y-auto">
              {/* Close Button */}
              <div className="flex justify-between items-center p-4 border-b border-border">
                <span className="font-semibold text-foreground">Menu</span>
                <button
                  onClick={toggleMenu}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/50"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Learn Submenu */}
                <div className="border-b border-border/50">
                  <button
                    onClick={() => toggleSubmenu('learn')}
                    className="w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    Learn
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedMenu === 'learn' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedMenu === 'learn' && (
                    <div className="bg-primary/5">
                      {learnSubmenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-8 py-2 text-xs font-medium text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Section */}
                <div className="px-4 py-4 bg-primary/5 border-t border-border">
                  <p className="text-xs text-foreground/60 mb-3">Contact Us</p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919281332544"
                      className="block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      +91 92813 32544
                    </a>
                    <a
                      href="mailto:contact@drkalyan.com"
                      className="block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      contact@drkalyan.com
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
