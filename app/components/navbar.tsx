



export default function Navbar() {
  return (
    <> 
    <div className="navbar">
      {/* logo div */}
        <div className="nav-container">
            <div className="logo-1">
            <img className="image-1" src="/navbar/logo.png" alt="" /></div>
            <img  className="image-2" src="/navbar/logo_2.png" alt="" />
        </div>
        {/* table div */}
        <div className="table-container">
  <div className="table-row">
    <div className="table-cell">브랜드스토리</div>
    <div className="table-cell">이동가방</div>
    <div className="table-cell">산책용품</div>
    <div className="table-cell">장난감</div>
    <div className="table-cell">개인결제</div>
  </div>
</div>

    </div>
    
    </>
  )
}
