import { siteConfig } from '../data/site';

export const seoDefaults = {
  ogImage: '/images/hero-interior.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  locale: 'en_AE',
} as const;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).href;
}

export function buildOrganizationSchema() {
  return {
    '@type': 'LocalBusiness' as const,
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl(seoDefaults.ogImage),
    logo: absoluteUrl('/images/logo.png'),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: siteConfig.address,
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: {
      '@type': 'City' as const,
      name: 'Dubai',
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function buildWebSiteSchema() {
  return {
    '@type': 'WebSite' as const,
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-AE',
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList' as const,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildPageGraph(breadcrumbs?: BreadcrumbItem[]) {
  const graph: Record<string, unknown>[] = [buildOrganizationSchema(), buildWebSiteSchema()];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push(buildBreadcrumbSchema(breadcrumbs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
