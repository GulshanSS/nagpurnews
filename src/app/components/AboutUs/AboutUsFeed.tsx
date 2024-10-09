export default function AboutUsFeed() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">About Us</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Our Story
        </h2>
        <p className="mb-4 text-lg">
          Founded in 2019, Nagpur News is a leading digital news platform
          focused on delivering real-time updates on events happening in and
          around Nagpur. Whether it’s local politics, social issues, cultural
          events, or viral stories, our dedicated team works around the clock to
          keep our readers informed.
        </p>
        <p className="mb-4 text-lg">
          Our commitment to high journalistic standards ensures that we provide
          accurate, unbiased news. We aim to offer a platform that is both
          informative and engaging for our community.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Our Vision
        </h2>
        <p className="mb-4 text-lg">
          At Nagpur News, we aim to become the most trusted and widely-read news
          source in the region. Our mission is to ensure that our readers stay
          informed with the latest news and developments that matter most to the
          people of Nagpur.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">The Team</h2>
        <p className="mb-4 text-lg">
          The team behind Nagpur News consists of experienced journalists,
          reporters, and technical staff who are passionate about delivering the
          highest quality news content. Our team is led by Varun Jangade, a
          seasoned entrepreneur and media professional.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Revenue Model
        </h2>
        <p className="mb-4 text-lg">
          Nagpur News is a free-to-access platform supported by advertising
          revenue, primarily through Google Ads. This model allows us to offer
          content without charging a subscription fee while keeping the user
          experience seamless. By carefully adhering to Google AdSense policies,
          we ensure that ads displayed on our platform are safe and relevant to
          our audience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Community Engagement
        </h2>
        <p className="mb-4 text-lg">
          Our readers are the heart of our platform. We value your feedback, and
          your participation in discussions helps us refine our content. Whether
          it’s sharing a local story tip or commenting on our articles, we
          encourage open communication with our audience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Why Choose Nagpur News?
        </h2>
        <ul className="list-disc pl-6 mb-4 text-lg space-y-2">
          <li>
            <strong>Accuracy:</strong> We verify all our stories to ensure they
            are factual and unbiased.
          </li>
          <li>
            <strong>Timeliness:</strong> Our team works around the clock to
            bring you real-time updates.
          </li>
          <li>
            <strong>Local Focus:</strong> We focus on what matters most to
            Nagpur and its residents.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Contact Us
        </h2>
        <p className="mb-4 text-lg">
          For general inquiries, advertising opportunities, or collaborations,
          feel free to reach out to us:
        </p>
        <address className="not-italic text-lg">
          <p className="mb-1">Northwind Media Private Limited</p>
          <p className="mb-1">Address: Nagpur, Maharashtra, 440015</p>
          <p>
            Email:{" "}
            <a
              href="mailto:northwindmedia01@gmail.com"
              className="text-blue-600 underline"
            >
              northwindmedia01@gmail.com
            </a>
          </p>
        </address>
      </div>
    </>
  );
}
