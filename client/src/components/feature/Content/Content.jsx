import React from 'react'; 
import ProductCard from '../../layout/ProductCard';
import './content.css';

class Content extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/allproducts')
      .then(res => res.json())
      .then(prods => this.setState({ products: prods }))
  }
  
 // sort is a higher order function because it takes a callback
  filterFromHighToLow = () => {
    fetch('/highToLow')
    .then(res => res.json())
    .then(prods => this.setState({ products: prods }))
  }

  filterFromLowToHigh = () => {
    fetch('/lowToHigh')
    .then(res => res.json())
    .then(prods => this.setState({ products: prods }))
  }

  filterNameInOrder = () => {
    fetch('/alphabetical')
    .then(res => res.json())
    .then(prods => this.setState({ products: prods }))
  }


  filterNameBackwards = () => {
    fetch('/backward')
    .then(res => res.json())
    .then(prods => this.setState({ products: prods }))
  }


  render(){
    return (
      <>
      <div>
        <button className="btn btn-primary" onClick={this.filterFromHighToLow} >High to Low</button>
        <button className="btn btn-primary" onClick={this.filterFromLowToHigh} >Low To High</button>
        <button className="btn btn-primary" onClick={this.filterNameInOrder} >A to Z</button>
        <button className="btn btn-primary" onClick={this.filterNameBackwards} >Z to A</button>
        {this.state.products.map(p => <ProductCard key={p.product_id} name={p.name} imageURL={p.image_url} description={p.description} price={p.price} />)}
      </div>
      </>
    )
  }
}
export default Content;