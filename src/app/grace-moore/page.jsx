import Banner from "@/src/app/grace-moore/banner";
import AuthorPost from "@/src/app/brielle-delmar/authorpost";
import { BlgosData } from "@/src/app/blogs/data/data";
import CtaForm from "@/src/app/home/ctaform";
import { CallActionData } from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <Banner />
      <AuthorPost data={BlgosData} title="SEO Resources Archive" desc="Explore a wealth of SEO knowledge, expert strategies, actionable tips, and in-depth guides from an SEO Specialist at Infiniti Digital, Grace Moore." blogPage={false} />
      <CtaForm data={CallActionData} />
    </>
  );
};

export default Page;
