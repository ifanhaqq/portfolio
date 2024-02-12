

export default function IconCard({ pict, title }) {
    return (

        <div className="card mx-auto mt-5" style={{ width: "200px", background: 'transparent' }}>
            <img className='col-sm-12' src={pict} alt="" />
            <div className="card-body">
                <div className="card-title text-white text-center">
                    <h5>{title}</h5>
                </div>
            </div>
        </div>
    )
}