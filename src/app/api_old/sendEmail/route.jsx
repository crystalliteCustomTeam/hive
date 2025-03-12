import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, totalPoints } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "azizurrehmankhan321@gmail.com", // Replace with your G Suite email
        pass: "zgzd bvpv oysr ojhk", // Use an App Password
      },
    });

    const mailOptions = {
      from: "your-email@gmail.com",
      to: `${email}`, // Replace with your recipient email
      subject: "New Score Submission",
      text: `Name: ${name}\nEmail: ${email}\nTotal Score: ${totalPoints}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
