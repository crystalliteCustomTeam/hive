import Banner from "@/src/app/components/services/banner";
import { BannerData, BlgosData, LeadData } from "@/src/app/blogs/data/data";
import Testimonials from "@/src/app/home/testimonials";
import CtaForm from "@/src/app/home/ctaform";
import FollowUs from "@/src/app/home/followus";
import Blogs from "@/src/app/home/blogs";
import Faqs from "@/src/app/home/faq";
import {
  CallActionData,
} from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Blogs data={BlgosData} blogPage={true} />
      <Blogs data={LeadData} blogPage={true} />
      <CtaForm data={CallActionData} />
    </>
  );
};

export default Page;
