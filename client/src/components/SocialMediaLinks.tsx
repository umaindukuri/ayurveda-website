import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

interface SocialMediaLinksProps {
  variant?: 'footer' | 'inline';
  size?: 'sm' | 'md' | 'lg';
}

export function SocialMediaLinks({ variant = 'footer', size = 'md' }: SocialMediaLinksProps) {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/drkalyanayu', // Update with actual URL
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/drkalyanayu', // Update with actual URL
      color: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/drkalyanayu', // Update with actual URL
      color: 'hover:text-blue-700'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@drkalyanayu', // Update with actual URL
      color: 'hover:text-red-600'
    },
    {
      name: 'WhatsApp Channel',
      icon: MessageCircle,
      url: 'https://whatsapp.com/channel/0029VaAGMV1LSkq0agsqa91d', // Update with actual WhatsApp channel URL
      color: 'hover:text-green-600'
    }
  ];

  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const containerClasses = variant === 'footer' 
    ? 'flex gap-4' 
    : 'flex gap-3';

  return (
    <div className={containerClasses}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Follow us on ${social.name}`}
            aria-label={`Follow us on ${social.name}`}
            className={`${social.color} transition-colors duration-300 ${
              variant === 'footer' ? 'text-white/70' : 'text-muted-foreground'
            }`}
          >
            <Icon className={sizeClasses[size]} />
          </a>
        );
      })}
    </div>
  );
}
