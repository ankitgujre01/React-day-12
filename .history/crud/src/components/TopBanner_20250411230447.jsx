import myimg from '../images/banner.webp';

const TopBanner = () => {
  return (
      <>
          <div width="100%">
              <img src={myimg} alt="Banner" className="w-full h-64 object-cover" />
              </div>
      </>
  )
}

export default TopBanner;