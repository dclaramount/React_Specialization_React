import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';




function RenderMenuItem({dish, onClick}){
    return(
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg widht="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-5">
              <RenderMenuItem dish = {dish} />
          </div>
        );
    });

    return (
      <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/Home'> Home </Link></BreadcrumbItem>
                <BreadcrumbItem active> Menu </BreadcrumbItem>
            </Breadcrumb>
            <div class="col-12">
                <h3> Menu </h3>
                <hr />
            </div>
            {menu}
        </div>
      </div>
    );
}



export default Menu;