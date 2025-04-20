
import Header from '../components/Header';

const Pricing = () => (
  <div>
    <Header />
    <main className="bg-white text-black py-12 px-4">
      <h2 className="text-3xl text-center font-bold mb-8">Pricing</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">One-on-One Mentoring</h3>
          <p>$100 per session</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Group Mentoring</h3>
          <p>$50 per person</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Technology Consultancy</h3>
          <p>Starting at $500 for a consultation</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Software Development</h3>
          <p>Custom pricing based on project scope</p>
        </div>
      </div>
    </main>
  </div>
);

export default Pricing;
