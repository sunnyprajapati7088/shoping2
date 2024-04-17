



export function Cart({data}) {
  console.log(data);
    
    return (
      
        <div className="lg:flex lg:flex-wrap lg:w-[80%] gap-4 sm:mt-4 " >
       
                {

                    data.map((item) => (

                        <div key={item.id}
                            className="lg:w-[30%] bg-[#537cdb] lg:rounded-xl p-2 md:w-[45%]">

                            <div key={item.id} className="text-center">
                                <img src={item.thumbnail} alt="" className=" aspect-square object-cover hover:w-[90%]" />
                                <div className="flex justify-between" >  <h2 className="mb-2 text-white">{item.title}</h2>
                                    <h2>${item.price}</h2></div>
                                <p className=" lg:line-clamp-4 pb-4 text-left text-[12px]">{item.description}</p>


                            </div></div>
                    ))
                }


            </div>         


                      

        
    )

}