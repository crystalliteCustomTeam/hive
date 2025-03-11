import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, totalPoints } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "azizurrehmankhan321@gmail.com", // Replace with your G Suite email
      pass: "zgzdbvpvoysrojhk", // Use an App Password
    },
  });

  const mailOptions = {
    from: email,
    to: `${email}`, // Your G Suite email to receive responses
    subject: "New Quiz Submission",
    text: `Name: ${name}\nEmail: ${email}\nTotal Score: ${totalPoints}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
