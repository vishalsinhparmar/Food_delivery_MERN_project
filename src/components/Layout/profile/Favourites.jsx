import pagenotFound from '../../../assets/pagenotFound/pagenotFound.png'
const Favourites = ()=>{
     return (
        <div className="max-w-full w-1/2 grid place-content-center">
            <p className='text-center'>PAGE NOT FOUND</p>
              <div className='w-full object-cover'>
                  <img src={pagenotFound} alt="" className="w-1/2" />
              </div>
        </div>
     )
};

export default Favourites;