import { User, Clock, LayoutDashboard, Briefcase } from "lucide-react";

const steps = [
  {
    title: "Sign up as a Sitter",
    desc: "Fill out a short form, upload your resume & references, photo ID, proof of vehicle insurance, CPR & First Aid Certification (if available), and pay a one-time fee.",
    icon: User,
    bg: "bg-[#F4DFC2]",
    text: "text-orange-500",
    iconBg: "bg-orange-400",
  },
  {
    title: "Application Review & Interview (24–48 hrs)",
    desc: "We'll review your application and invite you to a short face-to-face interview.",
    icon: Clock,
    bg: "bg-[#F3CDBA]",
    text: "text-orange-500",
    iconBg: "bg-orange-400",
  },
  {
    title: "Access Your Sitter Dashboard",
    desc: "Once approved, you can log in to explore jobs, update your profile, and more.",
    icon: LayoutDashboard,
    bg: "bg-[#D9DDE6]",
    text: "text-teal-500",
    iconBg: "bg-teal-400",
  },
  {
    title: "Select Jobs that fit your schedule",
    desc: "Pick babysitting jobs from the job pool that match your schedule. Jobs are not assigned automatically.",
    icon: Briefcase,
    bg: "bg-[#F4DFC2]",
    text: "text-orange-500",
    iconBg: "bg-orange-400",
  },
];

export default function SitterSteps() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          For <span className="text-teal-400">Sitters</span>
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Turn your passion for childcare into a rewarding career with flexible hours
        </p>

        {/* Cards Wrapper */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className={`relative h-full ${
                  index === 1 || index === 3 ? "lg:mt-14" : ""
                }`}
              >
                {/* Floating Icon */}
                <div className="absolute left-1/2 -top-7 -translate-x-1/2 z-20">
                  <div
                    className={`w-14 h-14 rounded-full ${step.iconBg} flex items-center justify-center shadow-md`}
                  >
                     <Icon size={28} className="text-white" stroke="none" fill="currentColor" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`${step.bg} rounded-2xl pt-12 p-6 h-[200px] w-[270px] relative overflow-hidden flex flex-col justify-start`}
                >
                  {/* Decorative Shapes */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full translate-x-6 -translate-y-6" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/30 rounded-full -translate-x-4 translate-y-4" />

                  <h3 className={`font-semibold text-base ${step.text}`}>
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
