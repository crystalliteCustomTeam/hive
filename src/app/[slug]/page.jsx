import { BlogData, PostData } from "@/src/app/[slug]/data/data";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/seo-glossary/singlepost.module.scss";
import Image from "next/image";
import TableOfContents from "./components/tablecontent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog =
    BlogData.find((post) => post.slug === slug) ||
    PostData.find((post) => post.slug === slug);

  if (!blog) {
    return {
      title: "Post Not Found",
      description: "This post does not exist.",
    };
  }

  return {
    title: blog.tit,
    description: blog.description,
    openGraph: {
      title: blog.tit,
      description: blog.description,
      url: blog.slug,
      siteName: "Inifniti Digital",
      locale: "en_US",
      type: "website",
      images: "https://www.infinitidigital.us/infinitidigital.png",
    },
    alternates: { canonical: blog.slug },
  };
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const blog =
    BlogData.find((post) => post.slug === slug) ||
    PostData.find((post) => post.slug === slug);

  if (!blog) {
    return;
    <section className={styles.singlePost}>
      <Container>
        <Row>
          <Col md={12}>
            <h1>Blog Not Found</h1>
          </Col>
        </Row>
      </Container>
    </section>;
  }

  return (
    <>
      {blog.type === "blogs" ? (
        <section className={styles.singleBlog}>
          <Container>
            <Row>
              <Col md={12}>
                <div className={styles.flexCategory}>
                  <div>{blog.category}</div>
                  <div>{blog.date}</div>
                </div>
                <h1>{blog.title}</h1>
              </Col>
              <Col md={7} lg={7} xl={8} className="order-2 order-md-1">
                <div className={styles.mainSection}>{blog.maintxt}</div>
              </Col>
              <Col md={5} lg={5} xl={4} className="order-1 order-md-2">
                <div className={styles.blogsideBar}>
                  <TableOfContents tableContent={blog.tableContent} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
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
      )}
    </>
  );
};

export default Page;
