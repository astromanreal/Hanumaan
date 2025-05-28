
import { PageHeader } from '@/components/ui/page-header';
import { DevotionalCard } from '@/components/ui/devotional-card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Instagram, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
// Removed Metadata import

const contactMethods = [
  {
    type: 'Direct Contact',
    icon: <Mail className="h-8 w-8 text-accent" />,
    title: 'Email Us',
    value: 'astroman6569@gmail.com',
    href: 'mailto:astroman6569@gmail.com',
    actionText: 'Send Email',
    description: 'For inquiries, support, or feedback, drop us an email.',
  },
  {
    type: 'Direct Contact',
    icon: <Phone className="h-8 w-8 text-accent" />,
    title: 'Call Us',
    value: '+91 8102116569',
    href: 'tel:+918102116569',
    actionText: 'Call Now',
    description: 'Speak to us directly for immediate assistance during business hours.',
  },
];

const socialLinks = [
  {
    platform: 'Twitter / X',
    icon: <Twitter className="h-7 w-7 text-accent" />,
    username: '@Sathyamsarthak',
    href: 'https://twitter.com/Sathyamsarthak',
    description: 'Follow our latest updates and join the conversation on X.',
    actionText: 'Follow on X',
  },
  {
    platform: 'Instagram',
    icon: <Instagram className="h-7 w-7 text-accent" />,
    username: '@srishikharji',
    href: 'https://instagram.com/srishikharji',
    description: 'See inspiring visuals and stories on our Instagram profile.',
    actionText: 'Follow on Instagram',
  },
  {
    platform: 'GitHub',
    icon: <Github className="h-7 w-7 text-accent" />,
    username: 'astromanreal',
    href: 'https://github.com/astromanreal',
    description: 'Explore our open-source projects and contributions on GitHub.',
    actionText: 'View on GitHub',
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get in Touch"
        description="We'd love to hear from you. Whether you have a question, feedback, or just want to connect, feel free to reach out through any of the channels below."
      />

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-secondary-foreground mb-10">Direct Contact</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method) => (
            <DevotionalCard
              key={method.title}
              title={method.title}
              className="bg-card shadow-xl border border-border/70 group"
              contentClassName="flex-grow"
              headerClassName="pb-3"
              titleClassName="text-xl"
              content={
                <div className="space-y-3">
                  <div className="flex items-center mb-3 text-primary">
                    {method.icon}
                  </div>
                  <p className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">{method.value}</p>
                  <p className="text-foreground/80 text-sm min-h-[40px]">{method.description}</p>
                </div>
              }
              actions={
                <Button asChild variant="default" size="sm" className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent transition-colors duration-300">
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.actionText}
                  </Link>
                </Button>
              }
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center text-secondary-foreground mb-10">Connect Online</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialLinks.map((social) => (
            <DevotionalCard
              key={social.platform}
              title={social.platform}
              className="bg-card shadow-xl border border-border/70 group"
              contentClassName="flex-grow"
              headerClassName="pb-3"
              titleClassName="text-xl"
              content={
                <div className="space-y-3">
                  <div className="flex items-center mb-3 text-primary">
                    {social.icon}
                  </div>
                  <p className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">{social.username}</p>
                  <p className="text-foreground/80 text-sm min-h-[60px]">{social.description}</p>
                </div>
              }
              actions={
                <Button asChild variant="outline" size="sm" className="w-full mt-auto border-primary text-primary hover:bg-primary/10 hover:text-primary group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-300">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.actionText}
                  </Link>
                </Button>
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}
