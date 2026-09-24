export interface ServiceEntry {
  name: string
  description: string
  image: string
  alt: string
  href: string
}

/**
 * Single source of truth for the service directory, used by the homepage
 * Services section, the /services directory page, and the desktop nav's
 * Services dropdown.
 */
export const SERVICES: ServiceEntry[] = [
  {
    name: 'Corporate Leasing',
    description: 'Grade-A office and commercial space leased directly across Agra and Noida, from term sheet to fit-out.',
    image: 'https://images.unsplash.com/photo-1637393932938-b9c209e67d5c',
    alt: 'Modern glass office building leased through MPD Realteck corporate leasing services',
    href: '/corporate-leasing',
  },
  {
    name: 'Land & Plot Investment',
    description: 'RERA-verified plots and commercial land, currently featured in Agra, Noida, and Vrindavan, vetted before they reach you.',
    image: 'https://images.unsplash.com/photo-1515259387710-51e175f9ec6d',
    alt: 'Aerial view of a land plot available for real estate investment',
    href: '/invest',
  },
  {
    name: 'Buy & Sell Property',
    description: 'Direct brokerage for residential, commercial, and industrial property, with clear-title verification on every transaction.',
    image: 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9',
    alt: 'Real estate agent handing over property keys after a sale',
    href: '/buy',
  },
  {
    name: 'MPD Construction',
    description: 'In-house construction and project execution, from groundbreaking to handover, built to RERA compliance standards.',
    image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c',
    alt: 'Active construction site managed by MPD Construction',
    href: '/construction',
  },
  {
    name: 'Interior Designing',
    description: 'Space planning and interior fit-outs for residential and corporate clients, delivered alongside your construction timeline.',
    image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77',
    alt: 'Modern interior design fit-out for a residential space',
    href: '/interior-design',
  },
  {
    name: 'Corporate Real Estate Services',
    description: 'Workplace strategy, relocation, and facility planning for growing businesses across India.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    alt: 'Corporate team in a business meeting discussing workplace real estate strategy',
    href: '/corporate-real-estate',
  },
  {
    name: 'Due Diligence & Investigation',
    description: 'Title search, encumbrance checks, and RERA compliance verification before you commit capital.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    alt: 'Architect and consultant reviewing property blueprints for due diligence',
    href: '/due-diligence',
  },
  {
    name: 'Real Estate Consulting & Advisory',
    description: 'Investment strategy, acquisition planning, and end-to-end advisory across every stage of a deal.',
    image: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca',
    alt: 'Real estate consultant shaking hands with a client after an advisory meeting',
    href: '/consulting',
  },
]

/** Services shown in the nav's Services dropdown/menu: everything except Buy & Sell, which already has its own top-level nav entry. */
export const NAV_SERVICES: ServiceEntry[] = SERVICES.filter((s) => s.href !== '/buy')
