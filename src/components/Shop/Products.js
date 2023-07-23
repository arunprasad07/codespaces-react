import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS = [{
    id: 'p1',
    title: 'Book 1',
    description: 'My first boom',
    price: 6,
  },{
    id: 'p2',
    title: 'Book 2',
    description: 'My Second book',
    price: 6,
  }];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => 
          (<ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />)
        )}
      </ul>
    </section>
  );
};

export default Products;
