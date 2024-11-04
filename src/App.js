import './App.scss';

function App() {
  return (
    <div className="App bg-customBlue">
      <div className="md:container sm:grid sm:grid-cols-2 gap-5 m-auto px-4">
        <div className="left-side flex">
          <div className="image-container max-h-fit">
            <img src="https://honghunghospital.com.vn/wp-content/uploads/2020/05/41.-Phan-V%C4%83n-Ch%C3%AD-scaled.jpg"
              alt="image_1" />
          </div>
          <div className="image-container max-h-fit">
            <img src="https://quatangtiny.com/wp-content/uploads/2020/10/ta-bac-si-dang-kham-benh-1.jpg" alt="image_2" />
          </div>

        </div>
        <div className="right-side">
          <div className="container py-8 h-full flex flex-col justify-around">
            <div className="content text-white font-semibold text-xl">
              Tôi không nghĩ mình đang khác Tôi không nghĩ mình đang khác Tôi không nghĩ mình đang khác Tôi không nghĩ mình đang khác Tôi không nghĩ mình đang khác Tôi không nghĩ mình đang khác Tôi không nghĩ mình đang khác
            </div>
            <div className="author">
              <div className="name text-textCustom text-xl font-bold uppercase">Thu Quỳnh</div>
              <div className="role text-white text-lg">Bác sĩ</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hexagon">
        <img src="https://fastly.picsum.photos/id/866/500/300.jpg?hmac=gTBX2xIXKy_WSASp2ITBfmK7WFeBZyiuIumiEUmowcw" alt="Hexagon Image" />
      </div>
    </div >
  );
}

export default App;
