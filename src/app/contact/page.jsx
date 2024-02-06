import HeadTitle from "@/components/HeadTitle";
import Address from "@/components/connect/Address";
import ContactForm from "@/components/connect/ContactForm";

export const metadata = {
  title: "PortFolio | Contact Me",
  description: "GET IN TOUCH",
};

const Contact = () => {
  return (
    <div className="grid w-full h-full px-3 py-6 mx-auto sm:py-8 lg:py-20 max-w-7xl sm:px-4">
      <HeadTitle title="Contact Me" text="connect" />
      <p className="pt-4 text-xl text-center sm:text-3xl">
        Love to hear from you, Get in touch
      </p>
      <div className="grid py-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-16 gap-y-10">
        <div className="w-full col-span-1 lg:col-span-2">
          <Address />
        </div>
        <div className="w-full sm:col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
