import Banner from "@/src/app/authorpage/banner";
import AuthorPost from "@/src/app/authorpage/authorpost";
import { BlgosData } from "@/src/app/blogs/data/data";

const Page = () => {
  return (
   <>
   <Banner />
   <AuthorPost data={BlgosData} blogPage={false}/>
   </>
  )
}

export default Page