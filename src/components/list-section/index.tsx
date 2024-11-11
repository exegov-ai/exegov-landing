import FeatureSvg from '@/constants/svg/features.svg';
import Image from 'next/image';

const services = [
  {
    title: `Business Strategy AI Helper`,
    description: `Our Strategy tools provide
     a comprehensive foundation for making informed business decisions and driving growth.
    The Business Plan feature helps you outline a detailed roadmap, setting a solid foundation for your venture.
    With OKRs, you can define and track measurable goals,
    keeping your team aligned and focused.
    The SWOT Analysis enables you to assess strengths,
    weaknesses, opportunities, and threats, giving a balanced perspective
     on your strategic position.
    The 5 Forces Analysis explores your competitive landscape, highlighting potential risks and advantages.
    Finally, Lean Canvas offers a concise, one-page view of your business model,
     making strategic planning clear and actionable.
      Together, these tools empower you to create and execute a data-driven, well-rounded strategy.`,
  },
  {
    title: `Product Development`,
    description: `Our Product Development
    tools guide you through every stage of
    building and refining your product.
    The Product Roadmap allows you to plan and visualize your
    product’s journey from concept to launch,
    ensuring clear milestones and timelines.
    With the MVP (Minimum Viable Product) feature,
    you can prioritize core functionalities,
    bringing essential features to market quickly and efficiently.
    The Work Breakdown Structure (WBS) tool breaks down tasks into manageable steps,
    keeping your development process organized and on track.
    Product Specification provides detailed documentation of technical requirements,
    ensuring everyone is aligned on expectations.
    Finally, the User Persona tool helps you understand your target audience,
    shaping development to meet real customer needs.
    Together, these tools create a structured approach to successful product development.
`,
  },
  {
    title: `Finance`,
    description: `
    Our Finance tools offer essential insights to manage and optimize your business
     finances effectively.
     The Financial Forecast feature helps you project future revenue
     and expenses, enabling informed decision-making and long-term planning.
     With the Break-Even Analysis, you can identify the point at which your revenue
     covers costs, a critical milestone for profitability. 
     The Budget Plan provides a structured approach to tracking and managing your expenses,
     ensuring financial stability as you grow. 
     Together, these tools support strategic financial planning,
     keeping your business on a path to sustainable success.`,
  },
  {
    title: `Human Resources`,
    description: `
    Our HR tools streamline your people management processes,
    helping you build a strong, motivated team.
    The Employee Evaluation feature enables fair, structured assessments,
    fostering growth and accountability. 
    With the HR Management Plan, you can align your people strategies with business goals,
    ensuring smooth operations and a supportive workplace culture.
    The Recruitment tool simplifies talent acquisition,
    allowing you to find and onboard the right people efficiently.
    Finally, our Retention Plan provides actionable insights and strategies
    to keep your top talent engaged and committed, reducing turnover and strengthening team stability.
    `,
  },
  {
    title: `Marketing`,
    description: `
    Our Marketing tools equip you with everything needed to establish
    a strong brand presence and engage your audience effectively.
    The Brand Positioning feature helps you define and communicate
    your unique value, making your brand stand out in a competitive market.
    With the Content Calendar, you can plan and organize your marketing activities,
    ensuring consistent messaging across all channels.
    The Marketing Plan provides a comprehensive strategy to guide your campaigns,
    aligning them with your business goals and audience needs.
    Together, these tools create a cohesive approach to building and growing your brand.
    `,
  },

  {
    title: `Legal`,
    description: `
    Our Legal Advisor tool provides essential guidance to navigate
    the complexities of business compliance and legal requirements.
    Designed to support startups and growing businesses,
    this tool offers insights and advice to help you make informed decisions
    on contracts, intellectual property, and regulatory compliance.
    With the Legal Advisor, you can approach legal matters confidently,
    ensuring your business operates smoothly and within the law.
    `,
  },
];

function ListSection() {
  return (
    <section id="services" className="lg:py-28 pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white">
        <div className="mb-16 text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Grow your revenue</h2>
          <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">Features</p>
        </div>
        <div className="flex flex-wrap -mx-8 items-center">
          <div className="w-full lg:w-1/2 px-8">
            <ul className="space-y-12">
              {services.map((item, index) => (
                <li className="flex -mx-4" key={item.title}>
                  <div className="px-4">
                    <span
                      className={`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-500 leading-loose">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 px-8">
            <div className="lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0">
              <div className="w-full">
                <Image src={FeatureSvg} alt="Feature icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListSection;
