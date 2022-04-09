import Item from "./item";

export default function Listan({ lista }) {
    

    return (
        <div>
            {
                
                lista.map((item, index) => {
                    return (<Item item={item} key={index} index={index} />);
                })
                
            }
        </div>
        
    );

}