import React, { Component } from 'react';
import { TagInput } from 'reactjs-tag-input';
import RichTextEditor from 'react-rte';
import DateRangePicker from 'react-daterange-picker';
import '../../node_modules/react-daterange-picker/dist/css/react-calendar.css';

export default class Form extends Component {
    projectdata;
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            selectedCategory: '',
            tags: [],
            value: RichTextEditor.createEmptyValue(),
            selectedSize: ['0'],
            dates: null,
        }
        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onTagsChanged = this.onTagsChanged.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSelectedSize = this.handleSelectedSize.bind(this);
    }

    onProductNameChange = (e) => {
        this.setState({ product_name: e.target.value }); 
        console.log(this.state.product_name)
    }

    onTagsChanged = (tags) => {
        this.setState({ tags: tags })
        console.log(this.state.tags)
    }

    onChange = (value) => {
        this.setState({ value: value });
        console.log(this.state.value)
    };

    handleSelectedSize = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({ selectedSize: value });
        console.log(this.state.selectedSize)
    }

    handleselectedCategory(e) {
        this.setState({ selectedCategory: e.target.value });
        console.log(this.state.selectedCategory)
    }

    onSelect = (dates) => {
        this.setState({ dates: dates })
        console.log(this.state.dates.start._d)
        console.log(this.state.dates.end._d)
    }

    cancel=()=>{
        alert('Ooops You have cancelled the product !!!');
        this.props.history.push("/product-cancel");
    }
    clear=()=>{
        this.setState({
            product_name: '',
            selectedCategory: '',
            tags: [],
            value: RichTextEditor.createEmptyValue(),
            selectedSize: ['0'],
            dates: null,
        })
    }
    submit=()=>{
        if(this.state.product_name === ''){
            alert('Please enter project name !')
        }else if(this.state.selectedCategory === ''){
            alert('Please select category !')
        }else if(this.state.tags === ''){
            alert('Please enter product tags !');
        }else if(this.state.selectedSize === '0'){
            alert('Please select size');
        }else if(this.state.dates === null){
            alert('Please select dates')
        }else{
            this.props.history.push("/product-detail"); 
        }
    }

    //React Life Cycle Methods

    UNSAFE_componentWillMount(){
        this.projectdata = JSON.parse(localStorage.getItem('project'))
        if(localStorage.getItem('project')){
            this.setState({
                product_name:this.projectdata.product_name
            })
        }else{
            this.setState({
                product_name:'',
            })
        }
    }

    UNSAFE_componentWillUpdate(nextProps,nextState){
        localStorage.setItem('project',JSON.stringify(nextState));
    }

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <form>
                            <div className='form-group'>
                                <label>Project Name</label>
                                <input type='text' className='form-control' defaultValue={this.state.product_name}
                                onChange={this.onProductNameChange}/>
                            </div>
                            <div className='form-group'>
                                <label>Project Category</label>
                                <select className="form-control" value={this.state.selectedCategory} onChange={this.handleselectedCategory.bind(this)}>
                                    <option value="0">Select Category</option>
                                    <option value="1">Category-1</option>
                                    <option value="2">Category-2</option>
                                    <option value="3">Category-3</option>
                                    <option value="4">Category-4</option>
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
                                    border-radius:6px;
                                    width:100%;
                                    position:relative;
                                `}
                                inputStyle={`
                                    background: white;
                                `}
                            />
                            <div className="form-group" >
                                <label>Product Description</label>
                                <RichTextEditor
                                    value={this.state.value}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Available Size (Note: Press "ctrl" for multiple select)</label>
                                <select className="form-control" multiple={true} value={this.state.selectedSize} onChange={this.handleSelectedSize}>
                                    <option value="0">Select Size</option>
                                    <option value="1">Size-1</option>
                                    <option value="2">Size-2</option>
                                    <option value="3">Size-3</option>
                                    <option value="4">Size-4</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>Select Date</label>
                                <DateRangePicker
                                    onSelect={this.onSelect}
                                    value={this.state.dates}
                                />
                            </div>
                            <div style={{width:'100%'}} className="btn-group">
                                <button type="button" className="btn btn-danger" onClick={() => {this.cancel()}}>Cancel</button>
                                <button type="button" className="btn btn-warning" onClick={() => {this.clear()}}>Clear</button>
                                <button type="button" className="btn btn-success" onClick={() => {this.submit()}}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}