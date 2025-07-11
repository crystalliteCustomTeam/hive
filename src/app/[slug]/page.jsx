import { BlogData, PostData } from "@/src/app/[slug]/data/data";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/seo-glossary/singlepost.module.scss";
import Image from "next/image";
import TableOfContents from "./components/tablecontent";
import Link from "next/link";


export async function generateStaticParams() {
  const allPosts = [...BlogData, ...PostData];

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}



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

  if (!blog || !blog.title || !blog.maintxt) {
    return (
      <section className={styles.singlePost}>
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h1>404 Page Not Found</h1>
              <p>Sorry, the page you are looking for does not exist.</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }


  const authorName = blog.author
    ? blog.author
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    : "Unknown Author";


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
                <div className={styles.authorBox}>
                  <div className={styles.authorIMG}>
                    <Image src={blog.authorPic} alt="Author" fill />
                  </div>
                  <div className={styles.authorContent}>
                    <h4>{authorName}</h4>
                    <ul className={styles.authorList}>
                      <li>{blog.job}</li>
                      <li>Infiniti Digital</li>
                      <li>
                        <Link href={blog.author}>Read Author Bio</Link>
                      </li>
                    </ul>

                  </div>
                </div>
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
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={1420}
                    height={664}
                  />
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
