
type SliderItemType = {
    img: string;
    date: string;
    actived?: boolean;
}

export const SliderItem = ({ img, date, actived = false }: SliderItemType) => {
    return (
        <div className={`carousel-item ${(actived) ? 'active' : ''} mb-5 `} >
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
                <button className='btn btn-primary mb-3 p-3'>Leer más</button>
                <p>{date}</p>
            </div>
        </div>
    )
}
