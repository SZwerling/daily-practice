import { useGlobalContext } from "../context";

const Modal = () => {
    const { setShowModal, selectedMeal } = useGlobalContext()
    // const handleClose = () => {
    //     setShowModal(false)
    // }

    const { strMealThumb : image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal
     
    return(
        <aside className="modal-overlay">
            <div className="modal-container">
                <img src={image} alt={title} className="img modal-img"/>
                <div className="modal-content">
                    <h4>{title}</h4>
                    <p>cooking instructions</p>
                    <p>{text}</p>
                    <a href={source} target="_blank">original source</a>
                    <button className="btn btn-hipster close-btn" onClick={() => setShowModal(false)}>close</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal;