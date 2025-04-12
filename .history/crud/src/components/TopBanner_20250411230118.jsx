import myimg from '../images/banner.webp';

const TopBanner = () => {
  return (
      <>
        <img src={myimg} alt="Banner" className="w-full h-64 object-cover" />
      </>
  )
}

export default TopBanner;