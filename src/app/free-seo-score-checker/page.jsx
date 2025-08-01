import Banner from '@/src/app/free-seo-score-checker/banner'
import { BannerData, CallActionData } from '@/src/app/free-seo-score-checker/data/data'
import CtaForm from "@/src/app/home/ctaform";


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <CtaForm data={CallActionData} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebSite",
                                "name": "Infiniti Digital Marketing Agency",
                                "url": "https://www.infinitidigital.us",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": "https://www.infinitidigital.us/?s={search_term_string}",
                                    "query-input": "required name=search_term_string"
                                }
                            },
                            {
                                "@type": "WebPage",
                                "name": "Free SEO Score Checker – How Strong Is Your Website’s SEO?",
                                "url": "https://www.infinitidigital.us/free-seo-score-checker",
                                "description": "Take our free SEO score quiz to find out how optimized your website is. Discover issues, get improvement suggestions, and boost your online visibility.",
                                "speakable": {
                                    "@type": "SpeakableSpecification",
                                    "xpath": [
                                        "/html/head/title",
                                        "/html/body/h1",
                                        "/html/body/p[1]"
                                    ]
                                },
                                "mainEntity": {
                                    "@id": "https://www.infinitidigital.us/free-seo-score-checker#service"
                                }
                            },
                            {
                                "@type": "Service",
                                "@id": "https://www.infinitidigital.us/free-seo-score-checker#service",
                                "name": "Free SEO Score Checker",
                                "description": "An interactive tool to analyze your website’s SEO strength based on 10 key questions. Instantly discover performance issues and get improvement tips.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Infiniti Digital Marketing Agency",
                                    "url": "https://www.infinitidigital.us",
                                    "logo": "https://www.infinitidigital.us/path-to-logo.png"
                                },
                                "serviceType": "SEO Analysis Tool"
                            },
                            {
                                "@type": "BlogPosting",
                                "headline": "Free SEO Score Checker – How Strong Is Your Website’s SEO?",
                                "image": "https://www.infinitidigital.us/blogs/question.webp",
                                "description": "Use our free SEO quiz to find out where your website stands. Get real-time insights and personalized improvement suggestions.",
                                "author": {
                                    "@type": "Organization",
                                    "name": "Infiniti Digital Marketing Agency",
                                    "url": "https://www.infinitidigital.us/lily-chen"
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Infiniti Digital Marketing Agency",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.infinitidigital.us/path-to-logo.png"
                                    }
                                },
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.infinitidigital.us/free-seo-score-checker"
                                },
                                "datePublished": "2025-07-31T08:00:00+08:00"
                            }
                        ]
                    }),
                }}
            />

        </>
    )
}

export default Page