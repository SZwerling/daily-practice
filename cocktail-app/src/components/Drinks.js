import { useGlobalContext } from "../context";

const Drinks = () => {
    const context = useGlobalContext();
    console.log(context)
    return(
        <div>DRINKS</div>
    )
}

export default Drinks;