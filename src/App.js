import './App.scss';
import RightSide from './components/right-side';
import LeftSide from './components/left-side';
import Shapes from './components/shapes';

const configs = {
  content: {
    description: "Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và giản dị.",
    author: "Thu Quỳnh",
    role: "Bác sĩ"
  },
  image: {
    hexagonType1Url: '',
    hexagonType2Url: ''
  }
};

function App() {
  return (
    <div className="app relative overflow-hidden bg-customBlue">
      <div className="xl:container sm:grid sm:grid-cols-2 m-auto">
        <div className="left-side relative z-10 sm:pt-[5.4375rem] -ml-[1.3375rem] lg:ml-0 sm:-ml-16 sm:pb-[13.9375rem] ">
          <LeftSide imagesConfig={configs.image} />
        </div>
        <div className="right-side relative z-10 p-8 sm:pt-40 sm:pr-20 sm:pb-28 sm:pl-10">
          <RightSide contentConfig={configs.content} />
        </div>
        <Shapes />
      </div>
    </div>
  );
}

export default App;
