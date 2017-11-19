import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';


import { addProduct } from './actions';

const submit = (data, dispatch) => {
  dispatch(addProduct(data));
};

const ProductAddForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submit)}>
    <div>
      <label htmlFor="product-title">
        <span>Product title</span>
        <div>
          <Field
            id="product-title"
            name="title"
            component="input"
            type="text"
            placeholder="Product Title"
          />
        </div>
      </label>
    </div>
    <div>
      <Button type="submit" bsStyle="primary">Submit</Button>
    </div>
  </form>
);

ProductAddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'productAdd' })(ProductAddForm);
