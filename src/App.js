import './App.scss';
import PlusIcon from './components/shapes/Plus';

function App() {
  return (
    <div className="App relative bg-customBlue">
      <div className="xl:container sm:grid sm:grid-cols-2 gap-5 m-auto">
        <div className="left-side pt-16 pb-52 lg:ml-0 -ml-16">
          <div className="content relative">
            <div className="image-container max-h-fit">
              <img className="hex-alt" src="https://honghunghospital.com.vn/wp-content/uploads/2020/05/41.-Phan-V%C4%83n-Ch%C3%AD-scaled.jpg"
                alt="image_1" />
            </div>
            <div className="image-container max-h-fit absolute top-1/2 left-1/3">
              <img className="hex-alt-2" src="https://quatangtiny.com/wp-content/uploads/2020/10/ta-bac-si-dang-kham-benh-1.jpg" alt="image_2" />
            </div>
          </div>
        </div>
        <div className="right-side pt-40 pr-20 pb-16 pl-12">
          <div className="container max-w-[352px] h-full flex flex-col justify-between">
            <div className="content leading-[44px] text-white font-semibold text-[28px]">
              Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và giản dị.
            </div>
            <div className="author pb-16">
              <div className="name text-textCustom text-[28px] font-bold uppercase">Thu Quỳnh</div>
              <div className="role text-white text-lg pt-3">Bác sĩ</div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[22px]">
          <PlusIcon type={2} />
        </div>
        <div className="absolute bottom-0 left-1/2">
          <PlusIcon type={1} size="size-10" />
        </div>
      </div>
    </div >
  );
}

export default App;
