import './App.scss';
import RightSide from './components/right-side';
import LeftSide from './components/left-side';
import Shapes from './components/shapes';
import Image1 from './assets/image-1.jpg';
import Image2 from './assets/image-2.jpg';

const configs = {
  content: {
    description: "Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và giản dị.",
    author: "Thu Quỳnh",
    role: "Bác sĩ"
  },
  image: {
    hexagonType1Url: Image1,
    hexagonType2Url: Image2,
    // hexagonType1Url: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    // hexagonType2Url: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWx0aCUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
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
