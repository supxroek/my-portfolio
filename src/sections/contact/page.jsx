"use client";

import SectionTitle from "../../components/animations/SectionTitle";
import ContactForm from "../../components/animations/ContactForm";

function page() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const message = form.elements[2].value;

    const mailtoLink = `mailto:suparoek.sm@gmail.com?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    form.reset();
  };

  return (
    <section className="grid h-screen">
      <div>
        <SectionTitle title="CONTACT" subtitle="Contact Me" />
        <h1 className="font-bold text-sm sm:text-xl mt-6">
          I am open to new opportunities and collaborations. Feel free to
          contact me.
        </h1>
        <ContactForm handleSubmit={handleSubmit} />
      </div>
    </section>
  );
}

export default page;
