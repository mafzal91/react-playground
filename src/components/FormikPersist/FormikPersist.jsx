import React from 'react';
import { withRouter } from 'react-router-dom'
import isEqual from 'lodash/isEqual';
import { useQueryParams as queryParamHook } from '../../hooks'
import { connect } from 'formik'

const { useQueryParams } = queryParamHook;

const Persist = (props) => {
  const { query, updateQuery } = useQueryParams();

  React.useEffect(() => {
      props.formik.setFormikState(query);
  });

  React.useEffect(() => {
    const hasValuesChange = isEqual(preValues.current, props.formik.values);
    if (!hasValuesChange) {
      // props.formik.setFormikState(t.query);
      updateQuery(props.formik.values);
    }
  });

  const preValues = React.useRef();
  React.useEffect(() => {
    preValues.current = props.formik.values;
  });

  return null
}

export default withRouter(connect(Persist));
