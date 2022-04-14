import Item from "./item";

export default function Listan({ lista }) {
    

    return (
        <ul>
            {
                
                lista.map((item, index) => {
                    return (<Item item={item} key={item.id} index={index} />);
                })
                
            }
        </ul>
        
    );

}