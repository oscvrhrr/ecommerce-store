/* eslint-disable react/prop-types */




function ImageGrid({top, bottom, right}) {
    return (
        <>
          <div className="component-image-grid">
            <div>
                <img src={top} alt="" />
                <img className="margin--top" src={bottom} alt="" />
            </div>
            <div>
                <img src={right} alt="" />
            </div>
          </div>  
        </>
    )
}



export default ImageGrid;