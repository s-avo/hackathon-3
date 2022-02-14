import image1 from "../Images/image1.jpg";

function Category1Desc() {
    return(
        <div className="container p-5">
                <div className="row">
                        <div className="col-4">
                            <img src={image1} height="200px" />
                        </div>
                        <div className="col-8">
                            <p>Bootstrap's grid system is responsive, and the columns will re-arrange depending on the screen size: On a big screen it might look better with the content organized in three columns, but on a small screen it would be better if the content items were stacked on top of each other.</p>
                    </div>
                </div>
            </div>
    )
}

export default Category1Desc;