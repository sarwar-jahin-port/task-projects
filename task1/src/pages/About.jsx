import ceoImg from "../assets/ceo.png";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={ceoImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to JSHOES Industries Ltd</h1>
          <article className="py-6">
            <p className="text-justify">Since our founding in 1992, our mission has been simple: to provide our customers with the highest quality, most stylish casual shoes available. As the CEO of [Your Company Name], I am honored to share the journey of our company, our goals, and our vision for the future.</p>
            <br />
            <p className="font-semibold">Our Journey:</p>
            <br />
            <p className="text-justify">Our story began in a small workshop where I, along with a handful of passionate shoemakers, set out to create shoes that would blend comfort, durability, and contemporary style. We started with a clear vision – to redefine the casual shoe market. Over the years, we have grown from a modest operation to an internationally recognized brand, all while maintaining our commitment to quality craftsmanship and innovative design.</p>
            <br />
            <p className="font-semibold">Company Goals:</p>
            <br />
            <p className="text-justify">From day one, our goal has been to exceed our customers' expectations. We believe in continuous improvement and strive to innovate with each collection we release. Our dedication to using premium materials and sustainable practices ensures that every pair of shoes we produce is not only stylish but also environmentally responsible.</p>
            <br />
            <p className="font-semibold">Our Vision:</p>
            <br />
            <p className="text-justify">Looking ahead, our vision is to continue leading the way in the casual footwear industry. We aim to expand our product range, incorporating the latest fashion trends without compromising on comfort. We are committed to enhancing our customer experience through cutting-edge technology and personalized service.</p>
            <br />
            <p className="text-justify">At JSHOES Industries Ltd, we are not just selling shoes; we are crafting experiences. Each pair is a testament to our passion for design and our unwavering commitment to our customers. Thank you for being a part of our journey. We look forward to walking many more miles together.</p>
            <br />
            <p>Warm regards,</p>
            <br />
            <p>MD SARWAR JAHIN</p>
            <br />
            <p>CEO, JSHOES Industries Ltd.</p>
          </article>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
