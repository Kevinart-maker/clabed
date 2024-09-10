import choose from "../data/choose";

const Choose = () => {
    return (  
        <div className="choose">
            <h1>Why Choose Us</h1>
            <div className="choose-container">
                {
                    choose.map((choose, index)=>(
                        <div 
                            className={`
                                choose-box
                                ${
                                    index === 0
                                     ? 'item-one'
                                     : index === 1
                                     ? 'item-two'
                                     : index === 2
                                     ? 'item-three'
                                     : 'item-four'
                                }
                            `} key={choose.id}>
                            <img src={choose.img} alt={choose.title} />
                                <span className="content">
                                    <h2>{choose.title}</h2>
                                    <p>{choose.content}</p>
                                </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Choose;
<div className="choose-container">
    <h1>Why Choose Us</h1>
</div>