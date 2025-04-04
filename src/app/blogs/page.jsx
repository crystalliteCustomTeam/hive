import Banner from "@/src/app/components/services/banner";
import { BannerData, BlgosData, LeadData } from "@/src/app/blogs/data/data";
import CtaForm from "@/src/app/home/ctaform";
import Blogs from "@/src/app/home/blogs";
import BlogCase from "@/src/app/blogs/blogcase";
import { CallActionData } from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Blogs data={BlgosData} blogPage={true} />
      <Blogs data={LeadData} blogPage={true} />
      <BlogCase />
      <CtaForm data={CallActionData} />
    </>
  );
};

export default Page;
