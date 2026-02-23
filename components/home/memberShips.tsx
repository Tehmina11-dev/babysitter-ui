import { PricingCard } from "../ui/PricingCard"; // Adjust the path based on your folder structure

export default function MembershipSection() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Parent <span className="text-[#FFB347]">Memberships</span></h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">We offer several plans to get started. Choose the one that fits your family best.</p>
        
        <div className="bg-[#E9F5F2] text-[#4DB6AC] inline-block px-12 py-4 rounded-2xl font-medium mb-16">
          Safe & reliable payments using Stripe
        </div>
  
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <PricingCard 
            title="One Time Booking" price="10" subPrice="/each job post"
            desc="Perfect for out of town visitors or occasional family support"
            features={["Access to all Sitter Safely sitters", "Single visit job post", "Upgrade options available"]}
          />
          <PricingCard 
            title="Monthly" price="30" subPrice="/month" isPopular
            desc="Best for local families who need ongoing support"
            features={["1-month recurring membership", "Full access to website", "Unlimited babysitting requests"]}
          />
          <PricingCard 
            title="6 Months" price="25" subPrice="/6 Months, billed bi-annually"
            desc="Save when you sign up for longer terms!"
            features={["6-month membership", "Unlimited babysitting requests", "One month free!"]}
          />
        </div>
      </section>
    );
  }