

const Display = ({ colors }) => {
    console.log(colors);
    return (
        <>
        <h2>Colors & ColorCode</h2>
        <hr />

            {colors.map((e, idx) => {
                return (
                    <div className = "displays" style={{ height:135, width:110}}>
                        <p style={{height:100, width:110, backgroundColor:`${e.color_code}`}}> </p>
                        <p className="text" key={idx} >{e.color_code}</p>
                        <span className="text"  style={{color:`${e.color_code}`, fontSize:10}} >{e.color_name}</span>

                    </div>
                )
            })}
        </>
    )
}

export default Display;
