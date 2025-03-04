"use client";

const ContactForm = ({ handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    className="mt-8 space-y-4 w-full sm:items-center sm:justify-center sm:px-[10%] md:px-[20%] lg:px-[35%]"
  >
    <div>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000]"
        placeholder="Your Name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000]"
        placeholder="Your Email"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Message</label>
      <textarea
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0000] focus:border-[#FF0000]"
        rows="4"
        placeholder="Your Message"
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#FF0000] hover:bg-[#e60000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0000]"
      >
        Submit
      </button>
    </div>
  </form>
);

export default ContactForm;
