import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function ChangeDate(StrDate){
      let MyDate = new Date(StrDate)
      return MyDate.toDateString();

    }

    //Im only using one component to render both the comments and the Dish
    function RenderDish({_selecteddish, _comments}){
      if (_selecteddish != null){
        //Render the Title (under the image)
          const dishTitle= (
            <div>
              <div className="m-1 bold"> {_selecteddish.name} </div>
            </div>
            );
        //Render the Description (under the image)
          const dishGeneral= (
          <div>
            <div className="m-1"> {_selecteddish.description} </div>
          </div>
          );

        //Render the Bundle (Image+ Title + Description)
          const dishImage = (
            <div key={_selecteddish.id} className="col-12 col-md-5 m-5">
              <Card>
                  <CardImg widht="100%" src={_selecteddish.image} alt={_selecteddish.name} />
                  <h3>{dishTitle}</h3>
                  {dishGeneral}
              </Card>
            </div>
          );

        //Render the List of Comments
          const Comments_Dishes= (_comments.map((d) =>
          <ul key={d.id}>
            <div className="row">{d.comment}</div>
            <div className="row">-- {d.author}, <ChangeDate StrDate = {d.date} /> </div> 
          </ul>));
      

          return(
            <div className="container">
              <div className="row">
                {dishImage}
                <div className="col-12 col-md-5 m-5">
                  <h1>Comments</h1>
                    {Comments_Dishes}
                </div>
              </div>
            </div>
          );
          
      }
      else{
          return (
              <div >

              </div>
          );
      }
  }
  
//Im only using one component to render both the comments and the Dish
const DishDetail = (props) => {
                                if (props.dish != null)
                                return(
                                        <div className="container">
                                          <div className = "row">
                                            <Breadcrumb>
                                              <BreadcrumbItem><Link to='/Home'> Home </Link></BreadcrumbItem>
                                              <BreadcrumbItem><Link to='/Menu'> Menu </Link></BreadcrumbItem>
                                              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                                            </Breadcrumb>
                                            <div class="col-12">
                                              <h3>{props.dish.name}</h3>
                                              <hr />
                                            </div>
                                          </div>
                                          <div className="row">
                                            <RenderDish _selecteddish = {props.dish} _comments={props.comments} />
                                          </div>
                                        </div>
                                )
}
                                
export default DishDetail;