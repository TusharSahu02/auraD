import nodemailer from "nodemailer";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { bugDescription } = req.body;

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_TO_EMAIL,
      subject: "Bug Report",
      text: bugDescription,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
