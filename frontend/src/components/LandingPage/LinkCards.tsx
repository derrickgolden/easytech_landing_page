
const LinkCards = () =>{
    const details = [ 
        {lebal: "CBC and 8.4.4 curriculum schemes", to: "https://easytech.africa/", detail: 0, bg_color: "#",
            exp: "Search and download schemes, teaching plans, exams, past papers and many more."
         },
        {lebal: "Create Quotation", to: "https://easytech-myinvoice.netlify.app/", detail: 0, bg_color: "#",
            exp: "Send a quick PDF quotaion to client of goods or services you're offering."
         },
        {lebal: "Stream Movies", to: "https://japtech.africa/", detail: 0, bg_color: "#",
            exp: "Stream and request any movie. Excusive for JAP Technology client."
         },
    ]

    return(
        <section className="lower-section bg-white d-flex flex-row flex-wrap justify-content-around ">
            {
                details.map((detail, i) =>(
                    <div key={i} className={`mb-4 card col-md-5 col-lg-3 text-center card 
                        shadow p-4  bg-success-subtle`}
                    >
                        <div >
                            <div className="card-content clearfix">
                                <p className="card-stats-title right card-title  wdt-lable">{detail.exp}</p>
                                <a className="btn btn-secondary shadows-into-light-regular " href={detail.to} 
                                    style={{letterSpacing: "2px"}}
                                    role="button">{detail.lebal}
                                </a>
                            </div>

                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default LinkCards;