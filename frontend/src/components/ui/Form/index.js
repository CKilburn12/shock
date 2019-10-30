import React, { Component } from 'react';

class Form extends Component
{
    renderElement(id, element)
    {
        switch(element.type)
        {
            case "option":
                return (
                    <div class="form-group">
                        <label for={id}>{element.label}</label>
                        <select class="form-control" id={id}>
                            { element.options.map((option, optionId) => <option key={optionId}>{option}</option>) }
                        </select>
                    </div>
                );
            default:
                break;
        }
    }

    render()
    {
        if(this.props.model)
        {
            return this.props.model.map((element, id) => this.renderElement(id, element));
        }

        return <p>Could not find a model</p>;
    }
}

export default Form;
