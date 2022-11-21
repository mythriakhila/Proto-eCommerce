import React, { useEffect, useState } from 'react';
// import styles from "../styles/feature.module.scss";
import styles from "../styles/feature.css";
import axios from 'axios';

const Main = () => {

    let [productsData, setProductsData] = useState("");

    const fetchData =async () => {
        try {
            
            const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789962/React%20Class/P.%20Akhila/featured_kwaglf.json")
            console.log(data);
            setProductsData(data.data)
        } catch (error) {
            console.log(error);
        }
       


    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(productsData)



    return (

        <div >
            <h2 className='featured'>FEATURED PRODUCTS</h2>
            <p className='amazing'>Amazing products added recently in our catalog</p>
<div className='flexbox'>
            {productsData&& productsData.map(e => (
                <div className={styles.imgContainer} >
                    {/* {e&&e.pictures.map((f)=>( */}

                    <img src={e.pictures[0].url} className={styles.image} style={{width:"290px",height:"250px"}}/>
                    {/* ))} */}
                    <p></p>
                    <p className={styles.name} style={{fontSize:"19px"}}>{e.name}</p>
                    <p className={styles.name} style={{fontSize:"15px",fontWeight:"600"}}>${e.price}</p>
                    
                </div>


            ))}
</div>


        </div>

    )
}
 export default Main;

// import React, { useEffect, useState } from 'react';
// import style from "../styles/feature.css"
// import axios from 'axios';

// const Products = () => {

//     let [productsData, setProductsData] = useState("");

//     const fetchData = async () => {
//         try {

//             const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789962/React%20Class/P.%20Akhila/featured_kwaglf.json")
//             console.log(data);
//             setProductsData(data.data)
//         } catch (error) {
//             console.log(error);
//         }



//     }
//     useEffect(() => {
//         fetchData()
//     }, [])
//     console.log(productsData)



//     return (
//         <>
//         <p className='featured'>FEATURED PRODUCTS</p>
//                      <p className='amazing'>Amazing products added recently in our catalog</p>

//         <div className={style.imgContainer}  >

//             {productsData && productsData.map(e => (
//                 <div >
// {
//     e&&e.pictures.map((f)=>(

//                     <div>
//                         <img src={f.url} className={style.image} />


//                         <p className={style.name}>{e.name}</p>
//                         {/* <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p> */}
//                     </div>
//     ))
// }
//                     {/* <div>
//                         <img src={e.pictures[1].url} className={style.image} />


//                         <p className={style.name}>{e.name}</p>
//                         <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p>
//                     </div>
//                     <div>
//                         <img src={e.pictures[2].url} className={style.image} />


//                         <p className={style.name}>{e.name}</p>
//                         <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p>
//                     </div> */}
//                 </div>


//             ))}



//         </div>
//         </>
//     )




// }



// export default Products;


