import React from "react";
import _ from "lodash";

export default (props) => {
  return (
      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img src={props.image} width="100%"/>
          <div className="caption">
            <h4>{props.name}</h4>
            <p>
            {
                _.trunc(props.content, {
                  'length': (!props.truncLen) ? 100: props.truncLen,
                })
            }
            </p>

            {(!props.buttons)? "": props.buttons}
          </div>
        </div>
      </div>
  );
};
