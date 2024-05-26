const Accordian = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1. What is your return policy?
        </div>
        <div className="collapse-content">
          <p className="text-justify">We offer a 30-day return policy on all our shoes. If you're not satisfied with your purchase, you can return the shoes within 30 days of receiving them for a full refund or exchange. The shoes must be in their original condition and packaging. To initiate a return, please contact our customer service team with your order details.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        2. How do I determine my shoe size?
        </div>
        <div className="collapse-content">
          <p className="text-justify">To determine your shoe size, please refer to our detailed size guide available on each product page. We recommend measuring your foot and comparing the measurements with our size chart to find the best fit. If you’re between sizes, it’s usually best to go up one size for comfort.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        3. What payment methods do you accept?
        </div>
        <div className="collapse-content">
          <p className="text-justify">We accept a variety of payment methods to ensure your convenience. These include major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and other popular payment options. All transactions are securely processed to protect your information.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        4. How long does shipping take?
        </div>
        <div className="collapse-content">
          <p className="text-justify">Shipping times vary depending on your location and the shipping method you choose at checkout. Typically, standard shipping within the continental United States takes 5-7 business days. Expedited options are available for faster delivery. International shipping times can vary based on the destination. Please refer to our shipping information page for more details.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
