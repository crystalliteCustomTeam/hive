import { BlogData, PostData } from "@/src/app/[slug]/data/data";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/seo-glossary/singlepost.module.scss";


import dynamic from "next/dynamic";
const ClientBlog = dynamic(() => import("@/src/app/[slug]/components/clientblog"));

export async function generateStaticParams() {
  const allPosts = [...BlogData, ...PostData];
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
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
      siteName: "Infiniti Digital",
      locale: "en_US",
      type: "website",
      images: "https://www.infinitidigital.us/infinitidigital.png",
    },
    alternates: { canonical: blog.slug },
  };
}

export default async function Page({ params }) {
  const { slug } = params;
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

  return <ClientBlog blog={blog} />;
}
