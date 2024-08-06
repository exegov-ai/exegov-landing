import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const services = [
  {
    title: `AI Implementation`,
    description: `Unlock the full potential of artificial intelligence in your organization
     with our expert AI implementation services. 
     From initial assessment to seamless integration,
     we ensure that AI technologies are effectively embedded into your business processes,
     enhancing decision-making, efficiency, and innovation.`,
  },
  {
    title: `Business Scaling`,
    description: `FScale your business with confidence and precision.
     Our business scaling services provide you with the strategies and frameworks needed to manage growth effectively,
     maintain quality, and expand your operations.
     We help you navigate the challenges of scaling to reach new markets and increase your market share.`,
  },
  {
    title: `Business Process Improvement`,
    description: `Optimize your operations with our business process improvement solutions.
    We analyze your existing processes, identify inefficiencies,
    and implement streamlined workflows that increase productivity and reduce costs.
    Our approach ensures that your business runs smoothly and is positioned for sustainable growth.`,
  },
  {
    title: `Product and Project Management`,
    description: `From ideation to launch, our product and project management services support
    the entire lifecycle of your projects. Utilizing agile methodologies like Scrum and Kanban,
    we provide structured planning, execution, and delivery,
    ensuring that your products meet market demands and achieve success.`,
  },

  {
    title: `Management Improvement`,
    description: `Enhance your leadership capabilities and management practices
    with our management improvement services.
    We offer coaching and training to build effective teams, foster innovation, and drive strategic goals.
    Our tailored solutions help you develop strong, adaptable leaders ready to tackle complex business challenges.`,
  },
];

function ListSection() {
  return (
    <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
          <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Services</p>
        </div>
        <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
          <div className={tw(`w-full lg:w-1/2 px-8`)}>
            <ul className={tw(`space-y-12`)}>
              {services.map((item, index) => (
                <li className={tw(`flex -mx-4`)} key={item.title}>
                  <div className={tw(`px-4`)}>
                    <span
                      className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className={tw(`px-4`)}>
                    <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                    <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={tw(`w-full lg:w-1/2 px-8`)}>
            <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
              <FeatureSvg width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListSection;
