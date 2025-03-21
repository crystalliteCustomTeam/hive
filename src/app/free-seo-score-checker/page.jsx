import Banner from '@/src/app/free-seo-score-checker/banner'
import { BannerData,CallActionData } from '@/src/app/free-seo-score-checker/data/data'
import CtaForm from "@/src/app/home/ctaform";


const Page = () => {
    return (
        <>
            <Banner data={BannerData} />
            <CtaForm data={CallActionData} />
          
        </>
    )
}

export default Page