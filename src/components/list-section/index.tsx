import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Business Plan Generator`,
    description: `Jumpstart your venture with a solid foundation using our Business Plan Generator.
     Transform your vision into a detailed, actionable business plan that outlines your pathway to success.
    Whether you're seeking funding or simply setting strategic goals, our tool guides you through the process,
     ensuring every critical aspect of your startup is covered.`,
  },
  {
    title: `OKRs Generator`,
    description: `Set objectives and key results that align with your vision and drive your team forward.
    Our OKRs Generator simplifies the process of establishing, tracking, and achieving your key business outcomes. 
    Foster a culture of accountability and continuous improvement as you scale.`,
  },
  {
    title: `Task Generator & Manager`,
    description: `Elevate your team's efficiency and focus with our advanced Task Generator and Manager,
     designed to seamlessly integrate with your business’s OKRs.
     This powerful feature doesn't just create tasks—it ensures that every task is strategically aligned
     with your overarching objectives,
     leveraging deep business insights to prioritize high-impact activities. With access to your business information,
     the Task Generator ensures that every assignment is of the highest quality and relevance,
     empowering your team to contribute meaningfully towards your company’s success.`,
  },
  {
    title: `Kanban Board`,
    description: `Visualize your workflow and enhance team collaboration with our Kanban Board.
    This flexible tool supports Scrum and Kanban methodologies, making it easy to adapt to your team's needs.
    Organize tasks, track progress, and identify bottlenecks early to keep your projects on track and under control.`,
  },
];

function ListSection() {
  return (
    <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
          <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Why exegov.ai?</p>
        </div>
        <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
          <div className={tw(`w-full lg:w-1/2 px-8`)}>
            <ul className={tw(`space-y-12`)}>
              {listItems.map((item, index) => (
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
