   import React from "react";
   


   const Pageproduct =(props)=>{
    let [content,setContent] = useState(null)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then((response) => {
        setContent(response.data);
      });
  }, []);
    return (
        <Container>
        <Row>
        {content !== null ?content.map(item=><Col key={item.id} >
          <Product
            src={item.image} 
            text={item.description} 
            title={item.title} 
            price={item.price} 
            rate={item.rating.rate}
            count={item.rating.count}
           />
          </Col>): <h1>"No data found !"</h1>}
        </Row>
      </Container>
    );
}


        export default Pageproduct;