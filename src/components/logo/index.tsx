import { EXEGOV_BLUE } from '@/constants/values/colors';

function Logo() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      style={{ background: `none`, border: `none`, padding: 0, cursor: `pointer` }}
      className="flex items-center mb-4 lg:mb-0"
    >
      <img className="h-12 w-12 mr-4" src="logo.svg" alt="logo" width={48} height={48} />
      <p className="text-4xl text-indigo-500 font-bold" style={{ color: EXEGOV_BLUE }}>
        Exegov.ai
      </p>
    </button>
  );
}

export default Logo;
