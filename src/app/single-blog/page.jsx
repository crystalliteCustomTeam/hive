import Banner from '@/src/app/single-blog/banner'
import { BannerData,CallActionData } from '@/src/app/single-blog/data/data'
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