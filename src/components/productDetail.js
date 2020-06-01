import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductDetail extends Component {
    projectdata;
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            selectedCategory: '',
            tags: [],
            editor: '',
            selectedSize: [],
            dates: null,
        }
    }

    UNSAFE_componentWillMount() {
        this.projectdata = JSON.parse(localStorage.getItem('project'))
        if (localStorage.getItem('project')) {
            this.setState({
                product_name: this.projectdata.product_name,
                selectedCategory: this.projectdata.selectedCategory,
            })
            console.log(this.projectdata);
        } else {
            this.setState({
                product_name: '',
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h5>Product details page</h5>
                <div className='row'>
                    <div className='col-md-4'>
                        {/* {this.projectdata.map((data, index) => {
                    return <div key={index}>
                        {data.product_name}
                    </div>
                })} */}
                        <div className="card" style={{padding:'30px'}}>
                            <div>Project Name : {this.projectdata.product_name}</div>
                            <div>Project Category : {this.projectdata.selectedCategory}</div>
                            <div>Selected Size : {this.projectdata.selectedSize}</div>
                            <div>Tags : {this.projectdata.tags.map((data, index) => {
                                return <span key={index}>
                                    {data.displayValue}
                                </span>
                            })} </div>
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <Link to="/">Go to add project page.</Link>
            </div>
        );
    }
}
