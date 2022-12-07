export default function ProductGallery({ data }) {
  return (
    <div className="gallery-product">
      <div className="first-img">
        <img className="mobile" src={data.gallery.first.mobile} alt="" />
        <img className="tablet" src={data.gallery.first.tablet} alt="" />
        <img className="desktop" src={data.gallery.first.desktop} alt="" />
      </div>

      <div className="second-img">
        <img className="mobile" src={data.gallery.second.mobile} alt="" />
        <img className="tablet" src={data.gallery.second.tablet} alt="" />
        <img className="desktop" src={data.gallery.second.desktop} alt="" />
      </div>

      <div className="third-img">
        <img className="mobile" src={data.gallery.third.mobile} alt="" />
        <img className="tablet" src={data.gallery.third.tablet} alt="" />
        <img className="desktop" src={data.gallery.third.desktop} alt="" />
      </div>
    </div>
  );
}
