
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "SEO Glossary: 400+  Terms & Definitions You Need to Know",
    description: "Check out this HUGE list of the most important SEO terms, jargon, abbreviations to help you better understand SEO.",
    //===== OG Tags =====
    openGraph: {
        title: "SEO Glossary: 400+  Terms & Definitions You Need to Know",
        description: "Check out this HUGE list of the most important SEO terms, jargon, abbreviations to help you better understand SEO.",
        url: '/seo-glossary',
        siteName: "Inifniti Digital",
        locale: 'en_US',
        type: 'website',
        images: "https://www.infinitidigital.us/infinitidigital.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/seo-glossary' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    },

}


export default function RootLayout({ children }) {
    return (children)
}
