import { use } from "react"; // Import `use()` from React
import { BlogData } from "@/src/app/[slug]/data/data";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/seo-glossary/singlepost.module.scss";
import Image from "next/image";

export async function generateMetadata({ params  }) {
  const blog = BlogData.find((post) => post.slug === params.slug);


  if (!blog) {
    return {
      title: "Post Not Found",
      description: "This post does not exist.",
    };
  }

  return {
    title: blog.tit,
    description: blog.desc,
    openGraph: {
      title: blog.tit,
      description: blog.desc,
      url: blog.slug,
      siteName: "Inifniti Digital",
      locale: "en_US",
      type: "website",
      images: "https://www.infinitidigital.us/infinitidigital.png",
    },
    alternates: { canonical: blog.slug },
  };
}


const Page = ({ params }) => {
  const { slug } = params; 
  const blog = BlogData.find((post) => post.slug === slug);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  
  return (
    <>
      <section className={styles.singlePost}>
        <Container>
          <Row>
            <Col md={12}>
              <h1>{blog.title}</h1>
              <div className={styles.bannerImg}>
                <Image src={blog.img} alt={blog.title} fill />
              </div>
              <div className={styles.picPara}>{blog.picpara}</div>
              <div className={styles.mainSection}>{blog.maintxt}</div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Page;
