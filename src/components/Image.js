export default function Img({img, customClass, children}){
    return(
        <div className={customClass}>
            <img className="img-fluid m-auto" src={img} alt=""/>
            {children}
        </div>
    )
}