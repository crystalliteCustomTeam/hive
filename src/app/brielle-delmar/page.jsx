import Banner from "@/src/app/brielle-delmar/banner";
import AuthorPost from "@/src/app/brielle-delmar/authorpost";
import { BlgosData } from "@/src/app/blogs/data/data";
import CtaForm from "@/src/app/home/ctaform";
import { CallActionData } from "@/src/app/home/data/data";

const Page = () => {
  return (
    <>
      <Banner />
      <AuthorPost data={BlgosData} blogPage={false} />
      <CtaForm data={CallActionData} />
    </>
  );
};

export default Page;
