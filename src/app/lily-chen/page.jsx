import Banner from "@/src/app/lily-chen/banner";
import AuthorPost from "@/src/app/brielle-delmar/authorpost";
import { BlgosData } from "@/src/app/blogs/data/data";
import CtaForm from "@/src/app/home/ctaform";
import { CallActionData } from "@/src/app/home/data/data";
import { AuthorData } from "@/src/app/brielle-delmar/data/data";

const Page = ({ params }) => {
  const { authorpost } = params;
  return (
    <>
      <Banner  slug={authorpost} />
      <AuthorPost data={BlgosData}   title="SEO Resources Archive" desc="Explore a wealth of SEO knowledge, expert strategies, actionable tips, and in-depth guides from an SEO Specialist at Infiniti Digital, Brielle Delmar." blogPage={false} />
      <CtaForm data={CallActionData} />
    </>
  );
};

export default Page;
