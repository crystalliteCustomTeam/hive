//Banner
import styles from "@/styles/single-blog/banner.module.scss";
import BannerIMG from "media/blogs/posterImg.webp";

export const BannerData = {
  title: (
    <>
      Free SEO Score Checker
      <br />
      How Strong Is Your Website’s SEO? <br />
      Take the Quiz!
    </>
  ),
  img: BannerIMG.src,
  desc: (
    <>
      <p>
        Google either loves your site or ignores it. Answer these 10 questions
        to see which one!
      </p>
    </>
  ),
  desc1: (
    <>
      <p>
        Your website might be your pride and joy, but if it’s buried on page 10
        of Google, it’s as good as worthless. Let’s be real, no one’s clicking
        that far and you did not spend all that time and money building a
        website that’s just not ranking and attracting any users while your
        competitors are making money.
      </p>
      <p>
        People are searching for what you offer right now, but instead of
        finding you, they’re clicking on the businesses that actually rank on
        Page 1. That’s lost traffic, lost leads, and lost money, every single
        day. Harsh? Yeah. But the truth hurts.
      </p>
      <p>
        And, if you still think SEO isn’t that important? Here’s what you’re up
        against:
      </p>
      <ul>
        <li>91% of websites get ZERO traffic from Google.</li>
        <li>
          75% of people never scroll past the first page of search results.
        </li>
        <li>Organic traffic converts 2.5x better than paid ads.</li>
      </ul>
      <p>
        Without SEO, your website is just a pretty brochure buried under
        millions of competitors. If you’re not ranking, you’re handing money to
        them on a silver platter.
      </p>
      <h2>SEO Score Meaning</h2>
      <p>
        Your website’s SEO score reflects how well it is optimized for search
        engines. Here’s what different score ranges indicate:
      </p>
      <p className={styles.strongPoints}>90-100: Champion!</p>
      <p>
        Your site is well-optimized, it only requires minor fixes for even
        better performance.
      </p>
      <p className={styles.strongPoints}>60-89: Almost There!</p>
      <p>
        Your SEO is decent but needs improvements in site speed, backlinks, and
        on-page SEO to reach its full potential.
      </p>
      <p className={styles.strongPoints}>30-59: Needs Work!</p>
      <p>
        There are several SEO gaps that require optimization to improve rankings
        and visibility.
      </p>
      <p className={styles.strongPoints}>0-29: Emergency!</p>
      <p>
        Your site has major SEO issues that need immediate attention to prevent
        traffic drops.
      </p>
      <h2>Reality Check</h2>
      <p>
        So, you’ve seen your SEO score… and now what? Are you still wondering
        what is a good seo score? Or are you going to take action, or just
        pretend it’s not a problem? Let’s be real, every single day you ignore
        this, your competition is taking what should be yours. They’re ranking
        higher, getting your traffic, closing your leads, and making the money
        you’re leaving on the table.
      </p>
      <p>
      Google doesn’t care how great your business is. If your site isn’t optimized, you’re invisible. And if you’re invisible,<strong> you’re losing.</strong>
      </p>
      <p>
      We just sent your SEO score to your email. But this isn’t just about numbers, it’s about your business growth. What’s holding you back? What’s your next move? Let’s talk. 
      </p>
      <p>Reply to our email and tell us what’s on your mind. We’re here to help you fix what’s broken, before it’s too late.</p>
    </>
  ),
};


// Call to Action

export const CallActionData = {
  subtitle: "Contact Us",
  title: "Let’s Turn Your Vision into Reality ",
  desc: "Ready to take the next step toward digital growth? Whether you have questions or a project idea, we’re here to help you succeed. Let’s collaborate to create something extraordinary for your business."
}