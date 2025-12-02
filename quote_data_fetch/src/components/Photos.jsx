function photos (props){
    return(
        <div>
            <h1>
                The photo show
            </h1>
            <div style={{display:'flex',flexWrap:'wrap',gap:'5px'}}>
                {
                    props.img.map((imgs,i)=>(
                        <div key={i} >
                            <img  className = "imgs" src={imgs.download_url} alt="" style={{width:'350px' , height:'250px',borderRadius:'5px' }} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default photos