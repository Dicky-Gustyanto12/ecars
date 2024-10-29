function Banner() {
    return (
      <div className="w-full carousel">
        {/* Start Slide 1 */}
        <div id="slide1" className="relative w-full carousel-item">
          <div className="mt-16 ml-20">
            {/* Start Card Section */}
            <div className="shadow-xl card bg-base-100 w-96">
              <div className="card-body">
                <h2 className="card-title">BMW M2</h2>
                <p>The new BMW M2 Coupé is an irresitible combination of breathtaking dynamics, strength and agility that always offers a joyful driving experience.</p>
                <div className="justify-end card-actions">
                  <button className="text-white btn btn-primary">View Details</button>
                </div>  
              </div>
            </div>
          </div>
          {/* End Card Section */}
          <img
            src="src/assets/banner/banner1.png"
            className="w-[73rem] h-max mt-24 -ml-36" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/* End Slide 1 */}


      

        {/* Start Slide 2 */}
        <div id="slide2" className="relative w-full carousel-item">
        <div className="mt-16 ml-20">
            {/* Start Card Section */}
            <div className="shadow-xl card bg-base-100 w-96">
              <div className="card-body">
                <h2 className="card-title">Hyundai</h2>
                <p>The new BMW M2 Coupé is an irresitible combination of breathtaking dynamics, strength and agility that always offers a joyful driving experience.</p>
                <div className="justify-end card-actions">
                  <button className="text-white btn btn-primary">View Details</button>
                </div>  
              </div>
            </div>
          </div>
          {/* End Card Section */}
          <img
            src="src/assets/banner/banner2.png"
            className="w-[73rem] h-max mt-24 -ml-36" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/* End Slide 2 */}

        <div id="slide3" className="relative w-full carousel-item">
        <div className="mt-16 ml-20">
            {/* Start Card Section */}
            <div className="shadow-xl card bg-base-100 w-96">
              <div className="card-body">
                <h2 className="card-title">Lamborghini</h2>
                <p>The new BMW M2 Coupé is an irresitible combination of breathtaking dynamics, strength and agility that always offers a joyful driving experience.</p>
                <div className="justify-end card-actions">
                  <button className="text-white btn btn-primary">View Details</button>
                </div>  
              </div>
            </div>
          </div>
          {/* End Card Section */}
          <img
            src="src/assets/banner/banner3.png"
            className="w-[73rem] h-max mt-24 -ml-36" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide4" className="relative w-full carousel-item">
        <div className="mt-16 ml-20">
            {/* Start Card Section */}
            <div className="shadow-xl card bg-base-100 w-96">
              <div className="card-body">
                <h2 className="card-title">Wuling</h2>
                <p>The new BMW M2 Coupé is an irresitible combination of breathtaking dynamics, strength and agility that always offers a joyful driving experience.</p>
                <div className="justify-end card-actions">
                  <button className="text-white btn btn-primary">View Details</button>
                </div>  
              </div>
            </div>
          </div>
          {/* End Card Section */}
          <img
            src="src/assets/banner/banner4.png"
            className="w-[73rem] h-max mt-24 -ml-36" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    )
}

export default Banner