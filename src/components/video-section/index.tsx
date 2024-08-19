import Preferences from '@/constants/svg/preferences.svg';

function VideoSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col max-w-4xl mx-auto pt-28">
          <div className="w-full">
            <div className="relative shadow-2xl mx-6 lg:mx-0">
              <Preferences width="100%" height="100%" />
              <iframe
                style={{ position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%` }}
                src="https://www.youtube.com/embed/C5FTD-6h6Dg?si=6rb0RO96Xs2tM3G6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
