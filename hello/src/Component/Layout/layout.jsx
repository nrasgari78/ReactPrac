import React, {useEffect, useState} from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import ProductsList from "../ProductsList/ProductsList";
import axios from "../../axios"
import Post from "../post/Post";
import Fullpost from "../post/fullpost/Fullpost";
import NewPost from "../post/NewPost/NewPost";
import {Link, Route, Routes,Navigate} from "react-router-dom";
import ProductListLayout from "../ProductsList/productListLayout";
import Submited from "../post/submited/submited";

const Layout=()=>{
    const [Productsstate,setcProductsstate]=useState({
        products: [{index: 1, title: 'Products1', price: 123}, {index: 2, title: 'Products2', price: 147}],
        showpro: false,

    })
    const [poststate,setpoststate]=useState({
        posts:[],
        error:false
    })
     const [selectedid,setselectedid]=useState(null)

    const removeproductHandler=(key)=>{
        let newproducts= [...Productsstate.products.filter((res)=>res.index!==key)]
        setcProductsstate({
            products:newproducts
        })
    }

    const changeHandler=()=>{
    alert('eeeert')
     }
    const changeInputHandler=(event)=>{
        console.log('res',event.target.value)
    // let newproducts=  [...Productsstate.products.map((res)=> res['title'] = event.target.value)]
    //
    // setcProductsstate({products: newproducts})
}
    useEffect(()=>{
            axios.get('/posts').then((res)=>{
                //receive limited data
                // setpoststate(res.data)
                const limitedposts=res.data.splice(0,4)
                const udpatedposts= limitedposts.map((item)=>{
                return   {...item,author:'narges'}
                })
                setpoststate({posts:udpatedposts})
            }).catch((err)=>{
               setpoststate({error:true})
        })
        },[]
    )
   const clickpostHandler=(id)=>{
       setselectedid( id)
   }

    return(
    <div>
    <Navbar
        data={Productsstate.products}/>

            <Routes>
                <Route path="/products1" exact element={<ProductListLayout/>} />
                <Route path="/products2" exact element={<ProductListLayout/>} />
                <Route path="/:id" exact element={<Fullpost/>}/>
                <Route path="/submited" exact element={<Submited/>}/>
                <Route path="/test" exact element={<Navigate  to="/products1"/>} />
                <Route  render={()=><h2>not found</h2>} />
            </Routes>




        <ProductsList
            data={Productsstate.products}
            del={(key)=>removeproductHandler(key)}
            update={changeHandler}
            changeInput={changeInputHandler}
        />
        {
            poststate.error ? <p>fetching Error</p> :
                poststate.posts.map((item) => {
                            return (
                                <div>
                                    <Link to={'/'+item.id}>
                                    <Post
                                        title={item.title}
                                        author={item.author}
                                        id={item.id}
                                        clickpost={() => clickpostHandler(item.id)}/>
                                    </Link>
                                </div>
                            )
                        }
                    )
        }
        {/*<Fullpost*/}
        {/*    id={selectedid}*/}
        {/*    key={selectedid}*/}
        {/*/>*/}
        <NewPost></NewPost>

    </div>

    )
}
export default Layout
