import bannerImage from "media/organic-shopping-services/aeo-service/bannerImage.webp";
import VideoPoster01 from "media/organic-shopping-services/organic-shopping/videoPoster-01.webp";
import Image1 from "media/organic-shopping-services/organic-shopping/Image1.webp";
import { CheckGreenIcon } from "@/src/app/app-constants";

export const BannerData = {
    title: "Optimize Ecommerce Growth With Google Organic Shopping",
    desc: "Turn Google into your #1 sales channel without paying for Google shopping Ads. Get your products in front of millions with fully optimized organic shopping feeds in combination with search engine optimization.",
    img: bannerImage.src,
};


// States Counter
export const StateCounter = {
    subtitle: "Crafting Impactful Designs",
    title: "Shaping Exceptional Online Experiences",
    desc: "We merge creativity and strategy to deliver innovative website designs that captivate audiences and empower businesses to thrive online.",
    stateItem: [
        {
            numbers: "200+",
            namee: "Websites Designed"
        },
        {
            numbers: "100+",
            namee: "Website Design Experts"
        }, {
            numbers: "3M",
            namee: "Active Website Users"
        }, {
            numbers: "4.9",
            namee: "Rating On Clutch"
        }
    ]
}


export const GeoJourneyData = {
    title: "Stop Paying for Traffic You Can Get for Free",
    desc: "Start growing your organic sales today. Let us show you exactly how much free revenue you’re missing with a 100% free audit of your current Google organic shopping potential.",
    video: "/organic-shopping-services/organic-shopping/mainVideo-01.mp4",
    BannerPoster: VideoPoster01.src,
};

export const Content1Data = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    desc: (<>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <ul>
            <li><CheckGreenIcon />Lorem ipsum dolor sit amet, consectetur.</li>
            <li><CheckGreenIcon />Ut labore et dolore magna aliqua.</li>
            <li><CheckGreenIcon />Magna aliqua ut enim ad minim.</li>
        </ul>
    </>),
    image: Image1.src,
    txt: "Tell us about your products"
};