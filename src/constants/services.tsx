import {
  MonitorIcon,
  PaintbrushVertical,
  SmartphoneIcon,
  WrenchIcon,
} from 'lucide-react'

export const services = {
  webDevelopement: {
    name: 'Web Development',
    description:
      'We create fast, secure, and scalable web applications—from customer portals and booking systems to ERP dashboards and business automation tools.',
    icon: <MonitorIcon />,
  },
  uiuxDesign: {
    name: 'UI/UX Design',
    description:

      'Great design is more than aesthetics. We craft intuitive, user-centered interfaces that enhance engagement, boost conversions, and deliver meaningful experiences.',
    icon: <PaintbrushVertical />,
  },

  mobileApplicationDevelopement: {
    name: 'Mobile Application Developement',
    description:
      'Your customers live on their phones—and your business should too. We build custom mobile apps that allow users to manage profiles, track orders, access services, and engage with your brand anytime, anywhere.',
    icon: <SmartphoneIcon />,
  },

  maintenanceSupport: {
    name: 'Maintenance & Support',
    description:
      'We stay with you long after launch. Our support team ensures continuous updates, smooth performance, top-tier security, and long-term product stability.',
    icon: <WrenchIcon />,
  },
}
