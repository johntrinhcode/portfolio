import { HistoryData } from 'data/history-data';
const History = () => {
  return (
    <div>
      <a href="/JohnTrinh_CV_2022.pdf" download="JohnTrinh_CV.pdf">
        <button className="border-slate-400 border text-slate-800 not-italic text-center py-2 px-4 rounded-md">
          Download Resume
        </button>
      </a>

      <ul className="mt-4 flex flex-col gap-4">
        {HistoryData.map((item, index) => {
          return (
            <li className="flex flex-col" key={index}>
              <div className="flex gap-2 items-center">
                <h2 className="font-bold">{item.title}</h2>
                <div className="flex gap-1 items-center opacity-70">
                  <span className="text-xs">
                    {item.from.toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </span>
                  -
                  <span className="text-xs">
                    {item.to === 'Current'
                      ? 'Current'
                      : item.to.toLocaleDateString('en-us', {
                          year: 'numeric',
                          month: 'short',
                        })}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm">{item.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
