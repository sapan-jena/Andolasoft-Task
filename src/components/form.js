import React, { Component } from 'react';
import { TagInput } from 'reactjs-tag-input';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_category: '',
            tags: [],
        }
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    onTagsChanged(tags) {
        this.setState({ tags })
    }
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <form>
                            <div className='form-group'>
                                <label>Project Name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>Project Category</label>
                                <select class="form-control">
                                    <option value="cat-1">Category-1</option>
                                    <option value="cat-2">Category-2</option>
                                    <option value="cat-3">Category-3</option>
                                    <option value="cat-4">Category-4</option>
                                    <option value="cat-5">Category-5</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Product Tag</label>
                            </div>
                            <TagInput tags={this.state.tags} onTagsChanged={this.onTagsChanged} placeholder="Add new product" 
                                wrapperStyle={`
                                    background: #fff;
                                    box-shadow: none;
                                    border: 1px solid #ddd;
                                    border-radius:4px;
                                    width:95%;
                                    margin-top:45px;
                                `} 
                                inputStyle={`
                                    background: white;
                                `}
                            />
                            <div class="form-group">
                                <label style={{marginTop:'50px'}}>Product Description</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}