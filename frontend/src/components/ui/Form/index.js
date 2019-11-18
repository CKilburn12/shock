import React, { Component } from 'react';

class Form extends Component
{
    constructor()
    {
        super();
    }

    renderElement(id, element)
    {
        switch(element.type)
        {
            case "option":
                return (
                    <div className="form-group">
                        <label for={id}>{element.label}</label>
                        <select class="form-control" id={id}>
                            { element.options.map((option, optionId) => <option key={optionId}>{option}</option>) }
                        </select>
                    </div>
                );
            case "text":
                var value = "";
                if(element.value != null) value = element.value;

                return (
                    <div className="form-group">
                        <label for={id}>{element.label}</label>
                        <input id={id} className="form-control" type="text" value={value}></input>
                    </div>
                );
            case "text-readonly":
                    var value = "";
                    if(element.value != null) value = element.value;

                    return (
                        <div className="form-group">
                            <label for={id}>{element.label}</label>
                            <input id={id} className="form-control" type="text" readOnly="true" value={value}></input>
                        </div>
                    );
            case "text-area":
                    var value = "";
                    if(element.value != null) value = element.value; 

                    return (
                        <div className="form-group">
                            <label for={id}>{element.label}</label>
                            <textarea id={id} className="form-control" type="text" value={value}></textarea>
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
