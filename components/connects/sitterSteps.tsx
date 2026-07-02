import { User, Clock, LayoutDashboard, Briefcase } from "lucide-react";

const steps = [
  {
    title: "Sign up as a Sitter",
    desc: "Fill out a short form, upload your resume & references, photo ID, proof of vehicle insurance, CPR & First Aid Certification (if available), and pay a one-time fee.",
    icon: User,
    bg: "bg-primary/20",
    text: "text-orange-500",
    iconBg: "bg-orange-400",
    shapeBg: "bg-primary/30",
  },
  {
    title: "Application Review & Interview (24–48 hrs)",
    desc: "We'll review your application and invite you to a short face-to-face interview.",
    icon: Clock,
    bg: "bg-[#FF895C]/20",
    text: "text-orange-500",
    iconBg: "bg-orange-400",
    shapeBg: "bg-[#FF895C]/30",
  },
  {
    title: "Access Your Sitter Dashboard",
    desc: "Once approved, you can log in to explore jobs, update your profile, and more.",
    icon: LayoutDashboard,
    bg: "bg-[#82D1C0]/20",
    text: "text-teal-500",
    iconBg: "bg-teal-400",
    shapeBg: "bg-[#82D1C0]/30",
  },
  {
    title: "Select Jobs that fit your schedule",
    desc: "Pick babysitting jobs from the job pool that match your schedule. Jobs are not assigned automatically.",
    icon: Briefcase,
    bg: "bg-primary/20",
    text: "text-orange-500",
    iconBg: "bg-orange-400",
    shapeBg: "bg-primary/30",
  },
];

export default function SitterSteps() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold">
          For <span className="text-teal-400">Sitters</span>
        </h2>

        <p className="text-[#999999] mt-3 max-w-xl mx-auto text-lg md:text-lg">
          Turn your passion for childcare into a rewarding <br /> career with flexible hours
        </p>

        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 place-items-center">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className={`relative w-full max-w-sm md:max-w-md ${
                  index === 1 || index === 3 ? "lg:mt-16" : ""
                }`}
              >
                {/* Floating Icon */}
                <div className="absolute left-1/2 -top-7 -translate-x-1/2 z-20">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${step.iconBg} flex items-center justify-center shadow-md`}
                  >
                    <Icon
                      size={24}
                      className="text-white"
                      stroke="none"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`${step.bg} w-full rounded-2xl pt-12 px-6 pb-6
                  min-h-[190px] md:min-h-[210px]
                  relative overflow-hidden flex flex-col justify-start 
                  transition-all duration-500 hover:-translate-y-3 hover:shadow-xl`}
                >
                  {/* Decorative Shapes */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 ${step.shapeBg} rounded-full translate-x-6 -translate-y-6`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-14 h-14 md:w-16 md:h-16 ${step.shapeBg} rounded-full -translate-x-4 translate-y-4`}
                  />

                  {/* Title */}
                  <h3 className={`font-semibold text-sm md:text-base ${step.text}`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-[#999999] mt-3 leading-relaxed">
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